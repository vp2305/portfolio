import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ navLinks, logo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.url.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [navLinks]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`flex items-center justify-between px-5 md:px-7 w-full max-w-5xl mx-4 transition-all duration-500 rounded-full ${
          isScrolled
            ? 'bg-[#0A0F1E]/95 border border-white/[0.07] py-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-2 border border-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-amber-400 duration-200"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {logo}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => {
            const id = link.url.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.url}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-amber-400'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-amber-500/10 border border-amber-500/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 text-sm font-semibold text-[#0A0F1E] bg-amber-400 rounded-full hover:bg-amber-300 transition-colors duration-200 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[72px] left-4 right-4 bg-[#0F172A]/95 border border-white/[0.07] rounded-2xl p-3 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 mx-1 px-4 py-3 text-sm font-semibold text-center text-[#0A0F1E] bg-amber-400 rounded-xl hover:bg-amber-300 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
