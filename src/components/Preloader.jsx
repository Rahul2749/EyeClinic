import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Unmount the component exactly when the CSS fadeOut animation finishes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null;

  const text = "JAISWAL EYE CARE";

  return (
    <div className="preloader-container fixed inset-0 z-[9999] bg-c-primary flex flex-col items-center justify-center">
      <div className="overflow-hidden mb-6">
        <div className="flex">
          {text.split('').map((char, i) => (
            <span 
              key={i} 
              className="preloader-text-char font-display text-white text-3xl md:text-4xl tracking-[0.2em] font-medium"
              style={{ 
                marginRight: char === ' ' ? '1rem' : '0',
                animationDelay: `${i * 0.05}s`
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="w-64 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <div className="preloader-line w-full h-full bg-c-accent rounded-full"></div>
      </div>
    </div>
  );
};

export default Preloader;
