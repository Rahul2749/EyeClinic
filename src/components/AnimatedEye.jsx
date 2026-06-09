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

    if (prefersReducedMotion) return;

    let ctx;

    const lids = [clipPathRef.current, outlineRef.current, glowOutlineRef.current];

    const blink = () => {
      const tl = gsap.timeline();
      tl.to(lids, { attr: { d: closedPath }, duration: 0.12, ease: "power2.in" })
        .to(lids, { attr: { d: openPath }, duration: 0.18, ease: "power2.out" });

      if (Math.random() > 0.6) {
        tl.to(lids, { attr: { d: closedPath }, duration: 0.12, ease: "power2.in", delay: 0.08 })
          .to(lids, { attr: { d: openPath }, duration: 0.18, ease: "power2.out" });
      }

      gsap.delayedCall(gsap.utils.random(2.5, 6), blink);
    };

    // Defer the continuous (always-running) animations until the preloader
    // has cleared, so they don't compete for the main/GPU thread on load.
    const startContinuous = () => {
      ctx = gsap.context(() => {
        gsap.to(ring1Ref.current, { rotation: 360, duration: 24, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
        gsap.to(ring2Ref.current, { rotation: -360, duration: 30, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
        gsap.to(eyeRef.current, { y: -12, duration: 3.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
      });
      gsap.delayedCall(0.5, blink);
    };

    const startTimer = setTimeout(startContinuous, 2400);

    // quickTo avoids spawning a tween per pointer event.
    const moveX = gsap.quickTo(pupilRef.current, "x", { duration: 0.6, ease: "power2.out" });
    const moveY = gsap.quickTo(pupilRef.current, "y", { duration: 0.6, ease: "power2.out" });

    const updatePupilFromPoint = (clientX, clientY) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      moveX(gsap.utils.clamp(-20, 20, (clientX - centerX) * 0.06));
      moveY(gsap.utils.clamp(-15, 15, (clientY - centerY) * 0.06));
    };

    let frame = 0;
    const schedulePupilUpdate = (clientX, clientY) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updatePupilFromPoint(clientX, clientY);
      });
    };

    const handleMouseMove = (e) => schedulePupilUpdate(e.clientX, e.clientY);

    const isTouchPrimary = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    let idleTween = null;
    let idleResumeTimer = null;
    let idleStartTimer = null;

    const stopIdlePupil = () => {
      idleTween?.kill();
      idleTween = null;
      clearTimeout(idleResumeTimer);
    };

    const startIdlePupil = () => {
      if (!pupilRef.current) return;
      stopIdlePupil();
      idleTween = gsap.fromTo(
        pupilRef.current,
        { x: -10, y: 2 },
        { x: 10, y: -5, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", overwrite: "auto" },
      );
    };

    const scheduleIdleResume = () => {
      clearTimeout(idleResumeTimer);
      idleResumeTimer = setTimeout(() => {
        gsap.to(pupilRef.current, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          overwrite: "auto",
          onComplete: startIdlePupil,
        });
      }, 1500);
    };

    const handleTouchStart = (e) => {
      stopIdlePupil();
      const touch = e.touches[0];
      if (touch) schedulePupilUpdate(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      if (touch) schedulePupilUpdate(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    if (isTouchPrimary) {
      window.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", scheduleIdleResume, { passive: true });
      idleStartTimer = setTimeout(startIdlePupil, 2800);
    }

    return () => {
      clearTimeout(startTimer);
      clearTimeout(idleStartTimer);
      stopIdlePupil();
      gsap.killTweensOf(blink);
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", scheduleIdleResume);
      ctx?.revert();
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

          <clipPath id="eyeClip">
            <path ref={clipPathRef} d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" />
          </clipPath>
        </defs>

        {/* Outer ambient field */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#00C9A7" strokeWidth="1" opacity="0.18" />

        {/* Rotating background rings */}
        <g ref={ring1Ref}>
          <circle cx="100" cy="100" r="86" fill="none" stroke="#00C9A7" strokeWidth="1.5" strokeDasharray="4 14" opacity="0.6" />
          <circle cx="100" cy="100" r="86" fill="none" stroke="#00C9A7" strokeWidth="4" strokeDasharray="1 40" opacity="0.9" />
        </g>
        <g ref={ring2Ref}>
          <circle cx="100" cy="100" r="93" fill="none" stroke="#E8A045" strokeWidth="1" strokeDasharray="2 10" opacity="0.4" />
        </g>

        {/* The Eye */}
        <g>
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
              <circle cx="100" cy="100" r="44" fill="url(#irisGrad)" />

              {/* Complex Tech Texture inside Iris */}
              <circle cx="100" cy="100" r="32" fill="none" stroke="#00C9A7" strokeWidth="14" strokeDasharray="1 5" opacity="0.35" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="#E8A045" strokeWidth="2" strokeDasharray="4 16" opacity="0.7" />
              <circle cx="100" cy="100" r="24" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.5" />

              {/* Pupil Base */}
              <circle cx="100" cy="100" r="15" fill="#0A3D4A" />
              <circle cx="100" cy="100" r="11" fill="#02151B" />

              {/* Pupil Tech Ring */}
              <circle cx="100" cy="100" r="17" fill="none" stroke="#E8A045" strokeWidth="1.5" opacity="0.9" />

              {/* Deep realistic eye glares */}
              <path d="M 62 82 A 42 42 0 0 1 138 82" fill="none" stroke="#ffffff" strokeWidth="6" opacity="0.45" strokeLinecap="round" />
              <path d="M 68 70 A 48 48 0 0 1 110 60" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.8" strokeLinecap="round" />

              {/* Sparkle highlights */}
              <circle cx="118" cy="112" r="3.5" fill="#ffffff" opacity="0.6" />
              <circle cx="123" cy="118" r="1.5" fill="#ffffff" opacity="0.9" />
            </g>

            {/* Inner eye edge shadow for depth */}
            <circle cx="100" cy="100" r="88" fill="none" stroke="#0A3D4A" strokeWidth="14" opacity="0.25" />
          </g>
        </g>

        {/* Eye Outlines (Thick sleek stroke defining the shape) */}
        <path ref={glowOutlineRef} d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" fill="none" stroke="#00C9A7" strokeWidth="7" opacity="0.25" />
        <path ref={outlineRef} d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" fill="none" stroke="#00C9A7" strokeWidth="3" opacity="0.95" />
        <path d="M 15 100 Q 100 25 185 100 Q 100 175 15 100 Z" fill="none" stroke="#E8A045" strokeWidth="0.5" opacity="0.8" />

        {/* Subtle geometric corners */}
        <path d="M 8 100 L 22 93 L 22 107 Z" fill="#00C9A7" opacity="0.9" />
        <path d="M 192 100 L 178 93 L 178 107 Z" fill="#E8A045" opacity="0.9" />

      </svg>
    </div>
  );
};

export default AnimatedEye;
