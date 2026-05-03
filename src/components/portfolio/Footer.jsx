import React from "react";
import { profile } from "../../mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0E0E0E] text-[#F4F1E8] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-md bg-[#00F3FF] text-[#0E0E0E] grid place-items-center font-bold display text-sm">
            M
          </span>
          <div className="mono text-[12px] text-white/65">
            © {year} {profile.name}. Crafted in New Delhi.
          </div>
        </div>
        <div className="flex items-center gap-6 mono text-[12px] text-white/55">
          <span>Built with React · Tailwind</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#00F3FF]" />
          <span>v1.0.0</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
