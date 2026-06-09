import { useEffect, useState } from 'react';
import { ScrollTrigger } from '../lib/gsap';
import { useLenis } from '../context/smoothScroll';
import './Preloader.css';

const TEXT = 'JAISWAL EYE CARE';
const HOLD_BEFORE_EXIT = 2200;

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const lenisCtx = useLenis();

  useEffect(() => {
    // Lock scrolling while the preloader is visible. Lenis is created in the
    // parent provider effect (runs after this child), so defer the stop.
    document.body.style.overflow = 'hidden';
    const lockFrame = requestAnimationFrame(() => lenisCtx?.current?.stop());

    const exitTimer = setTimeout(() => setIsExiting(true), HOLD_BEFORE_EXIT);

    return () => {
      cancelAnimationFrame(lockFrame);
      clearTimeout(exitTimer);
      document.body.style.overflow = '';
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lenisCtx?.current?.start();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    document.body.style.overflow = '';
    lenisCtx?.current?.start();
    // Recompute ScrollTrigger positions now that the page is interactive.
    ScrollTrigger.refresh();
    setIsLoaded(true);
  };

  // Safety net: force completion even if the transition event never fires.
  useEffect(() => {
    if (!isExiting) return;
    const fallback = setTimeout(finish, 1200);
    return () => clearTimeout(fallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExiting]);

  // Called when the curtain slide-up (or reduced-motion fade) finishes.
  const handleExited = (e) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform' && e.propertyName !== 'opacity') return;
    finish();
  };

  if (isLoaded) return null;

  return (
    <div
      className={`preloader-container fixed inset-0 z-[9999] bg-c-primary flex flex-col items-center justify-center${
        isExiting ? ' is-exiting' : ''
      }`}
      onTransitionEnd={handleExited}
    >
      <div className="overflow-hidden mb-6">
        <div className="flex">
          {TEXT.split('').map((char, i) => (
            <span
              key={i}
              className="preloader-text-char font-display text-white text-3xl md:text-4xl tracking-[0.2em] font-medium"
              style={{
                marginRight: char === ' ' ? '1rem' : '0',
                animationDelay: `${i * 0.045}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
      <div className="w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <div className="preloader-line w-full h-full bg-c-accent rounded-full"></div>
      </div>
    </div>
  );
};

export default Preloader;
