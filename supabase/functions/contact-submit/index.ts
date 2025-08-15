// Deno Edge Function: contact-submit
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ---- Read secrets by NAME (these must be set in Functions → Secrets) ----
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const FORMSUBMIT_URL = Deno.env.get("FORMSUBMIT_URL")!;
const ALLOWED_ORIGINS = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
  .split(",")
  .map(s => s.trim())
  .filter(Boolean);

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE, {
  auth: { persistSession: false },
});

function corsHeaders(origin: string | null) {
  const allow =
    ALLOWED_ORIGINS.length === 0 || (origin && ALLOWED_ORIGINS.includes(origin))
      ? (origin ?? "*")
      : "null";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Max-Age": "86400",
  };
}

async function sha256Hex(s: string) {
  const enc = new TextEncoder().encode(s);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers });
  }

  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  const {
    firstName,
    email,
    companyOrWebsite,
    projectType,
    notes = "",
    newsletter = false,
    honeypot = "",
  } = body;

  // Honeypot = bot
  if (honeypot && honeypot.trim()) {
    return new Response(JSON.stringify({ error: "Bot detected" }), {
      status: 400,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  // Required fields
  if (!firstName || !email || !companyOrWebsite || !projectType) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  // Derive IP + UA, then required hashes for your schema
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "0.0.0.0";
  const user_agent = req.headers.get("user-agent") ?? "";

  const ip_hash = await sha256Hex(ip);
  const email_hash = await sha256Hex(email.toLowerCase().trim());

  // Insert
  const { error } = await supabase.from("contact_requests").insert([{
    first_name: firstName,
    email,
    company_or_website: companyOrWebsite,
    project_type: projectType,
    notes,
    newsletter,
    ip_hash,
    email_hash,
    user_agent,
  }]);

  if (error) {
    console.error("Supabase insert error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...headers, "Content-Type": "application/json" },
    });
  }

  // Fire-and-forget FormSubmit email
  try {
    const params = new URLSearchParams();
    params.set("_subject", `New contact request from ${firstName}`);
    params.set("firstName", firstName);
    params.set("email", email);
    params.set("companyOrWebsite", companyOrWebsite);
    params.set("projectType", projectType);
    params.set("notes", notes);
    params.set("newsletter", newsletter ? "Yes" : "No");

    await fetch(FORMSUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
  } catch (e) {
    console.error("FormSubmit error:", e);
  }

  return new Response(JSON.stringify({ message: "Success", wroteToDB: true }), {
    status: 200,
    headers: { ...headers, "Content-Type": "application/json" },
  });
});
