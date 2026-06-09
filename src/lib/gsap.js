import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ limitCallbacks: true });

export const REVEAL_EASE = "power2.out";
export const REVEAL_DURATION = 0.85;

const defaultScrollTrigger = {
  start: "top 82%",
  toggleActions: "play none none none",
};

export function revealFromBottom(targets, options = {}) {
  const { trigger, start, stagger = 0.1, duration, ease, scrollTrigger, ...rest } =
    options;

  return gsap.fromTo(
    targets,
    { y: 48, opacity: 0, force3D: true },
    {
      y: 0,
      opacity: 1,
      duration: duration ?? REVEAL_DURATION,
      stagger,
      ease: ease ?? REVEAL_EASE,
      scrollTrigger: {
        ...defaultScrollTrigger,
        trigger: trigger ?? targets,
        ...(start ? { start } : {}),
        ...scrollTrigger,
      },
      clearProps: "transform,opacity",
      ...rest,
    },
  );
}

export function revealHeading(selector, options = {}) {
  return gsap.fromTo(
    selector,
    { clipPath: "inset(100% 0 0 0)", y: 24, force3D: true },
    {
      clipPath: "inset(0% 0 0 0)",
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: selector,
        start: "top 85%",
        toggleActions: "play none none none",
        ...options.scrollTrigger,
      },
      clearProps: "all",
      ...options,
    },
  );
}

export function heroEntrance(timeline) {
  timeline
    .from("nav, header", { y: -72, opacity: 0, duration: 0.8, ease: "power3.out" })
    .from(
      ".hero-badge",
      { y: 20, opacity: 0, duration: 0.55, ease: "power2.out" },
      "-=0.45",
    )
    .from(
      ".hero-headline-word",
      { y: 56, opacity: 0, duration: 0.85, stagger: 0.07, ease: "power3.out" },
      "-=0.35",
    )
    .from(
      [".hero-body", ".hero-cta"],
      { y: 28, opacity: 0, duration: 0.65, stagger: 0.12, ease: "power2.out" },
      "-=0.5",
    )
    .from(
      ".hero-image",
      { x: 64, opacity: 0, scale: 0.96, duration: 1, ease: "power3.out" },
      "-=0.75",
    )
    .from(
      ".hero-stat-item",
      { y: 18, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.55",
    );
}

export function setupHeaderShrink(headerSelector = "#main-header") {
  const header = document.querySelector(headerSelector);
  if (!header) return;

  ScrollTrigger.create({
    start: "top -72",
    onEnter: () => header.classList.add("header-scrolled"),
    onLeaveBack: () => header.classList.remove("header-scrolled"),
  });
}

export { gsap, ScrollTrigger };
