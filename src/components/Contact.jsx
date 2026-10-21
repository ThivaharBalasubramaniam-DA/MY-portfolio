/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Contact section with direct links, working inquiry form, and pure monochrome styling.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { portfolioContent } from '../data/content';

export const Contact = () => {
  const { personal } = portfolioContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch(personal.contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: personal.web3formsKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry for Thivahar',
          message: formData.message,
          to_email: personal.email
        })
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: `Message could not be sent directly via Web3Forms demo key. Please reach out directly to ${personal.email}!`
        });
      }
    } catch {
      setStatus({
        submitting: false,
        success: false,
        error: `Network error. Please feel free to email directly at ${personal.email}`
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#f4f4f6]/60 dark:bg-[#0c0c0e]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll-based Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            Let's Discuss Opportunities
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Actively seeking entry-level Data Analyst roles. Whether you have an open position, an analytics inquiry, or want to discuss ML workflows — drop a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contacts */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-xl space-y-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Email
                  </h4>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-semibold text-neutral-950 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors link-reveal"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Phone
                  </h4>
                  <a 
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-neutral-950 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors link-reveal"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Location & Mobility
                  </h4>
                  <p className="text-sm sm:text-base font-semibold text-neutral-950 dark:text-white">
                    Bangalore, India
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    Willing to relocate across India
                  </p>
                </div>
              </div>

              {/* Social Profiles with verified targets */}
              <div className="pt-5 border-t border-neutral-200 dark:border-neutral-800">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3.5">
                  Connect on Socials
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-250 shadow-sm"
                  >
                    <LinkedInIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-250 shadow-sm"
                  >
                    <GitHubIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <h3 className="text-xl font-bold font-display text-neutral-950 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                Expect a response within 24 hours.
              </p>

              {status.success && (
                <div className="mb-6 p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-900 dark:text-white shrink-0" />
                  <p className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium">
                    Thank you! Your message has been received. I'll get back to you shortly.
                  </p>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-neutral-900 dark:text-white shrink-0" />
                  <p className="text-xs sm:text-sm text-neutral-900 dark:text-white font-medium">
                    {status.error}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Entry-level Data Analyst Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Thivahar, we reviewed your projects and would like to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-bold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-250 shadow-md hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50"
                >
                  {status.submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
