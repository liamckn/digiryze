import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Site vitrine sur mesure",
  "Design premium mobile-first",
  "Livraison en 48h chrono",
  "Hébergement 1 an offert",
  "Formulaire de contact",
  "Référencement SEO on-page",
  "Google My Business optimisé",
  "Suivi de positionnement mensuel",
  "Support réactif",
  "Sans engagement SEO",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Une offre <span className="text-primary">complète</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Site web + référencement SEO. Tout inclus, sans surprise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto relative rounded-3xl border border-primary/50 bg-primary/5 p-10 shadow-[0_0_60px_rgba(0,255,136,0.08)]"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap">
            ⭐ Offre tout inclus
          </div>

          {/* Pricing display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 pt-2">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Création du site</p>
              <div className="flex items-end justify-center gap-0.5">
                <span className="text-5xl font-display font-bold text-foreground">299</span>
                <span className="text-2xl font-display font-bold text-foreground mb-0.5">,99€</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">paiement unique</p>
            </div>

            <div className="text-3xl font-display text-muted-foreground/40 hidden sm:block">+</div>
            <div className="text-2xl font-display text-muted-foreground/40 sm:hidden">+</div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Référencement SEO</p>
              <div className="flex items-end justify-center gap-0.5">
                <span className="text-5xl font-display font-bold text-primary">50€</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">par mois</p>
            </div>
          </div>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-sm">
                <Check size={15} className="text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feat}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="w-full rounded-full font-bold shadow-[0_0_20px_rgba(0,255,136,0.2)]">
            <a href="#contact">
              <Zap size={16} className="mr-2" />
              Démarrer maintenant
            </a>
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4">
            ✓ Devis gratuit sous 24h &nbsp;·&nbsp; ✓ Sans engagement &nbsp;·&nbsp; ✓ Satisfaction garantie
          </p>
        </motion.div>
      </div>
    </section>
  );
}
