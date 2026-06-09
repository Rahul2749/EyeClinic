import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedEye = () => {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const clipPathRef = useRef(null);
  const outlineRef = useRef(null);
  const glowOutlineRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  const openPath = "M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z";
  const closedPath = "M 15 100 Q 100 100 185 100 Q 100 100 15 100 Z";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      // Rotating tech rings
      gsap.to(ring1Ref.current, { rotation: 360, duration: 24, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
      gsap.to(ring2Ref.current, { rotation: -360, duration: 30, repeat: -1, ease: "none", transformOrigin: "50% 50%" });

      // Floating animation for the whole eye
      gsap.to(eyeRef.current, { y: -12, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
    });

    const lids = [clipPathRef.current, outlineRef.current, glowOutlineRef.current];

    // Organic blinking animation
    const blink = () => {
      const tl = gsap.timeline();
      tl.to(lids, { attr: { d: closedPath }, duration: 0.12, ease: "power2.in" })
        .to(lids, { attr: { d: openPath }, duration: 0.18, ease: "power2.out" });

      // Occasional double blink
      if (Math.random() > 0.6) {
        tl.to(lids, { attr: { d: closedPath }, duration: 0.12, ease: "power2.in", delay: 0.08 })
          .to(lids, { attr: { d: openPath }, duration: 0.18, ease: "power2.out" });
      }

      gsap.delayedCall(gsap.utils.random(2.5, 6), blink);
    };

    gsap.delayedCall(1, blink);

    if (prefersReducedMotion) {
      return () => {
        gsap.killTweensOf(blink);
        ctx.revert();
      };
    }

    // Mouse tracking for pupil — quickTo avoids spawning a tween per event
    const moveX = gsap.quickTo(pupilRef.current, "x", { duration: 0.6, ease: "power2.out" });
    const moveY = gsap.quickTo(pupilRef.current, "y", { duration: 0.6, ease: "power2.out" });

    let frame = 0;
    const handleMouseMove = (e) => {
      if (frame) return; // throttle to one update per animation frame
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!eyeRef.current) return;
        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        moveX(gsap.utils.clamp(-20, 20, (e.clientX - centerX) * 0.06));
        moveY(gsap.utils.clamp(-15, 15, (e.clientY - centerY) * 0.06));
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      gsap.killTweensOf(blink);
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div className="animated-eye-layer w-full h-full flex items-center justify-center relative z-20" ref={eyeRef}>
      <svg viewBox="0 0 200 200" className="w-[90%] max-w-[450px] overflow-visible">
        <defs>
          <radialGradient id="scleraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="#ffffff" />
            <stop offset="85%" stopColor="#e0f2f1" />
            <stop offset="100%" stopColor="#a3cfca" />
          </radialGradient>
          
          <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C9A7" />
            <stop offset="45%" stopColor="#0B6E73" />
            <stop offset="75%" stopColor="#0A3D4A" />
            <stop offset="100%" stopColor="#021A20" />
          </radialGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="innerShadow">
            <feOffset dx="0" dy="4"/>
            <feGaussianBlur stdDeviation="6" result="offset-blur"/>
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
            <feFlood floodColor="#0A3D4A" floodOpacity="0.6" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
          
          <clipPath id="eyeClip">
            <path ref={clipPathRef} d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" />
          </clipPath>
        </defs>

        {/* Outer glowing ambient field */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#00C9A7" strokeWidth="1" opacity="0.15" filter="url(#strongGlow)" />

        {/* Rotating background rings */}
        <g ref={ring1Ref}>
          <circle cx="100" cy="100" r="86" fill="none" stroke="#00C9A7" strokeWidth="1.5" strokeDasharray="4 14" opacity="0.6" />
          <circle cx="100" cy="100" r="86" fill="none" stroke="#00C9A7" strokeWidth="4" strokeDasharray="1 40" opacity="0.9" />
        </g>
        <g ref={ring2Ref}>
          <circle cx="100" cy="100" r="93" fill="none" stroke="#E8A045" strokeWidth="1" strokeDasharray="2 10" opacity="0.4" />
        </g>

        {/* The Eye */}
        <g filter="url(#innerShadow)">
          {/* Sclera & Iris container */}
          <g clipPath="url(#eyeClip)">
            {/* Sclera Background */}
            <rect x="0" y="0" width="200" height="200" fill="url(#scleraGrad)" />
            
            {/* Subtle Sclera Tech Lines */}
            <path d="M 15 100 Q 40 70 60 100" fill="none" stroke="#00C9A7" strokeWidth="0.5" opacity="0.25" />
            <path d="M 185 100 Q 160 130 140 100" fill="none" stroke="#00C9A7" strokeWidth="0.5" opacity="0.25" />

            {/* Iris/Pupil Tracking Group */}
            <g ref={pupilRef}>
              {/* Outer Iris Ring */}
              <circle cx="100" cy="100" r="46" fill="#021A20" />
              
              {/* Main Iris Gradient */}
              <circle cx="100" cy="100" r="44" fill="url(#irisGrad)" filter="url(#glow)" />
              
              {/* Complex Tech Texture inside Iris */}
              <circle cx="100" cy="100" r="32" fill="none" stroke="#00C9A7" strokeWidth="14" strokeDasharray="1 5" opacity="0.35" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#E8A045" strokeWidth="2" strokeDasharray="4 16" opacity="0.7" filter="url(#glow)" />
              <circle cx="100" cy="100" r="24" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.5" />
              
              {/* Pupil Base */}
              <circle cx="100" cy="100" r="15" fill="#0A3D4A" />
              <circle cx="100" cy="100" r="11" fill="#02151B" />
              
              {/* Pupil Tech Ring */}
              <circle cx="100" cy="100" r="17" fill="none" stroke="#E8A045" strokeWidth="1.5" opacity="0.9" filter="url(#glow)" />
              
              {/* Deep realistic eye glares */}
              <path d="M 62 82 A 42 42 0 0 1 138 82" fill="none" stroke="#ffffff" strokeWidth="6" opacity="0.45" strokeLinecap="round" filter="url(#glow)" />
              <path d="M 68 70 A 48 48 0 0 1 110 60" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.8" strokeLinecap="round" />
              
              {/* Sparkle highlights */}
              <circle cx="118" cy="112" r="3.5" fill="#ffffff" opacity="0.6" filter="url(#glow)" />
              <circle cx="123" cy="118" r="1.5" fill="#ffffff" opacity="0.9" />
            </g>
            
            {/* Inner eye edge shadow for depth */}
            <circle cx="100" cy="100" r="88" fill="none" stroke="#0A3D4A" strokeWidth="14" opacity="0.25" filter="url(#glow)" />
          </g>
        </g>

        {/* Eye Outlines (Thick sleek stroke defining the shape) */}
        <path ref={glowOutlineRef} d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" fill="none" stroke="#00C9A7" strokeWidth="7" opacity="0.35" filter="url(#strongGlow)" />
        <path ref={outlineRef} d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" fill="none" stroke="#00C9A7" strokeWidth="3" opacity="0.95" />
        <path d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" fill="none" stroke="#E8A045" strokeWidth="0.5" opacity="0.8" />
        
        {/* Subtle geometric corners */}
        <path d="M 8 100 L 22 93 L 22 107 Z" fill="#00C9A7" opacity="0.9" filter="url(#glow)" />
        <path d="M 192 100 L 178 93 L 178 107 Z" fill="#E8A045" opacity="0.9" filter="url(#glow)" />

      </svg>
    </div>
  );
};

export default AnimatedEye;
