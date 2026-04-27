import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BlurText } from "@/components/BlurText";
import heroImg from "@/assets/hero-bg-2.jpg";

const WHATSAPP = "https://wa.me/919035605046?text=Hi%20Sujatha%2C%20I%27d%20like%20to%20know%20more%20about%20your%20wellness%20programs.";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pt-28 pb-20 text-center" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.35)' }}>
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-4 py-1.5 text-xs md:text-sm text-primary-foreground/95 inline-flex items-center gap-2"
        >
          <Sparkles className="h-3.5 w-3.5" />
          15+ years of nursing experience • Trusted by 99+ clients
        </motion.div>

        <h1 className="mt-6 max-w-4xl font-serif text-primary-foreground text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
          <BlurText text="Transform your health," />
          <br className="hidden sm:block" />
          <em className="italic text-accent">
            <BlurText text="one meal at a time." delay={0.4} />
          </em>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/85 leading-relaxed"
        >
          Personalised nutrition programs for weight loss, healthy weight gain and clearer skin — designed by Sujatha Murthy, Staff Nurse with over 15 years of clinical experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md sm:max-w-none sm:w-auto"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-primary px-6 py-3.5 text-sm font-semibold hover:bg-primary-foreground/90 transition shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]"
          >
            Book a Free Consult
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full liquid-glass text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-white/15 transition"
          >
            Explore Programs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex items-center gap-5 text-xs text-primary-foreground/75"
        >
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border-2 border-background/40"
                style={{
                  background: `linear-gradient(135deg, hsl(${20 + i * 30} 55% 60%), hsl(${140 + i * 20} 40% 45%))`,
                }}
              />
            ))}
          </div>
          <span>★ ★ ★ ★ ★ &nbsp;Rated 4.9 from 99+ reviews</span>
        </motion.div>
      </div>
    </section>
  );
};