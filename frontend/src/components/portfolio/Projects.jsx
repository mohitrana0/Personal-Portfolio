import React, { useState } from "react";
import { projects } from "../../mock";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section bg-[#ECE7D8]">
      <div className="section-inner">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="section-label">
              <span className="num">04</span>
              <span>—</span>
              <span>Selected Work</span>
            </div>
            <h2 className="section-title max-w-[760px]">
              Things I've built that <br />
              actually <span className="accent-underline">measure up</span>.
            </h2>
          </div>
          <p className="mono text-[12px] text-[rgba(14,14,14,0.55)] max-w-xs">
            // every result below is measured, not marketed
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
              className={`group relative bg-[#F4F1E8] rounded-2xl border border-[rgba(14,14,14,0.12)] overflow-hidden card-hover`}
            >
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-8 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="mono text-[11px] text-[rgba(14,14,14,0.45)]">
                      0{idx + 1} / 0{projects.length}
                    </span>
                    <span className="h-px flex-1 bg-[rgba(14,14,14,0.12)]" />
                    <span className="chip">{p.accent}</span>
                    <span className="mono text-[11px] text-[rgba(14,14,14,0.55)]">
                      {p.year}
                    </span>
                  </div>

                  <h3 className="display text-[30px] md:text-[40px] leading-[1.05] font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[15px] text-[rgba(14,14,14,0.6)] mono">
                    {p.subtitle}
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[rgba(14,14,14,0.78)] max-w-[560px]">
                    {p.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {p.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[14.5px] leading-[1.6] text-[rgba(14,14,14,0.78)]"
                      >
                        <span className="mono text-[#0E0E0E] mt-[2px]">+</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 bg-[#0E0E0E] text-[#F4F1E8] p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="mono text-[11px] text-white/50 uppercase tracking-wider">
                        Results
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full transition-colors ${
                          active === p.id ? "bg-[#00F3FF]" : "bg-white/30"
                        }`}
                      />
                    </div>
                    <div className="mt-6 space-y-5">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="display text-[28px] font-semibold text-[#F4F1E8] leading-none">
                            {m.value}
                          </div>
                          <div className="mono text-[11px] text-white/50 uppercase tracking-wider mt-1.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                    <span className="mono text-[11px] text-white/50">
                      case study
                    </span>
                    <span className="h-8 w-8 rounded-full bg-[#00F3FF] text-[#0E0E0E] grid place-items-center group-hover:rotate-[-15deg] transition-transform">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
