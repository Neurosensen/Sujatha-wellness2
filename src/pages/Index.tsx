import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyDiet } from "@/components/sections/WhyDiet";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Services />
    <WhyDiet />
    <About />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
    <FloatingWhatsApp />
  </main>
);

export default Index;
