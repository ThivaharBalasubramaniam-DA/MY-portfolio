/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Certifications component displaying verified credentials and simulations with pure monochrome styling.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Certifications = () => {
  const { certifications } = portfolioContent;

  return (
    <section id="certifications" className="py-24 relative bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
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
            <Award className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            Certifications & Industry Simulations
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Professional certifications and real-world corporate job simulations covering data engineering, big data analytics, and executive storytelling.
          </p>
        </motion.div>

        {/* Certifications Badge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 rounded-2xl glass-panel bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-[1.03] shadow-sm hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded">
                    {cert.issuer.includes('Forage') ? 'Simulation' : 'Verified'}
                  </span>
                </div>

                <h3 className="font-bold text-sm sm:text-base text-neutral-950 dark:text-white leading-snug group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="mt-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-600 dark:text-neutral-400">
                <span>{cert.type}</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
