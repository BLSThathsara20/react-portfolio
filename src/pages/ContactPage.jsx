import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Loader2,
  Github,
  Linkedin,
  Mail,
  AlertCircle,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import SEO from '../components/SEO';
import { profile } from '../data/profile';

/** Inbox for form deliveries — FormSubmit (free) posts here */
const INBOX = 'blsthathsara@gmail.com';
const MIN_FILL_MS = 3000;

const ContactPage = () => {
  const openedAt = useRef(Date.now());
  const [honey, setHoney] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const contactMethods = [
    {
      name: 'Email',
      icon: Mail,
      value: profile.email,
      link: profile.links.email,
      description: 'Best for opportunities',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      value: 'linkedin.com/in/savithathsara',
      link: profile.links.linkedin,
      description: 'Professional network',
    },
    {
      name: 'GitHub',
      icon: Github,
      value: 'BLSThathsara20',
      link: profile.links.github,
      description: 'Code & experiments',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      value: 'Quick message',
      link: profile.links.whatsapp,
      description: 'Fast response',
    },
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Please enter your name';
    else if (formState.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formState.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formState.subject.trim()) newErrors.subject = 'Please enter a subject';
    else if (formState.subject.length < 4)
      newErrors.subject = 'Subject must be at least 4 characters';
    if (!formState.message.trim()) newErrors.message = 'Please enter your message';
    else if (formState.message.length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus('error');
      setSubmitError('Please fix the highlighted fields.');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    if (honey) {
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      return;
    }
    if (Date.now() - openedAt.current < MIN_FILL_MS) {
      setSubmitStatus('error');
      setSubmitError('Please wait a moment before sending.');
      setTimeout(() => setSubmitStatus(null), 4000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          _subject: `Portfolio contact: ${formState.subject}`,
          _replyto: formState.email,
          _template: 'table',
          _captcha: 'false',
          _honey: honey,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Send failed');
      }
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const message = error?.message || '';
      setSubmitStatus('error');
      setSubmitError(
        /activation/i.test(message)
          ? 'Almost ready. Open blsthathsara@gmail.com and click the FormSubmit activation link, then send again.'
          : 'Couldn’t send just now. Email blsthathsara@gmail.com directly, or try again in a minute.'
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const fieldClass = (name) =>
    `w-full px-4 py-3 bg-surface-raised border rounded-md font-sans text-ink
     focus:outline-none focus:ring-2 transition-all duration-200
     ${
       errors[name]
         ? 'border-red-400 focus:ring-red-400/20'
         : 'border-border focus:border-accent focus:ring-accent/20'
     }`;

  return (
    <>
      <SEO
        title="Contact"
        description={`Contact ${profile.name} about AI automation, web systems, or collaboration opportunities in London.`}
        keywords={['Contact', 'Hire', 'AI Automation', 'London']}
      />

      <div className="page-shell">
        <section className="section-pad">
          <div className="container-narrow grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">Contact</p>
              <h1 className="display-title text-4xl sm:text-5xl md:text-6xl mb-6">
                Let’s talk
              </h1>
              <p className="body-lg mb-10 max-w-md">
                Questions about a project, collaboration, or something I built —
                drop a message. {profile.location}.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.name}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-border bg-surface-raised p-4 hover:border-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2 text-ink">
                      <method.icon className="w-4 h-4 text-accent" />
                      <span className="font-sans text-sm font-medium">{method.name}</span>
                    </div>
                    <p className="font-sans text-xs text-ink-muted">{method.description}</p>
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="relative space-y-5 border border-border bg-surface-raised p-6 sm:p-8"
              noValidate
            >
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                />
              </div>
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-sans text-sm font-medium text-ink mb-1.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={formState[field.name]}
                    onChange={(e) => {
                      setFormState((prev) => ({ ...prev, [field.name]: e.target.value }));
                      if (errors[field.name])
                        setErrors((prev) => ({ ...prev, [field.name]: '' }));
                    }}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className={fieldClass(field.name)}
                  />
                  {errors[field.name] && (
                    <p className="flex items-center gap-1 text-sm text-red-500 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label className="block font-sans text-sm font-medium text-ink mb-1.5">
                  Message
                </label>
                <textarea
                  rows={6}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`${fieldClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="flex items-center gap-1 text-sm text-red-500 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className={`fixed bottom-6 right-6 max-w-sm px-5 py-4 rounded-md border shadow-soft flex items-start gap-3 bg-surface-raised z-50
                ${
                  submitStatus === 'success'
                    ? 'border-accent/30'
                    : 'border-red-300'
                }`}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <p className="font-sans font-medium text-ink">Message sent</p>
                    <p className="font-sans text-sm text-ink-soft">I’ll get back to you soon.</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <div>
                    <p className="font-sans font-medium text-ink">Couldn’t send</p>
                    <p className="font-sans text-sm text-ink-soft">
                      {submitError || 'Please try again shortly.'}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ContactPage;
