import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, MapPin, Calendar } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const Leadership = ({ leadership, education, certifications }) => {
  const role = leadership.roles[0];

  return (
    <section id="leadership" className="py-28 px-6 w-full max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <span className="section-label">Beyond the Code</span>
        <h2
          className="mt-3 text-white leading-none"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
          }}
        >
          Leadership &amp; Education
          <span className="text-gradient-gold">.</span>
        </h2>
        <span className="gold-rule" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* OGSA Role — spans 3 cols on large */}
        <motion.div {...fadeUp(0.08)} className="lg:col-span-3">
          <div className="glass-card rounded-2xl p-8 h-full border border-amber-500/10 relative overflow-hidden">
            {/* Subtle ambient */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-500/4 blur-[80px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Users size={22} className="text-amber-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-amber-400/80 px-2.5 py-0.5 rounded-full bg-amber-500/8 border border-amber-500/15">
                    {role.duration}
                  </span>

                </div>
                <h3 className="text-white font-semibold text-xl leading-snug">{role.title}</h3>
                <p className="text-amber-400/80 text-sm mt-0.5">{role.organization}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {role.highlights.map((h, i) => (
                <span key={i} className="highlight-badge">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  {h}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/5 mb-6" />

            {/* Bullets */}
            <ul className="space-y-3">
              {role.description.map((bullet, i) => (
                <li key={i} className="flex gap-3 items-start text-slate-400 font-light leading-relaxed text-sm">
                  <span className="mt-2 w-1 h-1 rounded-full bg-amber-500/60 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Location */}
            <div className="flex items-center gap-1.5 mt-6">
              <MapPin size={11} className="text-slate-600 flex-shrink-0" />
              <span className="text-slate-600 text-xs">{role.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right column: Education + Certifications */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Education card */}
          <motion.div {...fadeUp(0.14)}>
            <div className="glass-card rounded-2xl p-7 relative overflow-hidden border border-white/5">
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-600/5 blur-[60px] pointer-events-none" />

              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-blue-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Education</span>
                  <h3 className="text-white font-semibold text-base leading-snug mt-0.5">{education.school}</h3>
                </div>
              </div>

              <div className="h-px w-full bg-white/5 mb-5" />

              <p className="text-slate-300 text-sm font-medium leading-snug mb-3">{education.degree}</p>

              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Calendar size={10} />
                  {education.duration}
                </span>
                <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <MapPin size={10} />
                  {education.location}
                </span>
              </div>

              {education.achievement && (
                <div className="mt-4">
                  <span className="highlight-badge">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    {education.achievement}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Certifications */}
          {certifications && certifications.length > 0 && (
            <motion.div {...fadeUp(0.20)}>
              <div className="glass-card rounded-2xl p-7 relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-emerald-500/5 blur-[60px] pointer-events-none" />

                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Certifications</span>
                  </div>
                </div>

                <div className="h-px w-full bg-white/5 mb-5" />

                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <p className="text-slate-200 text-sm font-medium leading-snug">{cert.name}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-xs">{cert.issuer}</span>
                        <span className="text-slate-700 text-xs">·</span>
                        <span className="text-amber-400/70 text-xs font-mono">{cert.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
