/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Experience timeline section with pure monochrome styling and Orbytes internship update.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Sparkles, Building2 } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Experience = () => {
  const { experience } = portfolioContent;

  return (
    <section id="experience" className="py-24 relative bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll-based Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 dark:bg-neutral-900 border border-neutral-300/80 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            Experience Timeline
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-neutral-300 dark:border-neutral-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-4 border-white dark:border-[#09090b] flex items-center justify-center transition-colors duration-300 ${
                exp.current 
                  ? 'bg-neutral-950 dark:bg-white shadow-md shadow-black/20 dark:shadow-white/20' 
                  : 'bg-neutral-400 dark:bg-neutral-700'
              }`}>
                {exp.current && (
                  <span className="w-2 h-2 rounded-full bg-white dark:bg-neutral-950 animate-pulse" />
                )}
              </div>

              {/* Main Timeline Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 font-mono">
                      <Building2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950 dark:text-white mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300/80 dark:border-neutral-700">
                      <Calendar className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-200/80 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300/80 dark:border-neutral-700">
                      <MapPin className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((ach, aIdx) => {
                    const isWip = ach.startsWith('Work in Progress:');
                    return (
                      <div 
                        key={aIdx} 
                        className={`flex items-start gap-3 p-3.5 rounded-xl transition-all duration-200 ${
                          isWip 
                            ? 'bg-neutral-200/70 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700' 
                            : 'bg-neutral-100/80 dark:bg-neutral-950/60 border border-neutral-200/70 dark:border-neutral-800/70'
                        }`}
                      >
                        {isWip ? (
                          <Sparkles className="w-4 h-4 text-neutral-900 dark:text-white mt-0.5 shrink-0" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-neutral-700 dark:text-neutral-300 mt-0.5 shrink-0" />
                        )}
                        <p className={`text-xs sm:text-sm leading-relaxed ${
                          isWip 
                            ? 'text-neutral-950 dark:text-white font-medium' 
                            : 'text-neutral-700 dark:text-neutral-300'
                        }`}>
                          {ach}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
