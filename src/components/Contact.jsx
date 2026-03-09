import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
});

const socialLinks = [
  {
    key: 'github',
    label: 'GitHub',
    icon: Github,
    hint: 'vp2305',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    hint: 'vaibhav-patel',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    icon: Instagram,
    hint: '@vaibhav.p23',
  },
];

const Contact = ({ data, socials }) => {
  return (
    <section id="contact" className="py-28 px-6 w-full max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div {...fadeUp(0)} className="mb-16">
        <span className="section-label">Get In Touch</span>
        <h2
          className="mt-3 text-white leading-none"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            fontWeight: 700,
          }}
        >
          {data.title}{' '}
          <span className="text-gradient-gold">{data.titleAccent}</span>
        </h2>
        <span className="gold-rule" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* CTA Block — 3 cols */}
        <motion.div {...fadeUp(0.08)} className="lg:col-span-3">
          <div className="glass-card rounded-2xl p-10 h-full relative overflow-hidden border border-amber-500/10">
            {/* Ambient glow */}
            <div className="absolute top-[-30%] right-[-20%] w-72 h-72 rounded-full bg-amber-500/6 blur-[100px] pointer-events-none" />

            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
              {data.description}
            </p>

            {/* Primary CTA */}
            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0A0F1E] font-semibold text-base transition-all duration-300 shadow-[0_0_32px_rgba(245,158,11,0.25)] hover:shadow-[0_0_48px_rgba(245,158,11,0.4)] cursor-pointer mb-10"
            >
              <Mail size={18} />
              {data.cta}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            {/* Email address */}
            <div className="h-px w-full bg-white/5 mb-8" />
            <a
              href={`mailto:${data.email}`}
              className="flex items-center gap-2 text-slate-500 hover:text-amber-400 text-sm font-mono transition-colors duration-200 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
              {data.email}
            </a>
          </div>
        </motion.div>

        {/* Socials panel — 2 cols */}
        <motion.div {...fadeUp(0.16)} className="lg:col-span-2">
          <div className="glass-card rounded-2xl p-8 h-full relative overflow-hidden border border-white/5">
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-slate-500/5 blur-[60px] pointer-events-none" />

            <h3
              className="text-white font-semibold text-xl mb-7"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Find Me Online
            </h3>

            <div className="flex flex-col gap-1">
              {socialLinks.map(({ key, label, icon: Icon, hint }) => (
                <a
                  key={key}
                  href={socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 px-3 rounded-xl hover:bg-white/4 transition-all duration-200 cursor-pointer border border-transparent hover:border-white/8"
                >
                  <span className="flex items-center gap-3 text-slate-400 group-hover:text-white transition-colors duration-200">
                    <span className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-amber-500/10 border border-white/8 group-hover:border-amber-500/20 flex items-center justify-center transition-all duration-200">
                      <Icon size={17} className="group-hover:text-amber-400 transition-colors duration-200" />
                    </span>
                    <span className="font-medium text-sm">{label}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-slate-600 text-xs font-mono group-hover:text-slate-500 transition-colors">{hint}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-slate-700 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
