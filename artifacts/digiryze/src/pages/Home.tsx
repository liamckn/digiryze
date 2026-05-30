import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { WhyDigiryze } from "@/components/sections/WhyDigiryze";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Chatbot } from "@/components/ui/Chatbot";

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground dark">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyDigiryze />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
