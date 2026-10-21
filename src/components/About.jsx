/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-21
 * Description: Governed by ManageMyOpz React coding standards. About section narrative, highlights, and theme-compliant Why Hire Me recruitment pitch & modal.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, CheckCircle2, Mail, X, ArrowUpRight } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const About = () => {
  const { about, personal } = portfolioContent;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reasons = [
    {
      title: "Data Science Rigor + Engineering Execution",
      desc: "Combines statistical modeling (R² = 0.917 econometrics, 85% NLP classification) with scalable React and PostgreSQL full-stack development."
    },
    {
      title: "Proven Production Impact",
      desc: "Engineered workload balancing systems reducing team imbalances by 93% and currently architecting enterprise recommender pipelines at Orbytes."
    },
    {
      title: "Immediate Availability & Relocation Ready",
      desc: "Based in Bangalore with 100% readiness to relocate across India for high-impact Data Analyst and Software Engineering roles."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#f4f4f6]/60 dark:bg-[#0c0c0e]/60 transition-colors duration-300">
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
            <User className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            {about.heading}
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-neutral-600 dark:text-neutral-300 leading-relaxed text-base sm:text-lg"
          >
            {about.paragraphs.map((p, idx) => (
              <div 
                key={idx} 
                className="bg-white/80 dark:bg-neutral-900/60 p-6 rounded-2xl border border-neutral-200/90 dark:border-neutral-800/80 shadow-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 hover:scale-[1.01]"
              >
                <p>{p}</p>
              </div>
            ))}

            {/* Quick Tech Tag Cloud */}
            <div className="pt-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-3">
                Core Stack Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {['Python', 'React.js', 'PostgreSQL', 'Machine Learning', 'TF-IDF', 'XGBoost', 'Tableau', 'Antigravity'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-neutral-200/70 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-800 text-xs font-mono font-medium hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights & Snapshot Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-lg font-bold font-display text-neutral-950 dark:text-white flex items-center gap-2 mb-5">
                <Sparkles className="w-5 h-5 text-neutral-900 dark:text-white" />
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-4">
                {about.highlights.map((item, idx) => (
                  <div key={idx} className="border-b border-neutral-200 dark:border-neutral-800 pb-3.5 last:border-0 last:pb-0">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recruitment Pitch Box (Theme-aware dark background & light text in dark mode) */}
              <div 
                id="why-hire-me"
                className="mt-6 p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                    <span>Why Hire Me?</span>
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-[11px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                    aria-label="Expand Why Hire Me pitch"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Unlike traditional pure analysts or front-end coders, I combine statistical modeling rigor with the software architecture skills required to ship functional, user-facing intelligence into real production platforms.
                </p>

                {/* Email in Why Hire Me */}
                <div className="mt-4 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                    Direct Contact:
                  </span>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors link-reveal"
                  >
                    <Mail className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                    <span>{personal.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Why Hire Me Dedicated Pop-up Modal (Theme-Compliant Dark BG & Light Text) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-8 z-10 text-neutral-950 dark:text-white transition-colors duration-300"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-xs font-semibold uppercase tracking-wider w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Value Proposition</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-neutral-950 dark:text-white">
                Why Hire Thivahar?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                A dual-threat background designed for agile engineering and analytics teams.
              </p>

              {/* Reasons List */}
              <div className="mt-6 space-y-4">
                {reasons.map((r, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800"
                  >
                    <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-neutral-900 dark:text-white shrink-0" />
                      <span>{r.title}</span>
                    </p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300 pl-6 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Modal Footer with Direct Email Action */}
              <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Directly</span>
                </a>

                <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                  {personal.email}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
