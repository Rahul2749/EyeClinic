import { useEffect, Suspense, lazy } from "react";
import { gsap, heroEntrance, setupHeaderShrink } from "../lib/gsap";
import Services from "./Services";
import Products from "./Products";
import About from "./About";
import "./Home.css";

const AnimatedEye = lazy(() => import("../components/AnimatedEye"));

const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { force3D: true } });
      heroEntrance(tl);
      setupHeaderShrink();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main>
        <section id="home" className="hero-section relative flex flex-col overflow-hidden scroll-mt-0">
          <div className="min-h-[calc(100svh-80px)] flex flex-col justify-center w-full pt-8 pb-12">
            <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop relative z-10 hero-grid">
              <div className="flex flex-col justify-center gap-6 z-20">
                <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-c-amber/15 w-fit">
                  <span className="material-symbols-outlined text-sm text-c-amber">verified</span>
                  <span className="font-mono text-[0.75rem] tracking-[0.1em] text-c-amber uppercase">
                    Premium Optical Care
                  </span>
                </div>

                <h1 className="hero-headline text-white mt-6">
                  <div className="overflow-hidden">
                    <span className="block hero-headline-word text-[clamp(3.5rem,6vw,5.5rem)] leading-none tracking-tight">
                      Visionary Care,
                    </span>
                  </div>
                  <div className="overflow-hidden mt-2">
                    <span className="block accent hero-headline-word text-[clamp(3.5rem,6vw,5.5rem)] leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-c-accent to-c-teal">
                      Exceptional Style.
                    </span>
                  </div>
                </h1>

                <p className="hero-body font-body text-[1.125rem] text-c-surface/80 leading-[1.8] max-w-lg mt-4 font-light">
                  Experience precision diagnostics and discover curated eyewear collections in a
                  state-of-the-art boutique clinic designed for your clarity.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-8 hero-cta">
                  <button
                    onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                    className="btn-primary"
                  >
                    Book Consultation{" "}
                    <span className="material-symbols-outlined ml-1 text-[18px] align-middle">
                      chevron_right
                    </span>
                  </button>
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center px-6 py-[14px] rounded-full border border-c-teal text-white hover:bg-c-teal/10 transition-colors duration-300 font-body font-semibold text-[0.9375rem] tracking-[0.02em]"
                  >
                    Shop Collection{" "}
                    <span className="material-symbols-outlined ml-2 text-[18px] align-middle text-c-accent">
                      visibility
                    </span>
                  </a>
                </div>
              </div>

              <div className="hero-image relative h-[300px] md:h-[450px] flex items-center justify-center z-10 md:translate-x-[5%] md:-translate-y-[2%]">
                <div className="hero-glow w-full h-full absolute top-0 left-0 bg-c-teal/10 blur-[100px] rounded-full pointer-events-none scale-150" />
                <Suspense fallback={<div className="w-full h-full animate-pulse rounded-full bg-c-teal/10" />}>
                  <AnimatedEye />
                </Suspense>
              </div>
            </div>
          </div>

          <div className="relative w-full bg-c-primary/60 border-t border-c-white/10 z-20">
            <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="hero-stat-item flex items-center gap-4">
                  <span className="material-symbols-outlined text-c-accent text-[32px]">biotech</span>
                  <div>
                    <div className="font-body font-medium text-white text-[1.1rem]">
                      Advanced Diagnostics
                    </div>
                    <div className="font-mono text-c-muted text-[0.75rem] tracking-[0.05em] uppercase mt-1">
                      State-of-the-art tech
                    </div>
                  </div>
                </div>
                <div className="hero-stat-item flex items-center gap-4">
                  <span className="material-symbols-outlined text-c-accent text-[32px]">eyeglasses</span>
                  <div>
                    <div className="font-body font-medium text-white text-[1.1rem]">Premium Eyewear</div>
                    <div className="font-mono text-c-muted text-[0.75rem] tracking-[0.05em] uppercase mt-1">
                      Curated luxury brands
                    </div>
                  </div>
                </div>
                <div className="hero-stat-item flex items-center gap-4">
                  <span className="material-symbols-outlined text-c-accent text-[32px]">
                    medical_services
                  </span>
                  <div>
                    <div className="font-body font-medium text-white text-[1.1rem]">Expert Surgeons</div>
                    <div className="font-mono text-c-muted text-[0.75rem] tracking-[0.05em] uppercase mt-1">
                      15+ years experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Products />
        <About />
      </main>
    </>
  );
};

export default Home;
