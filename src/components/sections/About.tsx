import { motion } from "framer-motion";
import { Award, Stethoscope, Users, CheckCircle2 } from "lucide-react";
import sujatha from "@/assets/sujatha.jpg";

const highlights = [
  { icon: Stethoscope, label: "15+ years as Staff Nurse" },
  { icon: Users, label: "2,000+ lives transformed" },
  { icon: Award, label: "Certified Wellness Coach" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-sm lg:max-w-none"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-warm)]">
            <img src={sujatha} alt="Sujatha Murthy, Wellness Coach" loading="lazy" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 rounded-2xl bg-card border border-border p-4 shadow-[var(--shadow-soft)] max-w-[220px]">
            <div className="text-2xl font-serif text-foreground">15+ yrs</div>
            <div className="text-xs text-muted-foreground leading-snug">of clinical nursing and wellness experience</div>
          </div>
        </motion.div>

        <div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Meet Your Coach</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
            Sujatha Murthy — <em className="italic gradient-text">nurse turned nutrition coach.</em>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            After 15 years as a Staff Nurse watching patients struggle with preventable lifestyle conditions, Sujatha built a gentler way: a personalised, science-backed nutrition system that helps people heal through food — not pills, not punishment.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every plan at Sujatha's Wellness Centre is designed one-on-one, and every client receives daily guidance until they reach their goal.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl bg-secondary/60 border border-border p-4">
                <h.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <div className="mt-2 text-sm font-medium text-foreground">{h.label}</div>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2">
            {[
              "Personalised meal charts based on your body type",
              "Daily WhatsApp support throughout your program",
              "No crash diets — only sustainable nutrition",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-foreground/85">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};