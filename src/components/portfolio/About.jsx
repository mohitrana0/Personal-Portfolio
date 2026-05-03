import React from "react";
import { profile } from "../../mock";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-inner grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="section-label">
            <span className="num">01</span>
            <span>—</span>
            <span>About</span>
          </div>
          <h2 className="section-title">
            A developer who <br />
            sweats the <span className="accent-underline">details</span>.
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="space-y-5 text-[17px] leading-[1.75] text-[rgba(14,14,14,0.78)] max-w-[640px]">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-[rgba(14,14,14,0.12)] border border-[rgba(14,14,14,0.12)] rounded-2xl overflow-hidden">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#F4F1E8] p-5 flex flex-col gap-1.5"
              >
                <span className="display text-[34px] font-semibold leading-none">
                  {s.value}
                </span>
                <span className="mono text-[11px] uppercase tracking-wider text-[rgba(14,14,14,0.55)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
