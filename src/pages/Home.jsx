import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./Services";
import Products from "./Products";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <>
      <main>
        <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 flex justify-end">
            <div className="w-full md:w-2/3 h-full relative">
              <img
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-multiply md:opacity-90 md:mix-blend-normal"
                src="/images/hero_bg.png"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            </div>
          </div>
          <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 pt-10 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#83C5BE]/20 border border-[#83C5BE] text-[#006D77] w-fit gsap-subhead">
                <span className="material-symbols-outlined text-sm">
                  verified
                </span>
                <span className="font-label-md text-xs uppercase tracking-widest">
                  Premium Optical Care
                </span>
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background">
                <div className="overflow-hidden">
                  <span className="block gsap-headline-line">
                    Visionary Care,
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[#006D77] italic font-light gsap-headline-line">
                    Exceptional Style.
                  </span>
                </div>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg gsap-subhead">
                Experience precision diagnostics and discover curated eyewear
                collections in a state-of-the-art boutique clinic designed for
                your clarity.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 gsap-cta">
                <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-on-primary font-label-md hover:scale-105 transition-transform duration-300 shadow-md soft-glow">Book Consultation <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span></button>
                <a href="#products" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-primary/20 text-primary bg-surface/50 hover:bg-surface transition-colors duration-300 font-label-md">Shop the Collection</a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-outline-variant/30 pt-8">
                <div className="flex flex-col gap-2 gsap-trust">
                  <span className="material-symbols-outlined text-[#006D77] text-2xl">
                    biotech
                  </span>
                  <span className="font-label-md text-on-surface">
                    Advanced Diagnostics
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    State-of-the-art tech.
                  </span>
                </div>
                <div className="flex flex-col gap-2 gsap-trust">
                  <span className="material-symbols-outlined text-[#006D77] text-2xl">
                    eyeglasses
                  </span>
                  <span className="font-label-md text-on-surface">
                    Premium Eyewear
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    Curated luxury brands.
                  </span>
                </div>
                <div className="flex flex-col gap-2 gsap-trust">
                  <span className="material-symbols-outlined text-[#006D77] text-2xl">
                    medical_services
                  </span>
                  <span className="font-label-md text-on-surface">
                    Expert Surgeons
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    Decades of experience.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 h-[500px] lg:h-[700px] relative mt-12 lg:mt-0 glass-layer rounded-2xl overflow-hidden soft-glow gsap-reveal">
              <div className="absolute top-4 left-4 z-20 bg-white/80 px-4 py-2 rounded-full shadow-sm text-xs font-label-md text-[#006D77] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#83C5BE] animate-pulse"></span>
                Interactive View
              </div>

              <div
                className="w-full h-full cursor-grab active:cursor-grabbing"
                id="three-container"
              >
                <img src="/images/hero_interactive.png" alt="Interactive 3D Eye Model" className="w-full h-full object-cover" />
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
