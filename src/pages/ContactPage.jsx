import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, Check, Github, Linkedin, Mail, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: '',
    message: ''
  });

  // Validation rules
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        'service_pdj6b5w', // Create a service in EmailJS and put ID here
        'template_fv0heep', // Create an email template and put ID here
        {
          from_name: formState.name,
          from_email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: 'blsthathsara@gmail.com'
        },
        'hLt3-AGSDqAix159e' // Your EmailJS public key
      );

      if (result.status === 200) {
        showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      showNotification('error', 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen p-8"
    >
      <div className="max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
              Feel free to reach out through the form below or connect with me on social media.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/BLSThathsara20"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/blsthathsara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:blsthathsara@gmail.com"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="relative max-w-2xl mx-auto"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState(prev => ({...prev, name: e.target.value}));
                      if (errors.name) {
                        setErrors(prev => ({...prev, name: ''}));
                      }
                    }}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg
                             focus:outline-none focus:ring-1 transition-colors
                             ${errors.name 
                               ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                               : 'border-white/10 focus:border-white/20 focus:ring-white/20'}`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState(prev => ({...prev, email: e.target.value}));
                      if (errors.email) {
                        setErrors(prev => ({...prev, email: ''}));
                      }
                    }}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-lg
                             focus:outline-none focus:ring-1 transition-colors
                             ${errors.email 
                               ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                               : 'border-white/10 focus:border-white/20 focus:ring-white/20'}`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => {
                    setFormState(prev => ({...prev, subject: e.target.value}));
                    if (errors.subject) {
                      setErrors(prev => ({...prev, subject: ''}));
                    }
                  }}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg
                           focus:outline-none focus:ring-1 transition-colors
                           ${errors.subject 
                             ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                             : 'border-white/10 focus:border-white/20 focus:ring-white/20'}`}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  value={formState.message}
                  onChange={(e) => {
                    setFormState(prev => ({...prev, message: e.target.value}));
                    if (errors.message) {
                      setErrors(prev => ({...prev, message: ''}));
                    }
                  }}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg
                           focus:outline-none focus:ring-1 transition-colors resize-none
                           ${errors.message 
                             ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50' 
                             : 'border-white/10 focus:border-white/20 focus:ring-white/20'}`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400 flex items-center gap-1"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20
                         flex items-center justify-center gap-2 transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Notification */}
          <AnimatePresence>
            {notification.show && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg backdrop-blur-lg
                          flex items-center gap-2 border
                          ${notification.type === 'success' 
                            ? 'bg-green-500/20 border-green-500/20' 
                            : 'bg-red-500/20 border-red-500/20'}`}
              >
                {notification.type === 'success' ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <p>{notification.message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;