/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Sticky navigation bar with pure monochrome styling and 300ms crossfade theme toggle.
 */

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileDown, Terminal } from 'lucide-react';
import { portfolioContent } from '../data/content';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-panel shadow-md shadow-black/5 dark:shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-neutral-950 dark:bg-white flex items-center justify-center text-white dark:text-neutral-950 font-bold font-display shadow-sm group-hover:scale-105 transition-all duration-250">
              <Terminal className="w-4 h-4 text-white dark:text-neutral-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-neutral-950 dark:text-white">
                Thivahar<span className="text-neutral-500 dark:text-neutral-400">.B</span>
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono -mt-1">
                Data & Software
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-neutral-200/60 dark:bg-neutral-900/80 p-1.5 rounded-full border border-neutral-300/70 dark:border-neutral-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-250 ${
                    isActive
                      ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-sm'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Theme Toggle & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 shadow-sm hover:scale-105"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={portfolioContent.personal.resumeUrl}
              download="Thivahar_Balasubramaniam_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-bold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-250 shadow-sm hover:scale-105 active:scale-95"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button & Quick Theme Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open navigation menu"
              className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-panel bg-white/95 dark:bg-neutral-900/95 border border-neutral-300 dark:border-neutral-800 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800">
              <a
                href={portfolioContent.personal.resumeUrl}
                download="Thivahar_Balasubramaniam_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-bold text-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
