import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["home", "services", "products", "about"];

export function useScrollSpy(disabled = false) {
  const [activeSection, setActiveSection] = useState("home");
  const activeRef = useRef("home");

  useEffect(() => {
    if (disabled) return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean,
    );

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const next = visible[0].target.id;
        if (next && next !== activeRef.current) {
          activeRef.current = next;
          setActiveSection(next);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [disabled]);

  return activeSection;
}
