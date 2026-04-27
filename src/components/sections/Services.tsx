import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import weightLoss from "@/assets/weight-loss.jpg";
import weightGain from "@/assets/weight-gain.jpg";
import skin from "@/assets/skin-cleansing.jpg";

const WHATSAPP = (msg: string) => `https://wa.me/919035605046?text=${encodeURIComponent(msg)}`;

const services = [
  {
    title: "Weight Loss",
    tag: "Controlled Diet",
    desc: "Sustainable fat loss through balanced meals, portion guidance and daily nutrition support — no crash diets, no starvation.",
    bullets: ["Metabolism reset", "Cravings control", "Weekly progress tracking"],
    img: weightLoss,
    msg: "Hi Sujatha, I'm interested in the Weight Loss program.",
  },
  {
    title: "Healthy Weight Gain",
    tag: "Nutrient-Dense",
    desc: "Build healthy mass with calorie-rich, nutrient-dense meal plans that add lean weight without overloading your system.",
    bullets: ["Muscle-friendly nutrition", "Digestive support", "Custom meal charts"],
    img: weightGain,
    msg: "Hi Sujatha, I'm interested in the Weight Gain program.",
  },
  {
    title: "Skin Cleansing",
    tag: "From the Inside",
    desc: "Radiant skin begins in the gut. A cleansing diet protocol that reduces breakouts and restores natural glow — internally.",
    bullets: ["Detox nutrition", "Hydration protocol", "Anti-inflammatory foods"],
    img: skin,
    msg: "Hi Sujatha, I'm interested in the Skin Cleansing program.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Programs</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Three paths, <em className="italic gradient-text">one transformation.</em>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Each plan is crafted around your body, lifestyle and goals — no two plans are alike.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border/80 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-7">
                <div className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">
                  {s.tag}
                </div>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP(s.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition"
                >
                  Start this program
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};