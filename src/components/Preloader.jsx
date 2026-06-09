import { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';
import { useLenis } from '../context/smoothScroll';
import './Preloader.css';

const TEXT = 'JAISWAL EYE CARE';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const charsRef = useRef([]);
  const lineRef = useRef(null);
  const lenisRef = useLenis();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    // Lock scrolling while the preloader is visible.
    // Lenis is initialised in the parent provider's effect, which runs after
    // this child effect, so defer the stop to the next frame.
    document.body.style.overflow = 'hidden';
    const lockFrame = requestAnimationFrame(() => lenisRef?.current?.stop());

    const release = () => {
      document.body.style.overflow = '';
      lenisRef?.current?.start();
      setIsLoaded(true);
    };

    const ctx = gsap.context(() => {
      const chars = charsRef.current.filter(Boolean);

      if (prefersReducedMotion) {
        const tl = gsap.timeline({ onComplete: release });
        tl.set([chars, lineRef.current], { opacity: 1 })
          .to({}, { duration: 0.8 })
          .to(containerRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' });
        return;
      }

      const tl = gsap.timeline({ onComplete: release });

      // Entrance: characters rise in
      tl.fromTo(
        chars,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.045,
        },
      )
        // Progress line fills
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'power2.inOut' },
          '-=0.5',
        )
        // Brief hold
        .to({}, { duration: 0.35 })
        // Exit: characters lift away
        .to(chars, {
          yPercent: -120,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.in',
          stagger: 0.025,
        })
        // Curtain slides up and reveals the page
        .to(
          containerRef.current,
          { yPercent: -100, duration: 0.9, ease: 'power4.inOut' },
          '-=0.25',
        );
    }, containerRef);

    return () => {
      cancelAnimationFrame(lockFrame);
      ctx.revert();
      document.body.style.overflow = '';
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lenisRef?.current?.start();
    };
  }, [lenisRef]);

  if (isLoaded) return null;

  return (
    <div
      ref={containerRef}
      className="preloader-container fixed inset-0 z-[9999] bg-c-primary flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden mb-6">
        <div className="flex">
          {TEXT.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => (charsRef.current[i] = el)}
              className="preloader-text-char font-display text-white text-3xl md:text-4xl tracking-[0.2em] font-medium"
              style={{ marginRight: char === ' ' ? '1rem' : '0' }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <div ref={lineRef} className="preloader-line w-full h-full bg-c-accent rounded-full"></div>
      </div>
    </div>
  );
};

export default Preloader;
