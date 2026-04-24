import { Instagram, Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-5 md:px-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center font-serif text-lg">S</span>
            <span className="font-serif text-xl">Sujatha's Wellness Centre</span>
          </div>
          <p className="mt-2 text-sm text-background/60 max-w-sm">
            Personalised nutrition coaching for weight loss, weight gain and skin cleansing.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/919035605046" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/sujatha.murthy_coach?igsh=MTdlYnUzZnczdnN0ZA==" target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/share/1BTsAfeE55/" target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-8 pt-6 border-t border-background/10 text-xs text-background/50 flex flex-col sm:flex-row gap-2 justify-between">
        <div>© {new Date().getFullYear()} Sujatha's Wellness Centre. All rights reserved.</div>
        <div>Founded by Sujatha Murthy • Staff Nurse, 15+ years</div>
      </div>
    </footer>
  );
};