import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, ExternalLink } from 'lucide-react';

// ── Gold Duotone Photo ────────────────────────────────────
// Uses CSS filter stack: grayscale → sepia → hue-rotate → saturate + a gold overlay div
// This approach works universally across all browsers.
const PhotoCard = ({ name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl aspect-[4/5] max-w-sm mx-auto lg:mx-0 w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Base image: greyscale with a warm sepia base */}
      <img
        src="/Images/vaibhav-new.png"
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
          // grayscale → sepia (gives warm yellow base) → slight hue rotate for gold
          filter: hovered
            ? 'grayscale(100%) sepia(60%) hue-rotate(5deg) saturate(140%) brightness(0.92) contrast(1.1)'
            : 'grayscale(100%) sepia(80%) hue-rotate(10deg) saturate(160%) brightness(0.85) contrast(1.15)',
          transform: hovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'filter 0.65s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* Gold colour-wash overlay — mix-blend-mode: color tints the greys gold */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'rgba(245, 158, 11, 0.18)'
            : 'rgba(245, 158, 11, 0.28)',
          mixBlendMode: 'color',
          pointerEvents: 'none',
          transition: 'background 0.65s ease',
        }}
      />

      {/* Dark navy shadows in the deep tones */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 15, 30, 0.22)',
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,15,30,0.75) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      {/* Gold corner brackets */}
      <div className="absolute top-4 left-4 w-8 h-px bg-amber-400/80" />
      <div className="absolute top-4 left-4 w-px h-8 bg-amber-400/80" />
      <div className="absolute bottom-4 right-4 w-8 h-px bg-amber-400/80" />
      <div className="absolute bottom-4 right-4 w-px h-8 bg-amber-400/80" />

      {/* Name label — fades in on hover */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.25rem',
          left: '1.25rem',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#FCD34D',
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const About = ({ data }) => {
  return (
    <section id="about" className="py-28 px-6 w-full max-w-7xl mx-auto">

      {/* Section label + heading */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <span className="section-label">Who I am</span>
        <h2
          className="mt-3 text-white leading-none"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
          }}
        >
          About Me
          <span className="text-gradient-gold">.</span>
        </h2>
        <span className="gold-rule" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* Left — Photo + Location */}
        <motion.div {...fadeUp(0.1)} className="flex flex-col gap-6">
          {/* Photo */}
          <PhotoCard name={data.name} />

          {/* Location card */}
          <div className="glass-card rounded-xl px-5 py-4 flex items-center gap-3 max-w-sm mx-auto lg:mx-0 w-full">
            <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
              <MapPin size={15} className="text-amber-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium">{data.location}</p>
              <p className="text-slate-500 text-xs mt-0.5">{data.availability}</p>
            </div>
            <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Available
            </span>
          </div>
        </motion.div>

        {/* Right — Bio + Stats + CTA */}
        <motion.div {...fadeUp(0.18)} className="flex flex-col gap-8">

          {/* Bio text */}
          <div className="space-y-5">
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              {data.bio}
            </p>
            <p className="text-slate-400 text-base font-light leading-relaxed">
              {data.bio2}
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {data.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                className="glass-card rounded-xl p-4 flex flex-col items-center text-center"
              >
                <span
                  className="text-gradient-gold font-bold leading-none mb-1"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs font-medium leading-snug mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CV Button */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={data.cvLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                if (window.cronitor) window.cronitor('track', 'ViewedCV');
              }}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-amber-500/30 text-amber-400 hover:bg-amber-500/8 hover:border-amber-500/50 transition-all duration-200 w-max text-sm font-semibold cursor-pointer"
            >
              <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              View Resume
            </a>
            <a
              href={data.cvLink}
              download="VaibhavPatel-Resume.pdf"
              onClick={() => {
                if (window.cronitor) window.cronitor('track', 'DownloadedCV');
              }}
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 text-slate-400 hover:border-amber-500/20 hover:text-amber-400 transition-all duration-200 w-max text-sm font-semibold cursor-pointer"
            >
              <Download size={15} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
              Download
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
