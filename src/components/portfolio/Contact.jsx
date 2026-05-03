import React from "react";
import { profile, socialLinks } from "../../mock";
import { Copy, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const iconByLabel = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin,
};

const Contact = () => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sending, setSending] = React.useState(false);

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard", { description: text });
    } catch {
      toast.error("Couldn't copy");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setSending(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    const mailtoLink = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;

    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setSending(false);
      toast.success("Opening email client", {
        description: "Please click send in your email app.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="section bg-[#0E0E0E] text-[#F4F1E8] border-t-0">
      <div className="section-inner">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-label text-white/55">
              <span className="text-[#90E0EF]">06</span>
              <span className="text-white/40">—</span>
              <span>Contact</span>
            </div>
            <h2 className="display font-semibold text-[#F4F1E8] leading-[0.98] tracking-tight text-[52px] sm:text-[72px] lg:text-[96px] mt-4">
              Let's build <br />
              something <span className="text-[#90E0EF]">together</span>.
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[520px] leading-relaxed">
              I'm currently {profile.availability.toLowerCase()} and always
              open to chatting about AI systems, frontend craft, or a
              half-baked weekend idea you can't stop thinking about.
            </p>

            <div className="mt-10 space-y-3">
              {socialLinks.map((s) => {
                const Icon = iconByLabel[s.label];
                return (
                  <div
                    key={s.label}
                    className="group flex items-center justify-between gap-4 py-4 border-b border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <span className="h-10 w-10 rounded-xl bg-white/5 text-[#90E0EF] grid place-items-center border border-white/10">
                        {Icon && <Icon size={16} />}
                      </span>
                      <div>
                        <p className="mono text-[11px] text-white/50 uppercase tracking-wider">
                          {s.label}
                        </p>
                        <p className="text-[16px] mt-0.5">{s.handle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {s.label !== "Location" && (
                        <button
                          onClick={() => copy(s.handle)}
                          className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 grid place-items-center transition-colors"
                          aria-label={`Copy ${s.label}`}
                        >
                          <Copy size={13} />
                        </button>
                      )}
                      {s.href !== "#" && (
                        <a
                          href={s.href}
                          className="h-9 w-9 rounded-full bg-[#90E0EF] text-[#0E0E0E] grid place-items-center group-hover:rotate-[-15deg] transition-transform"
                        >
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            >
              <p className="mono text-[11px] text-white/55 uppercase tracking-wider">
                // Quick message
              </p>
              <div className="mt-5 space-y-4">
                <div>
                  <label className="mono text-[11px] text-white/60">
                    Your name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full bg-transparent border-b border-white/20 focus:border-[#90E0EF] outline-none py-2.5 text-[15px] placeholder:text-white/30"
                    placeholder="Ada Lovelace"
                  />
                </div>
                <div>
                  <label className="mono text-[11px] text-white/60">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full bg-transparent border-b border-white/20 focus:border-[#90E0EF] outline-none py-2.5 text-[15px] placeholder:text-white/30"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="mono text-[11px] text-white/60">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="mt-1 w-full bg-transparent border-b border-white/20 focus:border-[#90E0EF] outline-none py-2.5 text-[15px] resize-none placeholder:text-white/30"
                    placeholder="Tell me a little about what you're working on…"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-[#90E0EF] text-[#0E0E0E] rounded-full py-3 font-medium text-[14px] hover:bg-white disabled:opacity-60 transition-colors"
              >
                {sending ? "Sending…" : "Send message"}
                <ArrowUpRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
