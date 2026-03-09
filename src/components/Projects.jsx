import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowUpRight, Lock } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const PROJECT_GRADIENTS = [
  'radial-gradient(ellipse at 30% 40%, rgba(245,158,11,0.25) 0%, rgba(251,191,36,0.08) 40%, transparent 70%), linear-gradient(135deg, #0F172A 0%, #1C1408 100%)',
  'radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.22) 0%, rgba(96,165,250,0.06) 45%, transparent 70%), linear-gradient(135deg, #0A0F1E 0%, #071425 100%)',
  'radial-gradient(ellipse at 40% 60%, rgba(168,85,247,0.22) 0%, rgba(139,92,246,0.06) 45%, transparent 70%), linear-gradient(135deg, #0A0F1E 0%, #130B1F 100%)',
  'radial-gradient(ellipse at 60% 40%, rgba(16,185,129,0.20) 0%, rgba(52,211,153,0.05) 45%, transparent 70%), linear-gradient(135deg, #0A0F1E 0%, #071410 100%)',
  'radial-gradient(ellipse at 35% 55%, rgba(244,63,94,0.20) 0%, rgba(251,113,133,0.05) 45%, transparent 70%), linear-gradient(135deg, #0A0F1E 0%, #180A0E 100%)',
];

const Projects = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const scrollY = useRef(0);

  const gradientMap = React.useMemo(
    () => Object.fromEntries(data.map((p, i) => [p.id, PROJECT_GRADIENTS[i] || PROJECT_GRADIENTS[0]])),
    [data]
  );

  const open = useCallback((project) => {
    // Save scroll position, then lock scroll BEFORE React render
    scrollY.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    // Signal other components
    window.dispatchEvent(new CustomEvent('modal', { detail: { open: true } }));
    setSelected(project);
  }, []);

  const close = useCallback(() => {
    setSelected(null);
    // Restore scroll AFTER the state change, not during animation
    requestAnimationFrame(() => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo({ top: scrollY.current, behavior: 'instant' });
      window.dispatchEvent(new CustomEvent('modal', { detail: { open: false } }));
    });
  }, []);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && selected) close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, close]);

  return (
    <section id="projects" className="py-28 px-6 w-full max-w-7xl mx-auto relative">

      {/* Heading */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <span className="section-label">Selected Work</span>
        <h2
          className="mt-3 text-white leading-none"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
          }}
        >
          Projects
          <span className="text-gradient-gold">.</span>
        </h2>
        <span className="gold-rule" />
      </motion.div>

      {/* Featured project */}
      {data.filter(p => p.featured).map((project) => (
        <motion.div
          key={project.id}
          {...fadeUp(0.08)}
          onClick={() => open(project)}
          className="group cursor-pointer glass-card rounded-2xl overflow-hidden mb-8 relative project-card-hover"
          style={{ background: PROJECT_GRADIENTS[0] }}
        >
          <div className="flex flex-col md:flex-row items-stretch min-h-[220px]">
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-400 tracking-wide">
                    Featured
                  </span>
                  <span className="text-slate-500 text-xs">{project.subtitle}</span>
                </div>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
                    fontWeight: 700,
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base max-w-xl">
                  {project.summary || project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((t, i) => (
                  <span key={i} className="skill-pill text-xs">{t}</span>
                ))}
              </div>
            </div>


          </div>

          <div className="absolute bottom-4 right-4 md:hidden flex items-center gap-1.5 text-slate-600 text-xs">
            <Lock size={11} />
            Private
          </div>
        </motion.div>
      ))}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.filter(p => !p.featured).map((project, index) => (
          <motion.div
            key={project.id}
            {...fadeUp(0.06 + index * 0.07)}
            onClick={() => open(project)}
            className="group cursor-pointer glass-card rounded-2xl overflow-hidden relative project-card-hover flex flex-col"
            style={{
              background: PROJECT_GRADIENTS[index + 1] || PROJECT_GRADIENTS[0],
              minHeight: '220px',
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, ${project.accentColor}30 0%, transparent 70%)`,
              }}
            />

            <div className="p-7 flex flex-col flex-1 justify-between relative z-10">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-slate-500 text-xs font-medium">{project.subtitle}</span>
                  <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight size={15} className="text-amber-400" />
                  </div>
                </div>

                <h3
                  className="text-white mb-3 group-hover:text-amber-100 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 700 }}
                >
                  {project.title}
                </h3>

                <p className="text-slate-500 font-light leading-relaxed text-sm line-clamp-3">
                  {project.summary || project.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((t, i) => (
                  <span key={i} className="skill-pill text-xs">{t}</span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="skill-pill text-xs text-slate-600">+{project.techStack.length - 4}</span>
                )}
              </div>
            </div>

            <div
              className="h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: `linear-gradient(to right, ${project.accentColor}60, transparent)` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="absolute inset-0 bg-black/80 cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl rounded-2xl z-10 flex flex-col max-h-[88vh]"
              style={{
                background: gradientMap[selected.id],
                border: `1px solid ${selected.accentColor}25`,
                boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <button
                onClick={close}
                className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={17} />
              </button>

              <div className="p-8 md:p-10 overflow-y-auto rounded-2xl flex-1">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mb-3"
                  style={{ color: selected.accentColor }}
                >
                  {selected.subtitle}
                </p>

                <h3
                  className="text-white mb-5 leading-none"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                    fontWeight: 800,
                  }}
                >
                  {selected.title}
                </h3>

                <p className="text-slate-300 font-light leading-relaxed mb-7 text-base">
                  {selected.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs text-slate-600 uppercase tracking-widest mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.techStack.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-full text-xs font-medium border"
                        style={{
                          borderColor: `${selected.accentColor}30`,
                          color: selected.accentColor,
                          background: `${selected.accentColor}0D`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                  {selected.github ? (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-slate-300 hover:text-white text-sm font-medium transition-colors border border-white/8 hover:border-white/15 cursor-pointer"
                    >
                      <Github size={16} />
                      View Source
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-slate-600 text-sm font-medium border border-white/5 cursor-default">
                      <Lock size={14} />
                      Private Repository
                    </span>
                  )}
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer"
                      style={{ background: selected.accentColor, color: '#0A0F1E' }}
                    >
                      <ExternalLink size={15} />
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
