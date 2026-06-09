import { useEffect } from "react";
import { gsap, revealFromBottom } from "../lib/gsap";
import "./About.css";

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      revealFromBottom(".form-group", {
        trigger: "#appointment-form",
        start: "top 80%",
        stagger: 0.1,
        duration: 0.6,
      });

      gsap.fromTo(
        "#clinic-info-card",
        { x: 40, opacity: 0 },
        {
          scrollTrigger: { trigger: "#clinic-info-card", start: "top 80%" },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
        },
      );

      // FAQ accordion
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        
        toggle.addEventListener('click', () => {
          const isOpen = item.classList.contains('active');
          
          // Close all
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            gsap.to(otherItem.querySelector('.faq-content'), { height: 0, duration: 0.3, ease: 'power2.inOut' });
            gsap.to(otherItem.querySelector('.faq-icon'), { rotation: 0, duration: 0.3 });
          });
          
          // Open clicked if it wasn't open
          if (!isOpen) {
            item.classList.add('active');
            gsap.set(content, { height: 'auto' });
            const height = content.offsetHeight;
            gsap.set(content, { height: 0 });
            gsap.to(content, { height: height, duration: 0.4, ease: 'power2.inOut' });
            gsap.to(icon, { rotation: 180, duration: 0.4 });
          }
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="about" className="section-container scroll-mt-24 pb-space-xl">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop overflow-hidden pt-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Appointment Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-c-border" id="appointment-form">
              <h2 className="font-display text-[2rem] font-semibold text-c-text mb-2">
                Request an Appointment
              </h2>
              <p className="font-body text-c-muted mb-10">
                Schedule a consultation with our specialists. We will confirm your appointment via phone or email.
              </p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="form-group relative">
                    <input className="form-input peer" id="firstName" placeholder=" " type="text" required />
                    <label className="form-label" htmlFor="firstName">First Name</label>
                  </div>
                  <div className="form-group relative">
                    <input className="form-input peer" id="lastName" placeholder=" " type="text" required />
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="form-group relative">
                    <input className="form-input peer" id="email" placeholder=" " type="email" required />
                    <label className="form-label" htmlFor="email">Email Address</label>
                  </div>
                  <div className="form-group relative">
                    <input className="form-input peer" id="phone" placeholder=" " type="tel" required />
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                  </div>
                </div>

                <div className="form-group relative">
                  <select className="form-input peer appearance-none bg-transparent pr-12 cursor-pointer" id="service" required defaultValue="">
                    <option disabled value="" className="text-c-muted">Select a service...</option>
                    <option value="comprehensive" className="text-c-text">Comprehensive Eye Exam</option>
                    <option value="laser" className="text-c-text">Laser Vision Correction</option>
                    <option value="cataract" className="text-c-text">Cataract Consultation</option>
                    <option value="pediatric" className="text-c-text">Pediatric Eye Care</option>
                    <option value="other" className="text-c-text">Other</option>
                  </select>
                  <label className="form-label -translate-y-6 scale-75 text-c-teal bg-white px-1" htmlFor="service">Reason for Visit</label>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-c-muted pointer-events-none">expand_more</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="form-group relative">
                    <input className="form-input peer bg-transparent" id="date" type="date" required />
                    <label className="form-label -translate-y-6 scale-75 text-c-teal bg-white px-1" htmlFor="date">Preferred Date</label>
                  </div>
                  <div className="form-group relative">
                    <select className="form-input peer appearance-none bg-transparent pr-12 cursor-pointer" id="time" required defaultValue="">
                      <option disabled value="" className="text-c-muted">Select time...</option>
                      <option value="morning" className="text-c-text">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon" className="text-c-text">Afternoon (1 PM - 5 PM)</option>
                      <option value="evening" className="text-c-text">Evening (5 PM - 8 PM)</option>
                    </select>
                    <label className="form-label -translate-y-6 scale-75 text-c-teal bg-white px-1" htmlFor="time">Preferred Time</label>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-c-muted pointer-events-none">schedule</span>
                  </div>
                </div>

                <div className="form-group relative">
                  <textarea className="form-input peer min-h-[120px] py-4 resize-none" id="message" placeholder=" "></textarea>
                  <label className="form-label" htmlFor="message">Additional Notes (Optional)</label>
                </div>

                <div className="form-group pt-4">
                  <button className="btn-primary w-full md:w-auto px-10 py-4 text-[1rem]" type="button">
                    Submit Request
                  </button>
                  <p className="font-mono text-[0.7rem] text-c-muted mt-4 text-center md:text-left tracking-wide uppercase">
                    Our staff will contact you to confirm the exact time.
                  </p>
                </div>
              </form>
            </div>

            {/* Clinic Information Sidebar */}
            <div className="lg:col-span-5 flex flex-col gap-6" id="clinic-info-card">
              
              <div className="bg-c-primary text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-c-teal/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                
                <h3 className="font-display text-[1.75rem] font-semibold mb-8 relative z-10">
                  Clinic Information
                </h3>
                
                <ul className="space-y-6 relative z-10">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-c-accent text-[24px] mt-0.5">location_on</span>
                    <div>
                      <p className="font-body font-medium text-[1.0625rem]">Jaiswal Eye Care Center</p>
                      <p className="font-body text-[0.9375rem] text-white/70 mt-1 leading-relaxed">
                        Main Road, Near Gandhi Chowk<br />
                        Tumsar, Maharashtra 441912
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 pt-2">
                    <span className="material-symbols-outlined text-c-accent text-[24px] mt-0.5">call</span>
                    <div>
                      <p className="font-body font-medium text-[1.0625rem]">Contact Numbers</p>
                      <p className="font-body text-[0.9375rem] text-white/70 mt-1 leading-relaxed">
                        +91 98765 43210<br />
                        07183 234567
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 pt-2">
                    <span className="material-symbols-outlined text-c-accent text-[24px] mt-0.5">mail</span>
                    <div>
                      <p className="font-body font-medium text-[1.0625rem]">Email</p>
                      <p className="font-body text-[0.9375rem] text-white/70 mt-1 leading-relaxed">
                        care@jaiswaleye.com
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                  <h4 className="font-body font-medium text-[1.0625rem] mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-c-accent">schedule</span> Operating Hours
                  </h4>
                  <div className="grid grid-cols-2 gap-y-3 font-body text-[0.9375rem] text-white/70">
                    <span>Mon - Sat</span>
                    <span className="text-right">9:00 AM - 8:00 PM</span>
                    <span>Sunday</span>
                    <span className="text-right text-c-amber font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Map View */}
              <div className="rounded-2xl overflow-hidden border border-c-border h-[280px] relative group shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] z-10 flex items-center justify-center">
                  <div className="absolute w-14 h-14 rounded-full bg-c-teal/30 animate-ping"></div>
                  <div className="relative w-4 h-4 rounded-full bg-c-teal border-2 border-white shadow-lg"></div>
                </div>

                <img
                  alt="Map location"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                  onError={(e) => {
                    const fallback =
                      "https://placehold.co/1000x560/F4F7F7/0B6E73?font=montserrat&text=Map";
                    if (e.currentTarget.src !== fallback) {
                      e.currentTarget.src = fallback;
                    }
                  }}
                />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-center z-20">
                  <button className="bg-white/90 backdrop-blur-md text-c-primary font-body font-medium text-[0.875rem] uppercase tracking-wider px-6 py-3 rounded-full border border-c-border shadow-md hover:bg-white transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">directions</span> Get Directions
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Patient Help Desk (FAQ) */}
        <section className="bg-c-surface py-space-xl mt-space-xl border-t border-c-border">
          <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-12">
              <h2 className="font-display text-[2.25rem] font-semibold text-c-text mb-3">
                Patient Help Desk
              </h2>
              <p className="font-body text-[1.0625rem] text-c-muted">
                Common questions about visiting our clinical atelier.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="faq-item bg-white rounded-xl border border-c-border overflow-hidden cursor-pointer hover:shadow-sm transition-all duration-300">
                <button className="faq-toggle w-full font-body font-medium text-[1.0625rem] text-c-text p-6 flex justify-between items-center text-left focus:outline-none">
                  What should I bring to my first appointment?
                  <span className="faq-icon material-symbols-outlined text-c-teal transition-transform duration-300">expand_more</span>
                </button>
                <div className="faq-content h-0 overflow-hidden">
                  <div className="p-6 pt-0 font-body text-[0.9375rem] text-c-muted leading-relaxed">
                    Please bring any current prescription glasses or contact lenses you wear, a list of current medications, and any previous eye care records if available.
                  </div>
                </div>
              </div>

              <div className="faq-item bg-white rounded-xl border border-c-border overflow-hidden cursor-pointer hover:shadow-sm transition-all duration-300">
                <button className="faq-toggle w-full font-body font-medium text-[1.0625rem] text-c-text p-6 flex justify-between items-center text-left focus:outline-none">
                  Do you accept insurance?
                  <span className="faq-icon material-symbols-outlined text-c-teal transition-transform duration-300">expand_more</span>
                </button>
                <div className="faq-content h-0 overflow-hidden">
                  <div className="p-6 pt-0 font-body text-[0.9375rem] text-c-muted leading-relaxed">
                    We work with a variety of local and national health insurance providers. Please contact our front desk with your policy details prior to your visit to verify coverage.
                  </div>
                </div>
              </div>

              <div className="faq-item bg-white rounded-xl border border-c-border overflow-hidden cursor-pointer hover:shadow-sm transition-all duration-300">
                <button className="faq-toggle w-full font-body font-medium text-[1.0625rem] text-c-text p-6 flex justify-between items-center text-left focus:outline-none">
                  How long does a comprehensive eye exam take?
                  <span className="faq-icon material-symbols-outlined text-c-teal transition-transform duration-300">expand_more</span>
                </button>
                <div className="faq-content h-0 overflow-hidden">
                  <div className="p-6 pt-0 font-body text-[0.9375rem] text-c-muted leading-relaxed">
                    A standard comprehensive exam typically takes between 30 to 45 minutes. If dilation or additional specialized testing is required, please allow up to an hour for thorough observation.
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
