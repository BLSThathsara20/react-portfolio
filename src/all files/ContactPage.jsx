import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Loader2, 
  Github, 
  Linkedin, 
  Mail, 
  Globe,
  MessageSquare,
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  // Form validation rules
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formState.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    } else if (formState.subject.length < 4) {
      newErrors.subject = 'Subject must be at least 4 characters';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_pdj6b5w',
        'template_fv0heep',
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: 'blsthathsara@gmail.com'
        },
        'hLt3-AGSDqAix159e'
      );

      setSubmitStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/BLSThathsara20",
      label: "GitHub",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/blsthathsara",
      label: "LinkedIn",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Mail,
      href: "mailto:blsthathsara@gmail.com",
      label: "Email",
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Globe,
      href: "https://blsthathsara.me",
      label: "Website",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Me - Savindu Thaththsara"
        description="Get in touch with me for collaboration opportunities, project inquiries, or just to say hello!"
        keywords={['contact', 'frontend developer', 'web developer', 'hire developer']}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen p-4 sm:p-8"
      >
        <div className="max-w-6xl mx-auto pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Info Section */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
                           rounded-lg blur-lg opacity-75"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-blue-400" />
                    <h1 className="text-3xl font-bold">Let's Connect</h1>
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your visions.
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 
                                border border-white/10 group-hover:border-white/20
                                transition-colors">
                      <div className="flex items-center gap-3">
                        <link.icon className="w-5 h-5" />
                        <span className="font-medium">{link.label}</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="relative space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 
                       border border-white/10"
            >
              {/* Form fields */}
              {[
                { name: 'name', label: 'Name', type: 'text' },
                { name: 'email', label: 'Email', type: 'email' },
                { name: 'subject', label: 'Subject', type: 'text' }
              ].map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="block text-sm font-medium pl-1">
                    {field.label}
                  </label>
                  <motion.div
                    animate={
                      focusedField === field.name
                        ? { scale: 1.02 }
                        : { scale: 1 }
                    }
                  >
                    <input
                      type={field.type}
                      value={formState[field.name]}
                      onChange={(e) => {
                        setFormState(prev => ({
                          ...prev,
                          [field.name]: e.target.value
                        }));
                        if (errors[field.name]) {
                          setErrors(prev => ({
                            ...prev,
                            [field.name]: ''
                          }));
                        }
                      }}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-lg
                               focus:outline-none focus:ring-2 transition-all duration-300
                               ${errors[field.name] 
                                 ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' 
                                 : 'border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20'}`}
                    />
                    <AnimatePresence>
                      {errors[field.name] && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-1 text-sm text-red-400 mt-1 pl-1"
                        >
                          <AlertCircle className="w-4 h-4" />
                          {errors[field.name]}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}

              {/* Message textarea */}
              <div className="space-y-1">
                <label className="block text-sm font-medium pl-1">
                  Message
                </label>
                <motion.div
                  animate={
                    focusedField === 'message'
                      ? { scale: 1.02 }
                      : { scale: 1 }
                  }
                >
                  <textarea
                    rows={6}
                    value={formState.message}
                    onChange={(e) => {
                      setFormState(prev => ({
                        ...prev,
                        message: e.target.value
                      }));
                      if (errors.message) {
                        setErrors(prev => ({
                          ...prev,
                          message: ''
                        }));
                      }
                    }}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg
                             focus:outline-none focus:ring-2 transition-all duration-300
                             resize-none
                             ${errors.message 
                               ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' 
                               : 'border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20'}`}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-1 text-sm text-red-400 mt-1 pl-1"
                      >
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r 
                         from-blue-500/20 via-purple-500/20 to-blue-500/20 
                         hover:from-blue-500/30 hover:via-purple-500/30 hover:to-blue-500/30
                         border border-white/10 hover:border-white/20
                         flex items-center justify-center gap-2 
                         disabled:opacity-50 disabled:cursor-not-allowed
                         group relative overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    backgroundPosition: ["200% 0%", "-200% 0%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    backgroundSize: "200% 100%"
                  }}
                />

                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Status Messages */}
<AnimatePresence>
  {submitStatus && (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={`fixed bottom-4 right-4 max-w-md px-6 py-4 rounded-lg backdrop-blur-lg
                border flex items-center gap-3
                ${submitStatus === 'success' 
                  ? 'bg-green-500/20 border-green-500/20' 
                  : 'bg-red-500/20 border-red-500/20'}`}
    >
      {submitStatus === 'success' ? (
        <>
          <CheckCircle2 className="w-5 h-5 text-green-400" />
          <div>
            <h3 className="font-medium">Message sent successfully!</h3>
            <p className="text-sm text-white/60">I'll get back to you soon.</p>
          </div>
        </>
      ) : (
        <>
          <AlertCircle className="w-5 h-5 text-red-400" />
          <div>
            <h3 className="font-medium">Failed to send message</h3>
            <p className="text-sm text-white/60">Please try again later.</p>
          </div>
        </>
      )}

      {/* Success sparkles animation */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 0] }}
          transition={{
            duration: 0.5,
            times: [0, 0.5, 1],
            repeat: 2,
            repeatDelay: 0.5
          }}
          className="absolute -inset-1 bg-green-500/20 rounded-lg blur-lg"
        />
      )}
    </motion.div>
  )}
</AnimatePresence>
</div>
</motion.div>
</>
);
};

export default ContactPage;