import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <>
      

      <div id="about" className="section-container pt-24 -mt-24">
        

        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
            <div
              className="lg:col-span-7 glass-panel rounded-xl p-lg shadow-[0_10px_30px_rgba(0,0,0,0.03)] reveal-element"
              id="form-card"
            >
              <h2 className="font-headline-md text-headline-md text-primary mb-md">
                Patient Details
              </h2>
              <form className="space-y-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)] w-full"
                      id="firstName"
                      placeholder="Jane"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)] w-full"
                      id="lastName"
                      placeholder="Doe"
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)] w-full"
                      id="email"
                      placeholder="jane@example.com"
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="phone"
                    >
                      Phone Number
                    </label>
                    <input
                      className="bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)] w-full"
                      id="phone"
                      placeholder="+91 00000 00000"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface"
                    htmlFor="service"
                  >
                    Reason for Visit
                  </label>
                  <div className="relative">
                    <select
                      className="appearance-none bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 w-full focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)]"
                      id="service"
                    >
                      <option disabled="" selected="" value="">
                        Select a service...
                      </option>
                      <option value="comprehensive">
                        Comprehensive Eye Exam
                      </option>
                      <option value="optical">Optical Frame Fitting</option>
                      <option value="contact-lens">
                        Contact Lens Consultation
                      </option>
                      <option value="pediatric">Pediatric Eye Care</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="date"
                    >
                      Preferred Date
                    </label>
                    <input
                      className="bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)] w-full"
                      id="date"
                      type="date"
                    />
                  </div>

                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-md text-label-md text-on-surface"
                      htmlFor="time"
                    >
                      Preferred Time
                    </label>
                    <div className="relative">
                      <select
                        className="appearance-none bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 w-full focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)]"
                        id="time"
                      >
                        <option disabled="" selected="" value="">
                          Select time...
                        </option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">
                          Afternoon (1 PM - 5 PM)
                        </option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                        schedule
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-md text-label-md text-on-surface"
                    htmlFor="message"
                  >
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    className="bg-surface-container-lowest border-outline-variant/50 text-on-surface rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 hover:border-primary/50 hover:shadow-[0_2px_8px_rgba(0,83,91,0.05)] w-full resize-none"
                    id="message"
                    placeholder="Any specific symptoms or concerns?"
                    rows="3"
                  ></textarea>
                </div>

                <div className="pt-sm">
                  <button
                    className="w-full md:w-auto bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full hover:bg-on-primary-fixed-variant hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    type="button"
                  >
                    Request Appointment
                  </button>
                  <p className="font-caption text-caption text-on-surface-variant mt-xs text-center md:text-left">
                    Submitting this form does not guarantee an appointment. Our
                    staff will contact you to confirm.
                  </p>
                </div>
              </form>
            </div>

            <div
              className="lg:col-span-5 flex flex-col gap-md reveal-element"
              id="info-card"
            >
              <div className="bg-surface-container-low rounded-xl p-lg border border-outline-variant/20">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">
                  Clinic Information
                </h3>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-secondary mt-1">
                      location_on
                    </span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        Jaiswal Eye Care Center
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Main Road, Near Gandhi Chowk
                        <br />
                        Tumsar, Maharashtra 441912
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-sm pt-sm">
                    <span className="material-symbols-outlined text-secondary mt-1">
                      call
                    </span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        Contact Numbers
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        +91 98765 43210
                        <br />
                        07183 234567
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-sm pt-sm">
                    <span className="material-symbols-outlined text-secondary mt-1">
                      mail
                    </span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">
                        Email
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        care@jaiswaleye.com
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-lg pt-md border-t border-outline-variant/30">
                  <h4 className="font-label-md text-label-md text-on-surface mb-sm flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      schedule
                    </span>{" "}
                    Operating Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-y-xs font-body-md text-body-md text-on-surface-variant">
                    <span>Mon - Sat</span>
                    <span className="text-right">9:00 AM - 8:00 PM</span>
                    <span>Sunday</span>
                    <span className="text-right text-primary font-medium">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-outline-variant/20 h-[300px] relative group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-10 flex items-center justify-center">
                  <div className="absolute inline-flex w-12 h-12 rounded-full bg-primary/40 animate-ping"></div>
                  <div className="relative inline-flex w-4 h-4 rounded-full bg-primary border-2 border-white shadow-lg shadow-primary/50"></div>
                </div>

                <img
                  alt="Map location of Jaiswal Eye Care Center in Tumsar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="A highly detailed, elegant top-down custom map view centered on Tumsar, Maharashtra. The map uses a minimalist, light-mode aesthetic with soft greys and subtle teal routes reflecting the brand's primary color. A stylized, modern glassmorphic pin drops at the center indicating the clinic's location. The overall mood is clinical, clean, and precise, resembling high-end modern UI map integrations without heavy labels."
                  data-location="Tumsar"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtfAa58SOen8Lzxs5gdDzpHlwHB7e5_CiEJ9FZDF3XseG7-aB36TXM-cdkNWDcUPBZw16xoslj59WPV90GEr4HRxpiHjllbz70EnWNIRUUB2mUzzlY0yWtMvQ2LsZ3bZiLGBs9py7Z-yAsJdkti-MhppPjqCajdwBv1c7-2pIaY8C1n3a14NeM14RNnedJ_rbGAeT7oG1aolZkL9d8YBEmpPQT20pgM66aoBSqBFJ-PhnJSXTfpIjWPhDY"
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-20">
                  <button className="bg-surface/90 backdrop-blur-md text-primary font-label-md text-label-md px-6 py-2 rounded-full border border-primary/20 shadow-sm hover:bg-surface hover:-translate-y-0.5 hover:shadow-md transition-all flex items-center gap-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      directions
                    </span>{" "}
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-xl border-t border-outline-variant/20">
          <div
            className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop reveal-element"
            id="faq-reveal"
          >
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg text-headline-sm md:text-headline-md text-primary mb-xs">
                Patient Help Desk
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Common questions about visiting our center.
              </p>
            </div>
            <div className="space-y-4">
              <div className="faq-item bg-surface rounded-lg border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-primary/40 transition-colors duration-300">
                <button className="faq-toggle w-full font-label-md text-label-md text-on-surface p-4 flex justify-between items-center hover:bg-surface-bright transition-colors text-left focus:outline-none">
                  What should I bring to my first appointment?
                  <span className="faq-icon material-symbols-outlined text-outline">
                    expand_more
                  </span>
                </button>
                <div className="faq-content h-0 overflow-hidden">
                  <div className="p-4 pt-0 font-body-md text-body-md text-on-surface-variant bg-surface">
                    Please bring any current prescription glasses or contact
                    lenses you wear, a list of current medications, and any
                    previous eye care records if available.
                  </div>
                </div>
              </div>

              <div className="faq-item bg-surface rounded-lg border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-primary/40 transition-colors duration-300">
                <button className="faq-toggle w-full font-label-md text-label-md text-on-surface p-4 flex justify-between items-center hover:bg-surface-bright transition-colors text-left focus:outline-none">
                  Do you accept insurance?
                  <span className="faq-icon material-symbols-outlined text-outline">
                    expand_more
                  </span>
                </button>
                <div className="faq-content h-0 overflow-hidden">
                  <div className="p-4 pt-0 font-body-md text-body-md text-on-surface-variant bg-surface">
                    We work with a variety of local and national health
                    insurance providers. Please contact our front desk with your
                    policy details prior to your visit to verify coverage.
                  </div>
                </div>
              </div>

              <div className="faq-item bg-surface rounded-lg border border-outline-variant/30 overflow-hidden cursor-pointer hover:border-primary/40 transition-colors duration-300">
                <button className="faq-toggle w-full font-label-md text-label-md text-on-surface p-4 flex justify-between items-center hover:bg-surface-bright transition-colors text-left focus:outline-none">
                  How long does a comprehensive eye exam take?
                  <span className="faq-icon material-symbols-outlined text-outline">
                    expand_more
                  </span>
                </button>
                <div className="faq-content h-0 overflow-hidden">
                  <div className="p-4 pt-0 font-body-md text-body-md text-on-surface-variant bg-surface">
                    A standard comprehensive exam typically takes between 30 to
                    45 minutes. If dilation or additional specialized testing is
                    required, please allow up to an hour.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
