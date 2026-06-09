import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { SmoothScrollContext } from "./smoothScroll";

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
