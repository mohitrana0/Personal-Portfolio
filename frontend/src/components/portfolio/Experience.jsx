import React from "react";
import { experience } from "../../mock";
import { MapPin, ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="section-label">
              <span className="num">03</span>
              <span>—</span>
              <span>Experience</span>
            </div>
            <h2 className="section-title max-w-[720px]">
              Where I've put <br /> code into <span className="accent-underline">production</span>.
            </h2>
          </div>
          <div className="mono text-[12px] text-[rgba(14,14,14,0.55)]">
            // {experience.length} role(s) · more in progress
          </div>
        </div>

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <article
              key={idx}
              className="grid grid-cols-12 gap-6 bg-[#F4F1E8] rounded-2xl border border-[rgba(14,14,14,0.12)] p-7 md:p-10 card-hover"
            >
              <div className="col-span-12 md:col-span-4">
                <span className="mono text-[12px] text-[rgba(14,14,14,0.55)]">
                  {job.period}
                </span>
                <h3 className="display text-[28px] md:text-[34px] font-semibold leading-tight mt-2">
                  {job.role}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-[15px]">
                  <span className="font-medium">{job.company}</span>
                  <ArrowUpRight size={14} className="text-[rgba(14,14,14,0.5)]" />
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-[13px] text-[rgba(14,14,14,0.55)]">
                  <MapPin size={13} />
                  {job.location}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-8 md:border-l md:border-[rgba(14,14,14,0.12)] md:pl-10">
                <p className="text-[17px] leading-[1.7] text-[rgba(14,14,14,0.78)]">
                  {job.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-[1.65]">
                      <span className="mono text-[12px] text-[rgba(14,14,14,0.4)] mt-[5px] min-w-[22px]">
                        0{i + 1}
                      </span>
                      <span className="text-[rgba(14,14,14,0.82)]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
