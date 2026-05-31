import { motion } from "framer-motion";
import { Mail, Rocket, Clock, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Hero() {
  return (
    <section className="relative min-h-[85dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <Rocket size={16} />
            <span>Agence Web & SEO — Marseille</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tighter mb-6 uppercase">
            <span className="block text-stroke opacity-40">VOTRE SITE EN</span>
            <span className="block text-primary drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">48 HEURES</span>
            <span className="block">CHRONO.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Digiryze propulse votre activité locale. Conception sur mesure et référencement ultra-optimisé. On livre vite, on livre bien.
          </p>

          {/* Urgency bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-semibold mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            ⚡ Seulement 3 créneaux disponibles ce mois — places limitées
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto hover:text-primary hover:bg-transparent" asChild data-testid="hero-cta-phone">
              <a href="tel:0651813116">
                06 51 81 31 16 →
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto hover:text-primary hover:bg-transparent" asChild data-testid="hero-cta-email">
              <a href="mailto:contact.digiryze@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> contact.digiryze@gmail.com
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          {[
            { icon: Clock, title: "48H Livraison", desc: "Mise en ligne éclair" },
            { icon: ShieldCheck, title: "100% Satisfaction", desc: "Design sur mesure" },
            { icon: Zap, title: "Réponse 2H", desc: "Support réactif" }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 bg-card/60 backdrop-blur-sm border border-border/50 p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <stat.icon size={24} />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">{stat.title}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
