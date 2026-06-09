import { createContext, useContext } from "react";

export const SmoothScrollContext = createContext(null);

export function useLenis() {
  return useContext(SmoothScrollContext);
}

export function scrollToElement(lenisRef, target, options = {}) {
  const { offset = -80, duration = 1.35, onComplete } = options;

  if (!target) return;

  if (lenisRef?.current) {
    lenisRef.current.scrollTo(target, { offset, duration, onComplete });
    return;
  }

  target.scrollIntoView({ behavior: "smooth" });
  onComplete?.();
}
