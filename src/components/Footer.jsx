import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/30 relative w-full gsap-footer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-margin-mobile md:px-margin-desktop py-xl max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-[#006D77] dark:text-[#83C5BE]">
            Jaiswal Eye Care
          </span>
          <p className="font-body-md text-caption text-on-surface-variant max-w-xs">
            Visionary Care &amp; Premium Style. Experience clarity and elegance.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label-md text-[#006D77] font-bold">
            Quick Links
          </span>
          <a
            className="font-body-md text-caption text-on-surface-variant hover:underline transition-all duration-200"
            href="#"
          >
            Patient Portal
          </a>
          <a
            className="font-body-md text-caption text-on-surface-variant hover:underline transition-all duration-200"
            href="#"
          >
            Location &amp; Hours
          </a>
          <a
            className="font-body-md text-caption text-on-surface-variant hover:underline transition-all duration-200"
            href="#"
          >
            Contact Support
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label-md text-[#006D77] font-bold">Legal</span>
          <a
            className="font-body-md text-caption text-on-surface-variant hover:underline transition-all duration-200"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-body-md text-caption text-on-surface-variant hover:underline transition-all duration-200"
            href="#"
          >
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-label-md text-[#006D77] font-bold">
            Connect
          </span>
          <div className="flex gap-4">
            <a
              className="text-on-surface-variant hover:text-[#006D77] transition-all duration-200 hover:scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              className="text-on-surface-variant hover:text-[#006D77] transition-all duration-200 hover:scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-outline-variant/20 py-4 text-center">
        <p className="font-body-md text-caption text-on-surface-variant/70">
          © 2024 Jaiswal Eye Care Center Tumsar. Visionary Care &amp; Premium
          Style.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
