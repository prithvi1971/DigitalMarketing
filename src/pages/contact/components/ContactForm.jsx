import React, { useMemo, useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import ReCAPTCHA from 'react-google-recaptcha';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

// Initialise Supabase client once at module scope
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Available project types
const projectTypes = [
  'Paid Advertising (PPC/Social)',
  'SEO & Content Marketing',
  'Analytics & Reporting',
  'Brand Strategy & Design',
  'Marketing Automation',
  'B2B Lead Generation',
  'E-commerce Marketing',
  'Digital Transformation',
  'Social Media Management',
  'Other / Multiple',
];

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    companyOrWebsite: '',
    projectType: '',
    notes: '',
    newsletter: false,
    privacy: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Invisible reCAPTCHA & honeypot
  const recaptchaRef = useRef(null);
  const honeypotRef = useRef(null);
  const [lastSubmitAt, setLastSubmitAt] = useState(0); // 30s client cooldown

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleProjectType = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
    if (errors.projectType) {
      setErrors((prev) => ({ ...prev, projectType: '' }));
    }
  };

  const canSubmit = useMemo(() => {
    const emailOk = /\S+@\S+\.\S+/.test(formData.email);
    return (
      !!formData.firstName.trim() &&
      emailOk &&
      !!formData.companyOrWebsite.trim() &&
      !!formData.projectType &&
      !!formData.privacy &&
      !isSubmitting
    );
  }, [formData, isSubmitting]);

  const validateForm = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errs.email = 'Email is invalid';
    if (!formData.companyOrWebsite.trim())
      errs.companyOrWebsite = 'Company or website is required';
    if (!formData.projectType)
      errs.projectType = 'Please pick a project type';
    if (!formData.privacy)
      errs.privacy = 'You must accept the privacy policy';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validateForm()) return;

    const now = Date.now();
    // prevent spamming
    if (now - lastSubmitAt < 30_000) {
      setSubmitError('Please wait a few seconds before trying again.');
      return;
    }

    setIsSubmitting(true);
    try {
      // get reCAPTCHA token (ignored for now)
      await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      // honeypot should remain empty for humans
      const honeypot = honeypotRef.current?.value || '';
      if (honeypot) {
        throw new Error('Bot detected.');
      }

      // Insert into Supabase
      const { error } = await supabase
        .from('contact_requests')
        .insert([
          {
            first_name: formData.firstName,
            email: formData.email,
            company_or_website: formData.companyOrWebsite,
            project_type: formData.projectType,
            notes: formData.notes,
            newsletter: formData.newsletter,
            privacy: formData.privacy,
          },
        ]);

      if (error) {
      console.error(error);
        throw new Error('We could not submit your request. Please try again.');
      }

      setSubmitSuccess(true);
      setLastSubmitAt(now);
    } catch (err) {
      console.error(err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-brand-lg p-8 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={32} className="text-success" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Thanks — we’re on it!
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              You’ll get a reply within 24 hours with next steps and time slots
              for a discovery call.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-card rounded-2xl shadow-brand-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Ready to grow?{' '}
              <span className="text-gradient">Tell us the basics</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Quick form. Real humans. We’ll tailor our first call to your needs.
            </p>
          </div>

          {/* Invisible reCAPTCHA + honeypot */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={RECAPTCHA_SITE_KEY}
            size="invisible"
          />
          <input
            ref={honeypotRef}
            type="text"
            name="company_extra"
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] top-auto w-px h-px opacity-0"
            aria-hidden="true"
          />

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Essentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
                required
                placeholder="Jane"
              />
              <Input
                label="Work Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
                placeholder="jane@company.com"
              />
            </div>

            <Input
              label="Company or Website"
              name="companyOrWebsite"
              value={formData.companyOrWebsite}
              onChange={handleInputChange}
              error={errors.companyOrWebsite}
              required
              placeholder="Acme Inc. or https://acme.com"
            />

            {/* Project type chips */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">
                What do you need?{' '}
                <span className="text-destructive">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => {
                  const active = formData.projectType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleProjectType(type)}
                      className={[
                        'px-3 py-2 rounded-full border text-sm transition-brand',
                        active
                          ? 'bg-primary/10 text-primary border-primary'
                          : 'bg-muted text-foreground border-border hover:bg-muted/70',
                      ].join(' ')}
                      aria-pressed={active}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
              {errors.projectType && (
                <p className="mt-2 text-sm text-destructive">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Short message (optional) */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Anything else? (optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Add context, goals, links, or key challenges…"
              />
            </div>

            {/* Preferences */}
            <div className="space-y-4 pt-6 border-t border-border">
              <Checkbox
                label="Subscribe to our marketing insights newsletter"
                description="Weekly insights. Unsubscribe anytime."
                checked={formData.newsletter}
                onChange={handleInputChange}
                name="newsletter"
              />
              <Checkbox
                label="I agree to the Privacy Policy and Terms of Service"
                description="We’ll only use your info to respond to your request."
                checked={formData.privacy}
                onChange={handleInputChange}
                name="privacy"
                error={errors.privacy}
                required
              />
              {!!submitError && (
                <p className="text-sm text-destructive">{submitError}</p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                disabled={!canSubmit}
                aria-disabled={!canSubmit}
                className={[
                  'transition-colors',
                  canSubmit
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-slate-300 hover:bg-slate-300 cursor-not-allowed',
                ].join(' ')}
                iconName="Send"
                iconPosition="right"
              >
                {isSubmitting ? 'Sending…' : 'Send Request'}
              </Button>
              <p className="text-center text-sm text-text-secondary mt-4">
                We reply within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
