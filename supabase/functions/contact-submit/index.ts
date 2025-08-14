import { serve } from 'https://deno.land/x/sift@0.5.0/mod.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!; // or service_role for internal inserts
const formsubmitUrl = Deno.env.get('FORMSUBMIT_URL')!;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false }
});

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Parse JSON body and check for honeypot field
  const {
    firstName,
    email,
    companyOrWebsite,
    projectType,
    notes,
    newsletter,
    recaptchaToken,
    honeypot
  } = await req.json();

  // If the honeypot has a value, treat it as spam
  if (honeypot) {
    return new Response(JSON.stringify({ error: 'Bot detected.' }), { status: 400 });
  }

  // TODO: verify recaptchaToken with Google reCAPTCHA API if you add the secret key

  // Insert the record into Supabase
  const { error } = await supabase.from('contact_requests').insert([{
    first_name: firstName,
    email,
    company_or_website: companyOrWebsite,
    project_type: projectType,
    notes,
    newsletter
  }]);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Send an email via FormSubmit (non-blocking; we ignore response)
  try {
    await fetch(formsubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New contact request from ${firstName}`,
        firstName,
        email,
        companyOrWebsite,
        projectType,
        notes,
        newsletter: newsletter ? 'Yes' : 'No'
      })
    });
  } catch (err) {
    console.error('FormSubmit error:', err);
    // We still return success even if the email fails; logs help you debug
  }

  return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
});
