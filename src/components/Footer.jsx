/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Footer component with links, back-to-top button, and pure monochrome styling.
 */

import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { portfolioContent } from '../data/content';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const { personal } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-black py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-neutral-950 dark:bg-white flex items-center justify-center text-white dark:text-neutral-950">
              <Terminal className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-neutral-950 dark:text-white">
                {personal.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Data Analyst & Software Engineer
              </p>
            </div>
          </div>

          {/* Social Links with verified targets */}
          <div className="flex items-center gap-4">
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              &copy; {CURRENT_YEAR} Thivahar B. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 hover:scale-105 transition-all shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
