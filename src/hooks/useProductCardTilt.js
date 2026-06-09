import { useEffect } from "react";
import { gsap } from "../lib/gsap";

export function useProductCardTilt(containerSelector = "#product-grid", deps = []) {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = document.querySelector(containerSelector);
    if (!container) return;

    const cleanups = [];

    const cards = container.querySelectorAll(".product-card");
    cards.forEach((card) => {
      const img = card.querySelector(".product-image");
      const rotateX = gsap.quickTo(card, "rotateX", {
        duration: 0.35,
        ease: "power2.out",
      });
      const rotateY = gsap.quickTo(card, "rotateY", {
        duration: 0.35,
        ease: "power2.out",
      });
      const scaleImg = img
        ? gsap.quickTo(img, "scale", { duration: 0.45, ease: "power2.out" })
        : null;

      gsap.set(card, { transformPerspective: 900, transformStyle: "preserve-3d" });

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
        rotateX(-y);
        rotateY(x);
        scaleImg?.(1.06);
      };

      const onLeave = () => {
        rotateX(0);
        rotateY(0);
        scaleImg?.(1);
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
