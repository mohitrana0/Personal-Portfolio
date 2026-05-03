import React from "react";
import { skills } from "../../mock";
import { Code2, Layers, Wrench, CircuitBoard } from "lucide-react";

const iconByGroup = {
  "Languages": Code2,
  "Frameworks & Libraries": Layers,
  "Tools & Platforms": Wrench,
  "Hardware & Embedded": CircuitBoard,
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-[#ECE7D8]">
      <div className="section-inner">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="section-label">
              <span className="num">02</span>
              <span>—</span>
              <span>Skills &amp; Stack</span>
            </div>
            <h2 className="section-title max-w-[640px]">
              Tools I reach for when <br />
              it's time to <span className="accent-underline">ship</span>.
            </h2>
          </div>
          <p className="mono text-[12px] text-[rgba(14,14,14,0.55)] max-w-xs">
            // a working set — not a laundry list. Each one here has been
            used in a real shipped project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((s, idx) => {
            const Icon = iconByGroup[s.group] || Code2;
            return (
              <div
                key={s.group}
                className="bg-[#F4F1E8] rounded-2xl p-7 border border-[rgba(14,14,14,0.1)] card-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-[#0E0E0E] text-[#90E0EF] grid place-items-center">
                      <Icon size={18} />
                    </span>
                    <h3 className="display text-[22px] font-semibold">
                      {s.group}
                    </h3>
                  </div>
                  <span className="mono text-[11px] text-[rgba(14,14,14,0.45)]">
                    0{idx + 1}/0{skills.length}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span
                      key={i}
                      className="chip hover:border-[rgba(14,14,14,0.45)] transition-colors"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
