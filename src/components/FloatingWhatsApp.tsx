import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919035605046?text=Hi%20Sujatha%2C%20I%27d%20like%20to%20know%20more%20about%20your%20wellness%20programs."
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] flex items-center justify-center hover:scale-105 transition-transform animate-float-slow"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent animate-pulse" />
  </a>
);