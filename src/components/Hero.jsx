import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroCanvas = React.lazy(() => import('./HeroCanvas'));

// ── Role Cycler ──────────────────────────────────────────
const RoleCycler = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      style={{
        display: 'inline-block',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        color: '#F59E0B',
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
      }}
    >
      {roles[index]}
    </span>
  );
};

// ── Hero Section ─────────────────────────────────────────
const Hero = ({ data }) => {
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    // Defer 3D canvas until after main content paints
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setCanvasReady(true), { timeout: 2500 });
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setCanvasReady(true), 500);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center pt-24 pb-12 px-6 max-w-7xl mx-auto z-10 gap-8 md:gap-0"
    >
      {/* Left — Text */}
      <div className="w-full md:w-1/2 z-20 flex flex-col items-start">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/8 border border-amber-500/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-amber-400/90 uppercase">
            {data.status}
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 text-lg font-light mb-2 tracking-wide"
        >
          {data.greeting}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient-subtle leading-none mb-4"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          {data.name}
        </motion.h1>

        {/* Role Cycler */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7"
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.9rem)',
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          <RoleCycler roles={data.roles} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 font-light leading-relaxed max-w-lg mb-10 text-base md:text-lg"
        >
          {data.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-amber-400 text-[#0A0F1E] font-semibold rounded-full hover:bg-amber-300 transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] text-sm cursor-pointer"
          >
            {data.cta1}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent text-slate-300 font-semibold rounded-full border border-white/10 hover:border-amber-500/30 hover:text-white hover:bg-amber-500/5 transition-all duration-200 text-sm cursor-pointer"
          >
            {data.cta2}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hidden md:flex items-center gap-3 mt-16 text-slate-600"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-600" />
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        </motion.div>
      </div>

      {/* Right — 3D Canvas (lazy) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full md:w-1/2 h-[55vw] max-h-[560px] min-h-[320px] relative"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(245,158,11,0.10) 0%, transparent 70%)',
          }}
        />
        {canvasReady && (
          <Suspense fallback={null}>
            <HeroCanvas />
          </Suspense>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;
