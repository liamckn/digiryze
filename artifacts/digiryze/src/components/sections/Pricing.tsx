import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essentiel",
    tagline: "Pour démarrer vite",
    price: "490",
    unit: "une fois",
    highlight: false,
    badge: null,
    features: [
      "Site vitrine 3 pages",
      "Design sur mesure",
      "100% Mobile-first",
      "Livraison en 48h",
      "Hébergement 1 an offert",
      "1 mois de support inclus",
    ],
  },
  {
    name: "Pro",
    tagline: "Le plus populaire",
    price: "890",
    unit: "une fois",
    highlight: true,
    badge: "⭐ Recommandé",
    features: [
      "Site web jusqu'à 8 pages",
      "Design premium sur mesure",
      "SEO on-page complet",
      "Google My Business optimisé",
      "Livraison en 48h",
      "3 mois de suivi SEO offerts",
    ],
  },
  {
    name: "Premium",
    tagline: "Croissance continue",
    price: "199",
    unit: "/ mois",
    highlight: false,
    badge: null,
    features: [
      "Site web illimité",
      "SEO mensuel avancé",
      "Maintenance & mises à jour",
      "Rapports de performance",
      "Support prioritaire",
      "Sans engagement",
    ],
  },
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-4">
            <Star size={14} />
            <span>Tarifs transparents</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Des offres <span className="text-primary">claires</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Aucune mauvaise surprise. Vous savez exactement ce que vous obtenez — et ce que ça coûte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.highlight
                  ? "bg-primary/10 border-primary/50 shadow-[0_0_40px_rgba(0,255,136,0.1)]"
                  : "bg-card border-border"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm text-muted-foreground mb-1">{plan.tagline}</p>
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-display font-bold text-foreground">{plan.price}€</span>
                  <span className="text-muted-foreground mb-1">{plan.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlight ? "default" : "outline"}
                className={`w-full rounded-full font-semibold ${plan.highlight ? "shadow-[0_0_20px_rgba(0,255,136,0.2)]" : ""}`}
              >
                <a href="#contact">
                  <Zap size={16} className="mr-2" />
                  Démarrer maintenant
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          ✓ Devis gratuit sous 24h &nbsp;·&nbsp; ✓ Aucun engagement &nbsp;·&nbsp; ✓ Satisfaction garantie
        </motion.p>
      </div>
    </section>
  );
}
