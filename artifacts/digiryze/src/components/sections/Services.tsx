import { motion } from "framer-motion";
import { MonitorSmartphone, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Création de site web",
      description: "Site vitrine, landing page, site médical ou commercial. Design sur mesure, mobile-first, livré en 48h.",
      badge: "Livraison 48h",
    },
    {
      icon: Search,
      title: "Référencement SEO",
      description: "Optimisation Google My Business, balises SEO, annuaires locaux. Apparaissez en premier sur Google.",
      badge: "Résultats en 30 jours",
    },
  ];

  return (
    <section id="services" className="py-14 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-foreground mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            L'arsenal complet pour dominer votre marché local. Des solutions techniques de pointe pensées pour la conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-3xl bg-card border border-border overflow-hidden glow-hover transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:bg-primary/15" />
              
              <div className="flex items-start justify-between mb-6 relative z-10">
                <service.icon className="w-12 h-12 text-primary" />
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground relative z-10 mb-6">{service.description}</p>
              <div className="flex items-center justify-end relative z-10">
                <Button asChild variant="ghost" size="sm" className="text-muted-foreground hover:text-primary group-hover:text-primary transition-colors">
                  <a href="#contact">
                    Démarrer <ArrowRight size={16} className="ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 py-6 px-8 rounded-2xl bg-card/50 border border-border/50"
        >
          {[
            "✓ Devis gratuit sous 24h",
            "✓ Satisfaction garantie",
            "✓ Aucun abonnement caché",
            "✓ Support réactif 7j/7",
          ].map((item) => (
            <span key={item} className="text-sm font-medium text-muted-foreground">{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
