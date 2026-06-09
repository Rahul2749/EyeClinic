import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.modal-backdrop', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo('.modal-content', 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)', delay: 0.1 }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to('.modal-backdrop', { opacity: 0, duration: 0.3, ease: 'power2.in' });
    gsap.to('.modal-content', { 
      y: 30, opacity: 0, scale: 0.95, duration: 0.3, ease: 'power2.in',
      onComplete: () => setIsOpen(false) 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="modal-backdrop absolute inset-0 bg-c-primary/80 backdrop-blur-md" onClick={handleClose}></div>
      <div className="modal-content relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-c-border">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-c-border bg-[#F4F7F7]">
          <div>
            <h2 className="font-display text-[1.5rem] font-semibold text-c-text">Book Consultation</h2>
            <p className="font-body text-c-muted text-[0.875rem]">Secure your appointment at Jaiswal Eye Care.</p>
          </div>
          <button onClick={handleClose} className="text-c-muted hover:text-c-primary transition-colors bg-white rounded-full p-2 border border-c-border shadow-sm">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        
        {/* Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-group relative">
                <input className="form-input peer" id="modalFirstName" placeholder=" " type="text" required />
                <label className="form-label" htmlFor="modalFirstName">First Name</label>
              </div>
              <div className="form-group relative">
                <input className="form-input peer" id="modalLastName" placeholder=" " type="text" required />
                <label className="form-label" htmlFor="modalLastName">Last Name</label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-group relative">
                <input className="form-input peer" id="modalEmail" placeholder=" " type="email" required />
                <label className="form-label" htmlFor="modalEmail">Email Address</label>
              </div>
              <div className="form-group relative">
                <input className="form-input peer" id="modalPhone" placeholder=" " type="tel" required />
                <label className="form-label" htmlFor="modalPhone">Phone Number</label>
              </div>
            </div>
            
            <div className="form-group relative">
              <input className="form-input peer bg-transparent" id="modalDate" type="date" required />
              <label className="form-label -translate-y-6 scale-75 text-c-teal bg-white px-1" htmlFor="modalDate">Preferred Date</label>
            </div>

            <div className="pt-6">
              <button type="button" onClick={() => { alert('Consultation requested!'); handleClose(); }} className="btn-primary w-full py-4 text-[1rem] shadow-[0_10px_20px_rgba(10,61,74,0.15)]">
                Confirm Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
