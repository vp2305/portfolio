import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const CATEGORIES = [
  { key: 'languages',  label: 'Languages',         color: '#F59E0B' },
  { key: 'frameworks', label: 'Frameworks & Libs',  color: '#3B82F6' },
  { key: 'databases',  label: 'Databases',          color: '#A855F7' },
  { key: 'devops',     label: 'Cloud & DevOps',     color: '#10B981' },
];

const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-28 px-6 w-full max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <span className="section-label">Technical Stack</span>
        <h2
          className="mt-3 text-white leading-none"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
          }}
        >
          Skills
          <span className="text-gradient-gold">.</span>
        </h2>
        <span className="gold-rule" />
      </motion.div>

      {/* Category Tabs */}
      <motion.div {...fadeUp(0.08)} className="flex flex-wrap gap-2.5 mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeCategory === null
              ? 'bg-amber-400 text-[#0A0F1E]'
              : 'glass-card text-slate-400 hover:text-white'
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeCategory === cat.key
                ? 'text-[#0A0F1E] font-semibold'
                : 'glass-card text-slate-400 hover:text-white'
            }`}
            style={
              activeCategory === cat.key
                ? { backgroundColor: cat.color }
                : {}
            }
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid — category sections */}
      <div className="space-y-10">
        {CATEGORIES.filter((cat) => !activeCategory || activeCategory === cat.key).map(
          (cat, catIdx) => (
            <motion.div
              key={cat.key}
              {...fadeUp(0.05 + catIdx * 0.06)}
              className="glass-card rounded-2xl p-7"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-white font-semibold text-base">{cat.label}</h3>
                <span className="text-slate-600 text-xs ml-1">
                  {data[cat.key].length} technologies
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2.5">
                {data[cat.key].map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="skill-pill cursor-default"
                    style={{
                      '--pill-accent': cat.color,
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Footer note */}
      <motion.p
        {...fadeUp(0.3)}
        className="text-slate-600 text-sm mt-8 text-center"
      >
        Always learning, currently exploring AI/ML integrations and distributed systems.
      </motion.p>
    </section>
  );
};

export default Skills;
