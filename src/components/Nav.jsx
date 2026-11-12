import { useState } from "react";
import { navLinks, profile } from "../data";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/90 backdrop-blur">
      <nav className="container-page flex items-center justify-between py-4" aria-label="Main">
        <a href="#top" className="text-[18px] font-semibold text-ink">
          {profile.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-[15px] text-body transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
          {profile.cv ? (
            <a href={profile.cv} download className="rounded-[10px] border border-line bg-white px-[18px] py-[10px] text-[15px] font-medium text-ink transition-colors hover:border-muted">
              Download CV
            </a>
          ) : null}
        </div>

        <button
          type="button"
          className="rounded-[10px] border border-line bg-white px-4 py-2 text-[15px] font-medium text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <div className="container-page flex flex-col py-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="border-b border-line/70 py-4 text-[16px] text-ink last:border-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {profile.cv ? (
              <a href={profile.cv} download className="py-4 text-[16px] font-medium text-brand">
                Download CV
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Nav;
