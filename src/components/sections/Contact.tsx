import { MessageCircle, Instagram, Facebook, ArrowUpRight, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/919035605046?text=Hi%20Sujatha%2C%20I%27d%20like%20a%20free%20consultation.";
const INSTA = "https://www.instagram.com/sujatha.murthy_coach?igsh=MTdlYnUzZnczdnN0ZA==";
const FB = "https://www.facebook.com/share/1BTsAfeE55/";

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-gradient-to-br from-accent to-primary p-8 md:p-14 text-primary-foreground shadow-[var(--shadow-warm)] relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />

        <div className="relative">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/80">Get Started</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
            Ready to transform your health?
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/85">
            Book a free 15-minute consultation with Sujatha. We'll understand your goals and suggest the right program — no obligation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/90 transition"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Sujatha
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+919035605046"
              className="inline-flex items-center justify-center gap-2 rounded-full liquid-glass text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-white/15 transition"
            >
              <Phone className="h-4 w-4" />
              +91 90356 05046
            </a>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-3">
            <SocialCard href={WHATSAPP} label="WhatsApp" value="+91 90356 05046" Icon={MessageCircle} />
            <SocialCard href={INSTA} label="Instagram" value="@sujatha.murthy_coach" Icon={Instagram} />
            <SocialCard href={FB} label="Facebook" value="Sujatha's Wellness" Icon={Facebook} />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialCard = ({
  href,
  label,
  value,
  Icon,
}: {
  href: string;
  label: string;
  value: string;
  Icon: typeof MessageCircle;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group rounded-2xl bg-primary-foreground/10 border border-primary-foreground/15 p-4 hover:bg-primary-foreground/15 transition flex items-center gap-3"
  >
    <div className="h-10 w-10 rounded-full bg-primary-foreground/15 flex items-center justify-center">
      <Icon className="h-4 w-4" />
    </div>
    <div className="min-w-0 flex-1">
      <div className="text-xs text-primary-foreground/70">{label}</div>
      <div className="text-sm font-medium truncate">{value}</div>
    </div>
    <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition" />
  </a>
);