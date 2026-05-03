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


        </div>
      </div>
    </section>
  );
};

export default About;
