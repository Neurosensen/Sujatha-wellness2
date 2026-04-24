import { motion } from "framer-motion";
import { Apple, Dumbbell, Flame, HeartPulse, Clock, Sparkles } from "lucide-react";

const stats = [
  { pct: "80%", label: "of results come from what you eat", icon: Apple },
  { pct: "20%", label: "is contributed by exercise alone", icon: Dumbbell },
  { pct: "3,500", label: "calories = 1 lb — far easier to manage through food", icon: Flame },
];

const reasons = [
  {
    icon: HeartPulse,
    title: "Nutrition drives your biology",
    body: "Every cell, hormone and organ is rebuilt from the food you eat. Exercise can't replace nutrients your body never received.",
  },
  {
    icon: Clock,
    title: "Time-efficient & sustainable",
    body: "1 hour of intense exercise burns ~500 kcal. Skipping one sugary meal saves the same — without the sweat.",
  },
  {
    icon: Sparkles,
    title: "Results you can feel",
    body: "Clearer skin, better sleep, stable energy and a lighter frame — changes most people notice within 2–4 weeks of eating right.",
  },
];

export const WhyDiet = () => {
  return (
    <section id="why-diet" className="relative py-20 md:py-28 px-5 md:px-8 bg-secondary/60">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">The Science</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
              You <em className="italic gradient-text">cannot</em> out-train a poor diet.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              Most people spend hours chasing results in the gym when the real lever is on their plate. Our programs work with your food — not against it — so you see changes that actually last.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.pct}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl bg-card border border-border p-4 text-center"
                >
                  <s.icon className="h-5 w-5 text-accent mx-auto" strokeWidth={1.75} />
                  <div className="mt-2 font-serif text-2xl md:text-3xl text-foreground">{s.pct}</div>
                  <div className="mt-1 text-[11px] md:text-xs text-muted-foreground leading-snug">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-3xl bg-card border border-border p-5 md:p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="h-11 w-11 shrink-0 rounded-2xl bg-secondary flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive compare strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-foreground">Diet vs Workout — a simple day</h3>
          <div className="mt-5 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary/70 p-5">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <Apple className="h-4 w-4" /> Better Diet
              </div>
              <div className="mt-3 space-y-2">
                <Bar label="Skipped one sugary drink" value="-250 kcal" width={45} color="accent" />
                <Bar label="Swapped fries for salad" value="-300 kcal" width={55} color="accent" />
                <Bar label="Controlled portion dinner" value="-400 kcal" width={70} color="accent" />
              </div>
              <div className="mt-3 text-sm text-foreground font-semibold">Total: −950 kcal • 5 minutes of effort</div>
            </div>
            <div className="rounded-2xl bg-secondary/70 p-5">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <Dumbbell className="h-4 w-4" /> Workout Only
              </div>
              <div className="mt-3 space-y-2">
                <Bar label="30 min brisk walk" value="-150 kcal" width={25} color="primary" />
                <Bar label="45 min cardio" value="-350 kcal" width={50} color="primary" />
                <Bar label="1 hour strength training" value="-400 kcal" width={55} color="primary" />
              </div>
              <div className="mt-3 text-sm text-foreground font-semibold">Total: −900 kcal • 2h 15m of effort</div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Food gives you leverage. We design your plate so the results compound — effortlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Bar = ({
  label,
  value,
  width,
  color,
}: {
  label: string;
  value: string;
  width: number;
  color: "primary" | "accent";
}) => (
  <div>
    <div className="flex items-center justify-between text-xs text-foreground/80">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
    <div className="mt-1 h-2 rounded-full bg-background overflow-hidden">
      <div
        className={`h-full rounded-full ${color === "accent" ? "bg-accent" : "bg-primary"}`}
        style={{ width: `${width}%` }}
      />
    </div>
  </div>
);