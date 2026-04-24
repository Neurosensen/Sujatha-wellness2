import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    name: "Priya R.",
    result: "Lost 11 kg in 4 months",
    text: "Sujatha Ma'am changed my relationship with food. No hunger, no gym — just the right meals at the right time. I feel lighter and more confident than I have in years.",
  },
  {
    name: "Ramesh K.",
    result: "Gained 6 kg of healthy weight",
    text: "I was underweight for years and nothing worked. Her nutrition plan helped me gain healthy weight without bloating. My energy levels are incredible now.",
  },
  {
    name: "Anita S.",
    result: "Cleared acne in 8 weeks",
    text: "My skin glow came back after years. The cleansing program is gentle, practical and truly works. Highly recommend to anyone struggling with breakouts.",
  },
  {
    name: "Deepa M.",
    result: "Lost 7 kg post-pregnancy",
    text: "As a new mom, I thought it was impossible. Sujatha built a plan that fit my breastfeeding schedule. She's patient, caring and genuinely invested.",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Real Stories</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            Transformations that <em className="italic text-accent">speak for themselves.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl bg-primary-foreground/5 border border-primary-foreground/10 p-6 md:p-7 backdrop-blur-sm"
            >
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-3 text-primary-foreground/90 leading-relaxed">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-primary-foreground/10 pt-4">
                <div>
                  <div className="font-serif text-lg">{t.name}</div>
                  <div className="text-xs text-primary-foreground/60">Verified client</div>
                </div>
                <span className="text-xs font-semibold text-accent">{t.result}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};