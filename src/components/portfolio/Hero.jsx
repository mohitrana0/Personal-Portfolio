import React from "react";
import { profile } from "../../mock";
import { ArrowUpRight, MapPin, Sparkles, Cpu, Circle, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden noise">
      <div className="absolute inset-0 dot-grid opacity-70 pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        {/* top meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="chip">
            <Circle size={8} className="fill-[#0E0E0E] text-[#0E0E0E]" />
            {profile.availability}
          </span>
          <span className="chip">
            <MapPin size={12} />
            {profile.location}
          </span>
          <span className="tag ml-auto hidden sm:inline">
            Portfolio · v1.0 · 2025
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="tag mb-6 flex items-center gap-2">
              <Sparkles size={13} /> Hello — I'm
            </p>
            <h1 className="display font-semibold text-[#0E0E0E] leading-[0.95] tracking-tight text-[56px] sm:text-[84px] lg:text-[116px]">
              Mohit <br />
              <span className="relative inline-block z-0">
                Rana
                <span className="absolute left-0 right-0 bottom-[10%] h-[14%] bg-[#90E0EF] -z-10" />
              </span>
              <span className="text-[rgba(14,14,14,0.35)]">.</span>
            </h1>

            <p className="mt-8 text-[18px] sm:text-[20px] text-[rgba(14,14,14,0.72)] max-w-[620px] leading-relaxed">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-ink" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View projects <ArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get in touch
              </a>
              <a href="/resume.pdf" download="Mohit_Rana_Resume.pdf" className="btn-outline flex items-center gap-2">
                Resume <Download size={16} />
              </a>
              <span className="tag ml-1 hidden sm:inline">
                Press <span className="kbd">↓</span> to scroll
              </span>
            </div>
          </div>

          {/* Right terminal card */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-[#0E0E0E] text-[#F4F1E8] rounded-2xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(14,14,14,0.45)] border border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="mono text-[11px] text-white/60 ml-3">
                  ~/mohit — zsh
                </span>
              </div>
              <div className="p-5 mono text-[12.5px] leading-[1.9]">
                <p>
                  <span className="text-[#90E0EF]">$</span>{" "}
                  <span className="text-white/70">whoami</span>
                </p>
                <p className="text-white/90">mohit-rana</p>

                <p className="mt-3">
                  <span className="text-[#90E0EF]">$</span>{" "}
                  <span className="text-white/70">cat role.txt</span>
                </p>
                <p className="text-white/90">{profile.role}</p>

                <p className="mt-3">
                  <span className="text-[#90E0EF]">$</span>{" "}
                  <span className="text-white/70">ls ./focus</span>
                </p>
                {profile.specialties.map((s) => (
                  <p key={s} className="text-white/90 pl-3">
                    <span className="text-[#90E0EF]">›</span> {s}
                  </p>
                ))}

                <p className="mt-3">
                  <span className="text-[#90E0EF]">$</span>{" "}
                  <span className="text-white/70">uptime</span>
                </p>
                <p className="text-white/60">
                  building since 2021 · load avg: caffeinated
                </p>

                <p className="mt-3 flex items-center gap-2">
                  <span className="text-[#90E0EF]">$</span>
                  <span className="inline-block w-2.5 h-4 bg-[#90E0EF] animate-pulse" />
                </p>
              </div>
              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between mono text-[11px] text-white/60">
                <span className="flex items-center gap-1.5">
                  <Cpu size={12} /> edge-ready
                </span>
                <span>v1.0.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="mt-20 border-y border-[rgba(14,14,14,0.12)] py-5 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap marquee-track">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex gap-12 items-center">
                {[
                  "Python",
                  "React",
                  "YOLOv8",
                  "OpenCV",
                  "Raspberry Pi",
                  "PostgreSQL",
                  "AWS",
                  "Scikit-learn",
                  "C++",
                  "Linux",
                ].map((t) => (
                  <span
                    key={`${j}-${t}`}
                    className="mono text-[18px] text-[rgba(14,14,14,0.55)]"
                  >
                    {t} <span className="text-[#90E0EF]">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
