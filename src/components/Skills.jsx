/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Skills section with categories, monochrome meters, and scroll animations.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, BarChart3, Layers } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Skills = () => {
  const { categories } = portfolioContent.skills;
  const [activeCategory, setActiveCategory] = useState(0);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-neutral-900 dark:text-white" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-neutral-900 dark:text-white" />;
      case 'BarChart3':
      default:
        return <BarChart3 className="w-5 h-5 text-neutral-900 dark:text-white" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#f4f4f6]/60 dark:bg-[#0c0c0e]/60 transition-colors duration-300">
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
            <Layers className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            Technical Skillset
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Proficiencies categorized across software development, data science, predictive pipelines, and executive business intelligence.
          </p>
        </motion.div>

        {/* Category Tabs for Quick Filter */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-250 ${
                activeCategory === idx
                  ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-md scale-[1.02]'
                  : 'bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, cIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: cIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 sm:p-7 rounded-3xl glass-panel bg-white/80 dark:bg-neutral-900/70 border transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-xl ${
                activeCategory === cIdx 
                  ? 'border-neutral-950/70 dark:border-white/70 ring-1 ring-neutral-950/30 dark:ring-white/30' 
                  : 'border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-950 dark:text-white">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    {cat.skills.length} core tools
                  </span>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">
                        {skill.name}
                      </span>
                      <span className="font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-neutral-200/80 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-neutral-900 dark:bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
