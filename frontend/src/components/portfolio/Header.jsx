import React, { useEffect, useState } from "react";
import { navLinks, profile } from "../../mock";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      // active section
      const y = window.scrollY + 160;
      for (const l of navLinks) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top && y < bottom) {
          setActive(l.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#F4F1E8]/85 border-b border-[rgba(14,14,14,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("top")}
          className="flex items-center gap-2.5 group"
        >
          <span className="h-7 w-7 rounded-md bg-[#0E0E0E] text-[#00F3FF] grid place-items-center font-bold text-sm display">
            M
          </span>
          <span className="mono text-[13px] text-[#0E0E0E]">
            {profile.shortName}
            <span className="text-[rgba(14,14,14,0.45)]">.dev</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => handleClick(l.id)}
              className={`px-3 py-2 rounded-full text-[13px] mono transition-colors ${
                active === l.id
                  ? "text-[#0E0E0E] bg-white border border-[rgba(14,14,14,0.12)]"
                  : "text-[rgba(14,14,14,0.65)] hover:text-[#0E0E0E]"
              }`}
            >
              <span className="text-[rgba(14,14,14,0.4)] mr-1.5">{l.index}</span>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="btn-ink text-[13px] !py-2 !px-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00F3FF]" />
            Let's talk
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border border-[rgba(14,14,14,0.12)] bg-white"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgba(14,14,14,0.08)] bg-[#F4F1E8]">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <button
                key={l.id}
                onClick={() => handleClick(l.id)}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-white"
              >
                <span className="mono text-[13px]">
                  <span className="text-[rgba(14,14,14,0.4)] mr-2">{l.index}</span>
                  {l.label}
                </span>
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="btn-ink mt-3 justify-center"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
