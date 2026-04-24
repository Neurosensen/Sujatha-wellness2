import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need to go to a gym or do heavy workouts?",
    a: "Not at all. Our programs are designed around nutrition. Light daily activity like a 20–30 minute walk is encouraged, but no gym membership or equipment is required.",
  },
  {
    q: "How is the plan personalised for me?",
    a: "We begin with a detailed consultation covering your medical history, lifestyle, sleep, work hours, food preferences and goals. Sujatha then builds a plan unique to your body and schedule.",
  },
  {
    q: "How soon will I see results?",
    a: "Most clients begin noticing changes — better energy, clearer skin, lighter body — within 2 to 4 weeks. Visible weight changes typically follow between week 4 and week 8.",
  },
  {
    q: "Is the food expensive or hard to prepare?",
    a: "No. Our meal charts use everyday Indian ingredients. Most meals take 15–20 minutes to prepare and fit comfortably into a family kitchen.",
  },
  {
    q: "Will I be supported during the program?",
    a: "Yes. Every client gets daily WhatsApp support, weekly check-ins with Sujatha, and adjustments to the plan as your body responds.",
  },
  {
    q: "Is this safe for people with medical conditions?",
    a: "With 15+ years of clinical nursing experience, Sujatha tailors every plan carefully. Conditions like diabetes, thyroid or PCOS are considered from day one. Always share your medical history during consultation.",
  },
];

export const FAQ = () => {
  return (
    <section className="relative py-20 md:py-28 px-5 md:px-8 bg-secondary/50">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">FAQs</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            Your questions, <em className="italic gradient-text">answered.</em>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl bg-card border border-border px-5 md:px-6 shadow-[var(--shadow-soft)]"
            >
              <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};