import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-diet", label: "Why Diet" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const WHATSAPP = "https://wa.me/919035605046";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-8 transition-all`}
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-full px-4 md:px-6 py-2.5 md:py-3 ${
          scrolled ? "liquid-glass-dark text-primary-foreground" : "liquid-glass text-primary-foreground"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-1">
          <span className="font-sans font-bold text-base md:text-lg leading-none tracking-tight">Sujatha's Wellness</span>
        </a>

        <div className="hidden md:flex items-center gap-1 rounded-full liquid-glass px-2 py-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary-foreground text-primary px-4 py-2 text-sm font-medium hover:bg-primary-foreground/90 transition"
          >
            <MessageCircle className="h-4 w-4" /> Book Consult
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 rounded-full liquid-glass flex items-center justify-center"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 rounded-3xl liquid-glass-dark p-4 text-primary-foreground animate-fade-in">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-2xl text-sm font-medium hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary-foreground text-primary px-4 py-2.5 text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" /> Book Free Consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
};