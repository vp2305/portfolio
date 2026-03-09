import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const Experience = ({ data }) => {
  const [expanded, setExpanded] = useState(data[0]?.id ?? null);

  return (
    <section id="experience" className="py-28 px-6 w-full max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <span className="section-label">Career Path</span>
        <h2
          className="mt-3 text-white leading-none"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
          }}
        >
          Experience
          <span className="text-gradient-gold">.</span>
        </h2>
        <span className="gold-rule" />
      </motion.div>

      <div className="relative">
        {/* Left timeline line */}
        <div className="timeline-line hidden md:block" style={{ left: '6px' }} />

        <div className="space-y-4 md:pl-10">
          {data.map((exp, index) => {
            const isOpen = expanded === exp.id;
            return (
              <motion.div
                key={exp.id}
                {...fadeUp(0.05 + index * 0.06)}
                className="relative"
              >
                {/* Timeline dot (desktop) */}
                <div
                  className="absolute hidden md:flex items-center justify-center"
                  style={{ left: '-34px', top: '22px', width: '12px', height: '12px', transform: 'translateX(-50%)' }}
                >
                  <div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      exp.current
                        ? 'bg-amber-400 border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                        : isOpen
                        ? 'bg-amber-400/60 border-amber-400/60'
                        : 'bg-slate-500/50 border-slate-500'
                    }`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isOpen ? 'border-amber-500/20' : ''
                  }`}
                  onClick={() => setExpanded(isOpen ? null : exp.id)}
                >
                  {/* Card Header (always visible) */}
                  <div className="px-6 py-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {/* Duration badge */}
                        <span className="text-xs font-mono text-amber-400/80 px-2.5 py-0.5 rounded-full bg-amber-500/8 border border-amber-500/15">
                          {exp.duration}
                        </span>
                        {exp.current && (
                          <span className="text-xs font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-white font-semibold text-lg leading-snug">
                          {exp.role}
                        </h3>
                        <span className="text-slate-400 text-base">
                          {exp.company}
                          {exp.companyNote && (
                            <span className="text-slate-600 text-sm ml-1.5">
                              ({exp.companyNote})
                            </span>
                          )}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 mt-1.5">
                        <MapPin size={11} className="text-slate-600 flex-shrink-0" />
                        <span className="text-slate-600 text-xs">{exp.location}</span>
                        <span className="text-slate-700 mx-1">·</span>
                        <span className="text-slate-600 text-xs">{exp.type}</span>
                      </div>
                    </div>

                    {/* Expand toggle */}
                    <button
                      className="mt-1 w-8 h-8 rounded-full glass-card flex items-center justify-center flex-shrink-0 text-slate-400 hover:text-amber-400 transition-colors"
                      aria-label={isOpen ? 'Collapse' : 'Expand'}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-6 border-t border-white/5">
                          {/* Highlights */}
                          {exp.highlights && exp.highlights.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-5 mb-5">
                              {exp.highlights.map((h, i) => (
                                <span key={i} className="highlight-badge">
                                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                                  {h}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Description bullets */}
                          <ul className="space-y-3 pt-4">
                            {exp.description.map((bullet, i) => (
                              <li
                                key={i}
                                className="flex gap-3 items-start text-slate-400 font-light leading-relaxed text-sm"
                              >
                                <span className="mt-2 w-1 h-1 rounded-full bg-amber-500/60 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
