import React, { useState, useEffect } from 'react';

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-inverse-surface/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      <div className="relative z-10 w-full max-w-2xl bg-surface rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant/20 bg-surface-bright">
          <h2 className="font-headline-sm text-primary">Book Consultation</h2>
          <button onClick={() => setIsOpen(false)} className="text-on-surface-variant hover:text-error transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto no-scrollbar">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-sm text-on-surface">First Name</label>
                <input className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary w-full" type="text" placeholder="Jane" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-sm text-on-surface">Last Name</label>
                <input className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary w-full" type="text" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-sm text-on-surface">Email</label>
                <input className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary w-full" type="email" placeholder="jane@example.com" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-md text-sm text-on-surface">Phone Number</label>
                <input className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary w-full" type="tel" placeholder="+91 00000 00000" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="font-label-md text-sm text-on-surface">Preferred Date</label>
              <input className="bg-surface-container-lowest border border-outline-variant/50 rounded-lg px-4 py-3 focus:outline-none focus:border-primary w-full" type="date" />
            </div>

            <div className="pt-4">
              <button type="button" onClick={() => { alert('Consultation requested!'); setIsOpen(false); }} className="w-full bg-primary text-on-primary font-label-md px-8 py-4 rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md">
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
