import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-c-primary text-white border-t border-white/10 relative w-full gsap-footer">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:px-16 py-16 max-w-container-max mx-auto">
        <div className="flex flex-col gap-4">
          <span className="font-headline-sm text-c-accent font-semibold">
            Jaiswal Eye Care
          </span>
          <p className="font-body text-[14px] text-white/70 max-w-xs leading-[1.6]">
            Visionary Care &amp; Premium Style. Experience clarity and elegance.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[0.75rem] text-c-accent font-bold tracking-widest uppercase">
            Quick Links
          </span>
          <a
            className="font-body text-[14px] text-white/75 hover:text-white transition-colors duration-200"
            href="#"
          >
            Patient Portal
          </a>
          <a
            className="font-body text-[14px] text-white/75 hover:text-white transition-colors duration-200"
            href="#"
          >
            Location &amp; Hours
          </a>
          <a
            className="font-body text-[14px] text-white/75 hover:text-white transition-colors duration-200"
            href="#"
          >
            Contact Support
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[0.75rem] text-c-accent font-bold tracking-widest uppercase">Legal</span>
          <a
            className="font-body text-[14px] text-white/75 hover:text-white transition-colors duration-200"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-body text-[14px] text-white/75 hover:text-white transition-colors duration-200"
            href="#"
          >
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[0.75rem] text-c-accent font-bold tracking-widest uppercase">
            Connect
          </span>
          <div className="flex gap-4">
            <a
              className="text-white/70 hover:text-c-accent transition-all duration-200 hover:scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              className="text-white/70 hover:text-c-accent transition-all duration-200 hover:scale-110"
              href="#"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center">
        <p className="font-body text-[14px] text-white/50">
          © 2024 Jaiswal Eye Care Center Tumsar. Visionary Care &amp; Premium
          Style.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
