import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Nourish", "Cleanse", "Transform"];

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Rotate words every 900ms, stop at last
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => {
        if (i >= WORDS.length - 1) {
          clearInterval(id);
          return i;
        }
        return i + 1;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  // Counter 0 → 100 over 2.7s
  useEffect(() => {
    const DURATION = 2700;
    const start = performance.now();
    let raf = 0;
    let done = false;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        if (!done) {
          done = true;
          setTimeout(() => onCompleteRef.current?.(), 400);
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a]"
      style={{ color: "#f5f5f5" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background gradient instead of broken video */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Top-left label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs md:text-sm uppercase tracking-[0.3em] font-serif italic"
        style={{ color: "rgba(245,245,245,0.85)" }}
      >
        Sujatha's Wellness
      </motion.div>

      {/* Center rotating words */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="font-serif italic text-5xl md:text-7xl lg:text-8xl"
            style={{ color: "#ffffff", textShadow: "0 4px 24px rgba(0,0,0,0.45)" }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Skip button */}
      <motion.button
        type="button"
        onClick={() => onCompleteRef.current?.()}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-8 right-8 md:top-12 md:right-12 rounded-full px-4 py-2 text-xs md:text-sm font-sans font-medium uppercase tracking-[0.2em] border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-white"
      >
        Skip →
      </motion.button>

      {/* Bottom-right counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 font-sans font-black tabular-nums text-6xl md:text-8xl lg:text-9xl"
        style={{ color: "#ffffff", textShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
      >
        {Math.round(progress).toString().padStart(3, "0")}
      </motion.div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-[3px] w-full" style={{ backgroundColor: "rgba(31,31,31,0.5)" }}>
          <motion.div
            className="h-full origin-left"
            style={{
              background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
};