/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-21
 * Description: Governed by ManageMyOpz React coding standards. Hero section with Faustina-style stacked card slideshow reveal, transparent cutout profile photo, and pure monochrome theme.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Mail, Phone, Sparkles, MapPin } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { portfolioContent } from '../data/content';

export const Hero = () => {
  const { personal, stats } = portfolioContent;
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Faustina-style card stack data
  const cardSlides = [
    {
      id: 'portrait',
      tag: 'Profile',
      title: 'Thivahar Balasubramaniam',
      subtitle: 'Associate Software Engineer Intern @ Orbytes',
      highlight: 'Bangalore, India',
    },
    {
      id: 'analyst',
      tag: 'Data Analytics',
      title: 'Statistical Modeling & EDA',
      subtitle: 'M.Sc. Data Science & Analytics (2024–2026)',
      highlight: 'R² = 0.917 Econometrics',
    },
    {
      id: 'ml_dev',
      tag: 'Applied ML & Systems',
      title: 'NLP & Workflow Balancing',
      subtitle: '85% Sentiment Acc. • 93% Imbalance Reduction',
      highlight: 'React & PostgreSQL',
    }
  ];

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % cardSlides.length);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
      {/* Background Monochrome Gradients & Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none bg-dots-pattern opacity-40 dark:opacity-30" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neutral-200/50 dark:bg-white/[0.03] rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-neutral-300/30 dark:bg-neutral-800/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-neutral-200/30 dark:bg-neutral-900/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Pitch */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-200/80 dark:bg-neutral-900/90 border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 text-xs font-semibold tracking-wide mb-6 shadow-sm hover:scale-[1.02] transition-transform duration-250">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900 dark:bg-white"></span>
              </span>
              <span>Fresher - Open to Data Analyst Roles</span>
            </div>

            {/* Candidate Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-neutral-950 dark:text-white leading-[1.12]">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            {/* Professional Subheading */}
            <p className="mt-4 text-base sm:text-lg font-medium text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              {personal.title}
            </p>

            {/* Core One-Line Pitch */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/70 border-l-4 border-neutral-900 dark:border-white max-w-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm">
              <p className="text-neutral-800 dark:text-neutral-200 font-medium italic text-base sm:text-lg leading-snug">
                "{personal.tagline}"
              </p>
            </div>

            {/* Current Affiliation Callout */}
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neutral-900 dark:text-white shrink-0" />
              <span>
                Currently engineering <strong>Management Data</strong> (Business Directory & ML Recommender) at <strong>Orbytes</strong>
              </span>
            </p>

            {/* Action Buttons: View Projects & Download Resume */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-950 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-bold text-sm shadow-lg shadow-black/10 dark:shadow-white/5 transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Thivahar_Balasubramaniam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 hover:border-neutral-950 dark:hover:border-neutral-400 text-neutral-900 dark:text-neutral-100 font-semibold text-sm transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] w-full sm:w-auto shadow-sm"
              >
                <FileDown className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location Quick Bar */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 text-xs relative z-30">
              <div className="flex items-center gap-2 mr-2">
                <MapPin className="w-4 h-4 text-neutral-900 dark:text-neutral-200" />
                <span>Bangalore, India (Relocation Ready)</span>
              </div>
              <div className="flex items-center gap-3 relative z-30 pointer-events-auto">
                <a 
                  href={personal.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-250 shadow-sm cursor-pointer"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
                <a 
                  href={personal.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-250 shadow-sm cursor-pointer"
                >
                  <GitHubIcon className="w-4 h-4" />
                </a>
                <a 
                  href={personal.socialLinks.email}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-250 shadow-sm cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a 
                  href={personal.socialLinks.phone}
                  aria-label="Direct Phone Contact"
                  className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all duration-250 shadow-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Faustina-style Stacked Card Slideshow / Pop-in Photo Reveal */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center">
              
              {/* Stacked Card 3 (Bottom Layer) */}
              <motion.div 
                animate={{ 
                  rotate: -6,
                  y: 12,
                  scale: 0.92,
                  opacity: 0.35,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-3xl bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-md"
              />

              {/* Stacked Card 2 (Middle Layer) */}
              <motion.div 
                animate={{ 
                  rotate: 4,
                  y: 6,
                  scale: 0.96,
                  opacity: 0.65,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-3xl bg-neutral-100 dark:bg-neutral-850 border border-neutral-300/80 dark:border-neutral-700/80 shadow-lg"
              />

              {/* Stacked Card 1 (Front Active Stage with Cutout Photo) */}
              <motion.div 
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                onClick={handleNextCard}
                className="relative z-10 w-full h-full rounded-3xl overflow-hidden glass-panel border border-neutral-300 dark:border-neutral-700 shadow-2xl bg-gradient-to-b from-white/90 via-neutral-100/90 to-neutral-200/90 dark:from-neutral-900/90 dark:via-neutral-950/90 dark:to-black/95 cursor-pointer group flex flex-col justify-between p-4"
              >
                {/* Top Card Bar with Faustina-style Badge & Dots */}
                <div className="flex items-center justify-between z-20 px-2 pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-neutral-200/80 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                    {cardSlides[activeCardIndex].tag}
                  </span>

                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                    0{activeCardIndex + 1} / 0{cardSlides.length}
                  </span>
                </div>

                {/* Main Transparent Cutout Portrait with Floating Parallax */}
                <div className="relative flex-1 flex items-end justify-center overflow-hidden -mx-4 -mb-4">
                  {/* Subtle Studio Backdrop Spotlight */}
                  <div className="absolute inset-0 bg-radial from-neutral-300/40 via-transparent to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent pointer-events-none" />

                  {/* Cutout Image with Subtle Float & Clean Cutout */}
                  <motion.img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="relative z-10 w-auto max-h-[92%] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: [0, -6, 0], opacity: 1 }}
                    transition={{
                      y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                      opacity: { duration: 0.6 }
                    }}
                  />

                  {/* Bottom Minimalist Glass Infobar */}
                  <div className="absolute bottom-3 inset-x-3 z-20 p-3 rounded-2xl glass-panel bg-white/80 dark:bg-neutral-900/85 border border-neutral-200 dark:border-neutral-800 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-neutral-950 dark:text-white font-display truncate">
                          {cardSlides[activeCardIndex].title}
                        </p>
                        <p className="text-[10px] text-neutral-600 dark:text-neutral-400 truncate">
                          {cardSlides[activeCardIndex].subtitle}
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 shrink-0 ml-2">
                        Click to cycle ↺
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Slide Pagination Pill Selectors below */}
            <div className="flex items-center gap-2 mt-5">
              {cardSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveCardIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeCardIndex === idx 
                      ? 'w-8 bg-neutral-900 dark:bg-white' 
                      : 'w-2 bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-700'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Stats Strip (Monochrome Redesign) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-5 sm:p-6 rounded-2xl glass-panel bg-white/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:scale-[1.03] shadow-sm group"
            >
              <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 font-bold">
                  {stat.prefix}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-950 dark:text-white tracking-tight">
                  {stat.value}
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400 line-clamp-1">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
