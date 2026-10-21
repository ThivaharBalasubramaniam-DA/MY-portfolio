/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Education component showing academic degrees and coursework with pure monochrome styling.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Education = () => {
  const { education } = portfolioContent;

  return (
    <section id="education" className="py-24 relative bg-[#f4f4f6]/60 dark:bg-[#0c0c0e]/60 transition-colors duration-300">
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
            <GraduationCap className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            Education & Coursework
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300/80 dark:border-neutral-700">
                    {edu.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {edu.institution}
                </p>

                {/* Coursework */}
                <div className="mt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
                    Curriculum & Core Subjects
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
                <span className="font-mono">Graduation Track</span>
                <span className="text-neutral-900 dark:text-neutral-100 font-semibold">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
