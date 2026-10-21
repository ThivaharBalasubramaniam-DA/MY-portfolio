/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-13
 * Description: Governed by ManageMyOpz React coding standards. Projects section with interactive case-study cards and high-contrast monochrome Recharts visualizations.
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  BarChart, 
  LineChart as LineChartIcon
} from 'lucide-react';
import { GitHubIcon } from './Icons';
import { 
  ResponsiveContainer, 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  LineChart as RechartsLineChart, 
  Line, 
  Cell 
} from 'recharts';
import { portfolioContent } from '../data/content';

export const Projects = ({ darkMode }) => {
  const { projects } = portfolioContent;
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning & NLP' },
    { id: 'software', label: 'Software Engineering' },
    { id: 'bi', label: 'Data & BI Analytics' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ml') return project.tags.includes('NLP') || project.tags.includes('ML Recommender') || project.tags.includes('Optimization');
    if (filter === 'software') return project.tags.includes('React') || project.tags.includes('Enterprise UI');
    if (filter === 'bi') return project.tags.includes('Tableau') || project.tags.includes('Statistical Analysis');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#fafafa] dark:bg-[#09090b] transition-colors duration-300">
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
            <FolderGit2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-neutral-950 dark:text-white">
            Projects & Technical Deep-Dives
          </h2>
          <div className="w-16 h-1 bg-neutral-900 dark:bg-white rounded-full mt-3" />
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-2xl text-sm sm:text-base">
            Detailed case studies illustrating full-cycle problem solving: from econometric modeling to reactive enterprise interfaces.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-250 ${
                filter === c.id
                  ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-md scale-[1.02]'
                  : 'bg-white/80 dark:bg-neutral-900/80 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, pIdx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: pIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between glass-panel rounded-3xl bg-white/80 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] group"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-neutral-600 dark:text-neutral-400">
                    {project.clientOrOrg}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-200/80 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 border border-neutral-300/80 dark:border-neutral-700">
                    {project.highlight}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-950 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Key Details Bullet Points */}
                <div className="mt-5 space-y-2.5">
                  {project.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-2 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Monochrome Chart Container */}
                {project.hasChart && (
                  <div className="mt-6 p-4 rounded-2xl bg-neutral-100/90 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold font-display text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                        {project.chartType === 'line' ? <LineChartIcon className="w-3.5 h-3.5 text-neutral-900 dark:text-white" /> : <BarChart className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />}
                        {project.chartTitle}
                      </span>
                    </div>

                    <div className="h-48 w-full">
                      {project.chartType === 'bar' && (
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart data={project.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#3f3f46" : "#d4d4d8"} opacity={0.3} />
                            <XAxis dataKey="model" tick={{ fontSize: 11, fill: darkMode ? '#a1a1aa' : '#52525b' }} />
                            <YAxis domain={[70, 90]} tick={{ fontSize: 11, fill: darkMode ? '#a1a1aa' : '#52525b' }} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: darkMode ? '#18181b' : '#ffffff', 
                                borderColor: darkMode ? '#3f3f46' : '#d4d4d8', 
                                borderRadius: '12px', 
                                color: darkMode ? '#ffffff' : '#000000', 
                                fontSize: '12px',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                              }}
                              formatter={(value) => [`${value}% Accuracy`, 'Result']}
                            />
                            <Bar dataKey="accuracy" radius={[6, 6, 0, 0]}>
                              {project.chartData.map((entry, index) => {
                                const colors = darkMode 
                                  ? ['#52525b', '#71717a', '#a1a1aa', '#ffffff'] 
                                  : ['#a1a1aa', '#71717a', '#3f3f46', '#18181b'];
                                return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                              })}
                            </Bar>
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      )}

                      {project.chartType === 'workload' && (
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsBarChart data={project.chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#3f3f46" : "#d4d4d8"} opacity={0.3} />
                            <XAxis dataKey="metric" tick={{ fontSize: 10, fill: darkMode ? '#a1a1aa' : '#52525b' }} />
                            <YAxis domain={[0, 110]} tick={{ fontSize: 11, fill: darkMode ? '#a1a1aa' : '#52525b' }} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: darkMode ? '#18181b' : '#ffffff', 
                                borderColor: darkMode ? '#3f3f46' : '#d4d4d8', 
                                borderRadius: '12px', 
                                color: darkMode ? '#ffffff' : '#000000', 
                                fontSize: '12px',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                              }}
                              formatter={(value) => [`${value}% Imbalance Variance`, 'Variance']}
                            />
                            <Bar dataKey="variance" radius={[6, 6, 0, 0]}>
                              <Cell fill={darkMode ? '#52525b' : '#a1a1aa'} />
                              <Cell fill={darkMode ? '#ffffff' : '#18181b'} />
                            </Bar>
                          </RechartsBarChart>
                        </ResponsiveContainer>
                      )}

                      {project.chartType === 'line' && (
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart data={project.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#3f3f46" : "#d4d4d8"} opacity={0.3} />
                            <XAxis dataKey="density" tick={{ fontSize: 10, fill: darkMode ? '#a1a1aa' : '#52525b' }} />
                            <YAxis domain={[30, 90]} tick={{ fontSize: 11, fill: darkMode ? '#a1a1aa' : '#52525b' }} />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: darkMode ? '#18181b' : '#ffffff', 
                                borderColor: darkMode ? '#3f3f46' : '#d4d4d8', 
                                borderRadius: '12px', 
                                color: darkMode ? '#ffffff' : '#000000', 
                                fontSize: '12px',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                              }}
                              formatter={(value) => [`${value}% Hotel Occupancy`, 'Predicted Rate']}
                            />
                            <Line 
                              type="monotone" 
                              dataKey="occupancy" 
                              stroke={darkMode ? '#ffffff' : '#18181b'} 
                              strokeWidth={3} 
                              dot={{ r: 4, fill: darkMode ? '#ffffff' : '#18181b' }} 
                            />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>
                )}

                {/* Dashboard Image Preview for Hawaii Project - Preserved in full original color */}
                {project.imagePreview && (
                  <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 group/img relative shadow-md">
                    <img 
                      src={project.imagePreview} 
                      alt="Hawaii Airbnb Dashboard Preview" 
                      className="w-full h-48 sm:h-52 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                      <span className="text-[11px] font-mono text-white bg-black/75 px-2.5 py-1 rounded-lg border border-white/20 backdrop-blur-sm">
                        Interactive Tableau EDA • Geospatial Map & KPI Switcher
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Tags & Links */}
              <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-100 dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors link-reveal"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  {project.highlight.includes('In Progress') ? (
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-800 dark:text-neutral-200 font-semibold font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      Active In Production
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors link-reveal"
                    >
                      <span>Explore Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
