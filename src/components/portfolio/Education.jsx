import React, { useState } from "react";
import { education, certifications } from "../../mock";
import { GraduationCap, BadgeCheck, X } from "lucide-react";

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <div className="mb-14">
          <div className="section-label">
            <span className="num">05</span>
            <span>—</span>
            <span>Education &amp; Credentials</span>
          </div>
          <h2 className="section-title max-w-[760px]">
            Formal learning, <br />
            ongoing <span className="accent-underline">curiosity</span>.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Education */}
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-9 w-9 rounded-lg bg-[#0E0E0E] text-[#90E0EF] grid place-items-center">
                <GraduationCap size={17} />
              </span>
              <h3 className="display text-[22px] font-semibold">Education</h3>
            </div>
            <div className="relative pl-5 border-l border-[rgba(14,14,14,0.15)] space-y-8">
              {education.map((e, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[27px] top-2 h-3 w-3 rounded-full bg-[#0E0E0E] ring-4 ring-[#F4F1E8]" />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mono text-[11px] text-[rgba(14,14,14,0.55)]">
                        {e.period} · {e.location}
                      </div>
                      <h4 className="display text-[20px] font-semibold mt-1">
                        {e.school}
                      </h4>
                      <p className="text-[15px] text-[rgba(14,14,14,0.72)] mt-1">
                        {e.degree}
                      </p>
                    </div>
                    <span className="chip">{e.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-9 w-9 rounded-lg bg-[#0E0E0E] text-[#90E0EF] grid place-items-center">
                <BadgeCheck size={17} />
              </span>
              <h3 className="display text-[22px] font-semibold">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  onClick={() => c.pdf && setSelectedCert(c)}
                  className={`group relative flex items-start justify-between gap-4 p-4 rounded-xl bg-[#F4F1E8] border border-[rgba(14,14,14,0.12)] card-hover hover:z-10 ${c.pdf ? 'cursor-pointer' : ''}`}
                >
                  <div>
                    <p className="text-[15px] font-medium">{c.name}</p>
                    <p className="mono text-[12px] text-[rgba(14,14,14,0.55)] mt-0.5">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="mono text-[12px] text-[rgba(14,14,14,0.55)]">
                    {c.year}
                  </span>

                  {c.pdf && (
                    <div className="absolute top-1/2 -translate-y-1/2 right-[105%] mr-2 w-[500px] h-[375px] bg-white border border-[rgba(14,14,14,0.12)] rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden pointer-events-none scale-95 group-hover:scale-100 origin-right hidden lg:block">
                      <iframe 
                        src={`${c.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                        className="w-full h-full border-0 pointer-events-none" 
                        title={`${c.name} Certificate`} 
                        tabIndex="-1"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for PDF View */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="bg-[#F4F1E8] w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl relative flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-[rgba(14,14,14,0.1)] bg-[#F4F1E8]">
              <div>
                <h3 className="font-semibold text-[18px]">{selectedCert.name}</h3>
                <p className="text-[13px] text-[rgba(14,14,14,0.6)]">{selectedCert.issuer}</p>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 bg-white relative">
              <iframe 
                src={`${selectedCert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
                className="absolute inset-0 w-full h-full border-0" 
                title={`${selectedCert.name} Certificate`} 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
