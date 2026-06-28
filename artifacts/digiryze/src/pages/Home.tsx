import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CustomCursor } from "@/components/ui/CustomCursor";

// Lazy-load everything below the fold
const Marquee = lazy(() => import("@/components/sections/Marquee").then(m => ({ default: m.Marquee })));
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const Pricing = lazy(() => import("@/components/sections/Pricing").then(m => ({ default: m.Pricing })));
const WhyDigiryze = lazy(() => import("@/components/sections/WhyDigiryze").then(m => ({ default: m.WhyDigiryze })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const FAQ = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));
const Chatbot = lazy(() => import("@/components/ui/Chatbot").then(m => ({ default: m.Chatbot })));

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground dark">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Marquee />
          <Services />
          <Pricing />
          <WhyDigiryze />
          <Process />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}
