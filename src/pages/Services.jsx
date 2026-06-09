import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Section Heading Clip Reveal
      gsap.utils.toArray('.section-heading').forEach(heading => {
        gsap.from(heading, {
          scrollTrigger: { trigger: heading, start: 'top 85%' },
          clipPath: 'inset(100% 0 0 0)',
          y: 30,
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // Service Cards Stagger
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: { amount: 0.6, from: 'start' },
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="section-container">
        <section className="services-section px-margin-mobile md:px-margin-desktop py-space-3xl bg-c-surface scroll-mt-24" id="services">
          <div className="max-w-container-max mx-auto">
            
            <div className="text-center mb-space-2xl services-header">
              <h2 className="section-heading font-display text-[clamp(2.5rem,4vw,3.5rem)] font-semibold text-c-text mb-4 tracking-[-0.02em]">
                Diagnostic Board
              </h2>
              <p className="font-body text-[1.0625rem] text-c-muted max-w-2xl mx-auto leading-[1.7]">
                We offer a full spectrum of advanced eye care services, ensuring accurate diagnoses and effective, personalized treatment plans.
              </p>
            </div>

            {/* Diagnostic Board Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(280px,auto)]">
              
              {/* Row 1: Wide Card 60% (col-span-7) */}
              <div className="md:col-span-7 bg-white rounded-xl p-10 flex flex-col justify-between group relative overflow-hidden service-card border border-c-border hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-[0_10px_40px_rgba(11,110,115,0.08)]">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-c-accent text-[28px]">biotech</span>
                    <span className="font-mono text-[0.75rem] tracking-[0.12em] text-c-muted uppercase border-l-2 border-c-accent pl-3">Comprehensive</span>
                  </div>
                  <h3 className="font-display text-[2rem] font-semibold text-c-text mb-4">
                    In-Depth Eye Exams
                  </h3>
                  <p className="font-body text-[1.0625rem] text-c-muted max-w-lg mb-8 leading-[1.7]">
                    Beyond a simple vision test, our in-depth exams utilize advanced imaging to assess the overall health of your eyes, detecting early signs of glaucoma and macular degeneration.
                  </p>
                </div>
                <div className="relative z-10">
                  <a className="inline-flex items-center text-c-teal font-body font-medium text-[0.9375rem] group-hover:gap-2 transition-all duration-300" href="#">
                    Learn More <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Row 1: Tall Card 40% (col-span-5) */}
              <div className="md:col-span-5 bg-c-teal text-white rounded-xl p-10 flex flex-col justify-between group relative overflow-hidden service-card shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-c-primary to-c-teal opacity-50 z-0"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-c-accent text-[28px]">lens_blur</span>
                    <span className="font-mono text-[0.75rem] tracking-[0.12em] text-c-accent uppercase border-l-2 border-c-accent pl-3">Surgical</span>
                  </div>
                  <h3 className="font-display text-[2rem] font-semibold mb-4">
                    Advanced Cataract Surgery
                  </h3>
                  <p className="font-body text-[1.0625rem] text-white/80 leading-[1.7]">
                    Restoring clarity with precision laser-assisted techniques and premium intraocular lenses for optimal visual outcomes.
                  </p>
                </div>
                <div className="mt-8 relative z-10">
                  <a className="inline-flex items-center text-c-accent font-body font-medium text-[0.9375rem] group-hover:gap-2 transition-all duration-300" href="#">
                    View Procedures <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Row 2: Narrow Card 35% (col-span-4) */}
              <div className="md:col-span-4 bg-white rounded-xl p-10 flex flex-col justify-between group relative overflow-hidden service-card border border-c-border hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-[0_10px_40px_rgba(11,110,115,0.08)]">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-c-accent text-[28px]">child_care</span>
                    <span className="font-mono text-[0.75rem] tracking-[0.12em] text-c-muted uppercase border-l-2 border-c-accent pl-3">Pediatric</span>
                  </div>
                  <h3 className="font-display text-[1.75rem] font-semibold text-c-text mb-4">
                    Pediatric Care
                  </h3>
                  <p className="font-body text-[1.0625rem] text-c-muted leading-[1.7]">
                    Gentle, specialized care ensuring proper visual development and addressing childhood conditions early.
                  </p>
                </div>
                <div className="mt-8 relative z-10">
                  <a className="inline-flex items-center text-c-teal font-body font-medium text-[0.9375rem] group-hover:gap-2 transition-all duration-300" href="#">
                    For Children <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Row 2: Wide Featured Card 65% (col-span-8) */}
              <div className="md:col-span-8 bg-c-primary text-white rounded-xl p-10 flex flex-col md:flex-row gap-8 items-center group relative overflow-hidden service-card shadow-[0_15px_40px_rgba(10,61,74,0.3)] hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-c-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0"></div>
                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-c-accent text-[28px]">center_focus_strong</span>
                    <span className="font-mono text-[0.75rem] tracking-[0.12em] text-c-accent uppercase border-l-2 border-c-accent pl-3">Correction</span>
                  </div>
                  <h3 className="font-display text-[2.5rem] font-semibold mb-4 leading-tight">
                    Laser Vision Correction
                  </h3>
                  <p className="font-body text-[1.0625rem] text-c-white/80 mb-8 leading-[1.7] max-w-[90%]">
                    Experience life without boundaries. State-of-the-art LASIK and PRK procedures tailored to your unique corneal topography for the highest level of precision.
                  </p>
                  <a className="inline-flex items-center text-c-accent font-body font-medium text-[0.9375rem] group-hover:gap-2 transition-all duration-300" href="#">
                    Determine Eligibility <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </a>
                </div>
                <div className="w-full md:w-[250px] aspect-square rounded-lg overflow-hidden relative z-10 hidden md:block">
                  <img
                    alt="Laser Technology"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src="/images/laser_machine.png"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Doctor Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-space-3xl bg-white border-t border-c-border">
          <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-space-xl items-center doctor-section">
            <div className="w-full lg:w-1/2 doctor-img-wrapper">
              <div className="relative w-full max-w-[500px] mx-auto aspect-[4/5] rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(10,61,74,0.15)]">
                <img
                  alt="Dr. Jaiswal"
                  className="w-full h-full object-cover"
                  src="/images/doctor_portrait.png"
                />

                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-xl p-6 border border-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display text-[1.5rem] font-semibold text-c-text">
                      Dr. Siddharth Jaiswal
                    </h4>
                    <div className="bg-c-amber/15 text-c-amber p-1.5 rounded-full flex items-center justify-center" title="Verified Board Certified">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                  </div>
                  <p className="font-body text-[0.9375rem] text-c-teal">
                    Chief Ophthalmologist &amp; Surgeon
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 doctor-text-wrapper">
              <h2 className="section-heading font-display text-[clamp(2.5rem,4vw,3.5rem)] font-semibold text-c-text mb-6 tracking-[-0.02em]">
                Expertise You Can Trust
              </h2>
              <p className="font-body text-[1.125rem] text-c-muted mb-8 leading-[1.8]">
                With over 15 years of dedicated practice in advanced ophthalmology, Dr. Jaiswal brings a meticulous, patient-first approach to every consultation. Our clinic is built on the foundation of the "Good Doctor" philosophy—where cutting-edge science meets deep empathy.
              </p>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4">
                  <div className="bg-c-surface w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-c-border">
                    <span className="material-symbols-outlined text-c-teal text-[20px]">workspace_premium</span>
                  </div>
                  <div>
                    <h5 className="font-body font-semibold text-[1.0625rem] text-c-text">
                      Board Certified Specialist
                    </h5>
                    <p className="font-body text-c-muted text-[0.9375rem] mt-1 leading-[1.6]">
                      Recognized excellence in refractive and cataract surgery.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-c-surface w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-c-border">
                    <span className="material-symbols-outlined text-c-teal text-[20px]">science</span>
                  </div>
                  <div>
                    <h5 className="font-body font-semibold text-[1.0625rem] text-c-text">
                      Continuous Innovation
                    </h5>
                    <p className="font-body text-c-muted text-[0.9375rem] mt-1 leading-[1.6]">
                      Regularly updating protocols with the latest global advancements in eye care.
                    </p>
                  </div>
                </li>
              </ul>
              
              <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="btn-primary">
                Book a Consultation <span className="material-symbols-outlined ml-1 text-[18px] align-middle">chevron_right</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
