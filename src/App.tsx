import { useState, useEffect, Suspense, lazy } from 'react';
import useLenis from './hooks/useLenis';
import CustomCursor from './components/UI/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Preloader from './components/Preloader/Preloader';
import Hero from './components/Hero/Hero';

// Lazy-load sections for performance
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Certifications = lazy(() => import('./components/Certifications/Certifications'));
const Contact = lazy(() => import('./components/Contact/Contact'));

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const lenis = useLenis();

  // Lock scrolling while preloader is active
  useEffect(() => {
    if (!lenis) return;
    if (!preloaderComplete) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [lenis, preloaderComplete]);

  return (
    <>
      {/* Cinematic Custom Cursor */}
      <CustomCursor />

      {/* Cinematic Preloader */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* Navbar - hidden during preloader, slides down after */}
      <Navbar visible={preloaderComplete} />

      <main className="noise-overlay min-h-screen bg-[#050505] text-[#f0f0f0] overflow-x-hidden selection:bg-[#00f5ff22] selection:text-white">
        {/* Hero Section */}
        <Hero />

        {/* Other sections with Suspense loading fallbacks */}
        <Suspense fallback={
          <div className="w-full h-screen bg-[#050505] flex items-center justify-center font-mono text-[var(--accent)]">
            LOADING EXPERIENCE...
          </div>
        }>
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default App;
