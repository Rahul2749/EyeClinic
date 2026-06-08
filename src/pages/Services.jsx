import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  return (
    <>
      

      <div className="section-container">
        

        <section
          className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-bright"
          id="services" className="pt-24 -mt-24"
        >
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16 services-header">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
                Comprehensive Clinical Services
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                We offer a full spectrum of advanced eye care services, ensuring
                accurate diagnoses and effective, personalized treatment plans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[minmax(250px,auto)]">
              <div className="md:col-span-8 bg-surface rounded-xl clinical-card-shadow p-8 flex flex-col justify-between group relative overflow-hidden service-card">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-[48px] mb-6 service-icon">
                    biotech
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                    Comprehensive Eye Exams
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-8">
                    Beyond a simple vision test, our in-depth exams utilize
                    advanced imaging to assess the overall health of your eyes,
                    detecting early signs of glaucoma, macular degeneration, and
                    other conditions.
                  </p>
                </div>
                <div className="relative z-10">
                  <a
                    className="inline-flex items-center text-primary font-label-md text-label-md group-hover:gap-2 transition-all duration-300"
                    href="#"
                  >
                    Learn More{" "}
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between group service-card">
                <div>
                  <span className="material-symbols-outlined text-primary-fixed text-[40px] mb-6 service-icon">
                    lens_blur
                  </span>
                  <h3 className="font-headline-sm text-headline-sm mb-4">
                    Advanced Cataract Surgery
                  </h3>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">
                    Restoring clarity with precision laser-assisted techniques
                    and premium intraocular lenses for optimal visual outcomes.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center text-white font-label-md text-label-md group-hover:gap-2 transition-all duration-300"
                    href="#"
                  >
                    View Procedures{" "}
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-4 bg-surface rounded-xl clinical-card-shadow p-8 flex flex-col justify-between group service-card">
                <div>
                  <span className="material-symbols-outlined text-secondary text-[40px] mb-6 service-icon">
                    child_care
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">
                    Pediatric Eye Care
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Gentle, specialized care ensuring proper visual development
                    and addressing childhood eye conditions early.
                  </p>
                </div>
                <div className="mt-8">
                  <a
                    className="inline-flex items-center text-secondary font-label-md text-label-md group-hover:gap-2 transition-all duration-300"
                    href="#"
                  >
                    For Children{" "}
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              <div className="md:col-span-8 bg-surface rounded-xl clinical-card-shadow p-8 flex flex-col md:flex-row gap-8 items-center group relative overflow-hidden service-card">
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-container-low z-0"></div>
                <div className="flex-1 relative z-10">
                  <span className="material-symbols-outlined text-primary text-[48px] mb-6 service-icon">
                    carpenter
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-background mb-4">
                    Laser Vision Correction
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                    Experience life without boundaries. We offer
                    state-of-the-art LASIK and PRK procedures tailored to your
                    unique corneal topography for the highest level of safety
                    and precision.
                  </p>
                  <a
                    className="inline-flex items-center text-primary font-label-md text-label-md group-hover:gap-2 transition-all duration-300"
                    href="#"
                  >
                    Determine Eligibility{" "}
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="w-full md:w-1/3 aspect-square rounded-lg overflow-hidden relative z-10 hidden md:block">
                  <img
                    alt="Laser Technology"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    data-alt="A close-up abstract view of advanced laser eye surgery equipment. The machine features sleek, modern white casing with glowing blue and teal indicator lights. The focus is on the precision lens array, reflecting a clean, high-tech clinical environment. The lighting emphasizes sterile, cutting-edge medical technology."
                    src="/images/laser_machine.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-margin-mobile md:px-margin-desktop py-xl bg-surface">
          <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-xl items-center doctor-section">
            <div className="w-full lg:w-1/2 doctor-img-wrapper">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img
                  alt="Dr. Jaiswal"
                  className="w-full h-full object-cover"
                  data-alt="A portrait of a highly professional, compassionate doctor standing in a modern optical clinic. The doctor is wearing a crisp white coat over sophisticated attire, looking confidently yet warmly at the camera. The background is slightly blurred, showing clean, minimalist clinical surfaces and hints of high-end optical equipment bathed in soft, natural light."
                  src="/images/doctor_portrait.png"
                />

                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-lg p-6">
                  <h4 className="font-headline-sm text-headline-sm text-on-background">
                    Dr. Siddharth Jaiswal
                  </h4>
                  <p className="font-body-md text-body-md text-primary mt-1">
                    Chief Ophthalmologist &amp; Surgeon
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 doctor-text-wrapper">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-6">
                Expertise You Can Trust
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                With over 15 years of dedicated practice in advanced
                ophthalmology, Dr. Jaiswal brings a meticulous, patient-first
                approach to every consultation. Our clinic is built on the
                foundation of the "Good Doctor" philosophy—where cutting-edge
                science meets deep empathy.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    verified
                  </span>
                  <div>
                    <h5 className="font-label-md text-label-md text-on-background">
                      Board Certified Specialist
                    </h5>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                      Recognized excellence in refractive and cataract surgery.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">
                    school
                  </span>
                  <div>
                    <h5 className="font-label-md text-label-md text-on-background">
                      Continuous Innovation
                    </h5>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
                      Regularly updating protocols with the latest global
                      advancements in eye care.
                    </p>
                  </div>
                </li>
              </ul>
              <button onClick={() => window.dispatchEvent(new Event('open-booking-modal'))} className="inline-flex bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-on-primary-fixed-variant transition-all hover:shadow-lg hover:-translate-y-1 mt-md">
                Book a Consultation with Dr. Jaiswal
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
