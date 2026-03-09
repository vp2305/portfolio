import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import { portfolioData } from './portfolio';
import './index.css';

function App() {
  useEffect(() => {
    // The preloader lives outside #root as a fixed overlay.
    // Fade it out after a minimum display time so it doesn't flash away.
    const MIN_MS = 800;
    const id = setTimeout(() => {
      const el = document.getElementById('preloader');
      if (el) {
        el.classList.add('fade-out');
        el.addEventListener('transitionend', () => el.remove(), { once: true });
        setTimeout(() => el.remove(), 700);
      }
    }, MIN_MS);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-[#E2E8F0] font-sans selection:bg-amber-500/25 selection:text-amber-100 overflow-hidden">
      <Cursor />

      {/* Ambient aurora background — single layer, multiple composited gradients, subtle animation */}
      <div className="ambient-bg" />

      <div className="relative z-10 flex flex-col items-center">
        <Header navLinks={portfolioData.header.navLinks} logo={portfolioData.header.logo} />

        <main className="w-full flex flex-col items-center justify-center">
          <Hero data={portfolioData.hero} />
          <About data={portfolioData.about} />
          <Skills data={portfolioData.skills} />
          <Experience data={portfolioData.experience} />
          <Projects data={portfolioData.projects} />
          <Leadership
            leadership={portfolioData.leadership}
            education={portfolioData.education}
            certifications={portfolioData.certifications}
          />
          <Contact data={portfolioData.contact} socials={portfolioData.socials} />
        </main>

        <footer className="w-full py-8 text-center text-sm border-t border-white/5 bg-[#0A0F1E]">
          <p className="tracking-widest uppercase text-xs font-semibold text-slate-600">
            {portfolioData.footer.text}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
