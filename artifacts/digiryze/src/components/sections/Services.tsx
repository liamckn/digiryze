import { motion } from "framer-motion";
import { MonitorSmartphone, Search } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Création de site web",
      description: "Site vitrine, landing page, site médical ou commercial. Design sur mesure, mobile-first, livré en 48h."
    },
    {
      icon: Search,
      title: "Référencement SEO",
      description: "Optimisation Google My Business, balises SEO, annuaires locaux. Apparaissez en premier sur Google."
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-foreground mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            L'arsenal complet pour dominer votre marché local. Des solutions techniques de pointe pensées pour la conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:bg-primary/20" />
              
              <service.icon className="w-12 h-12 text-primary mb-6 relative z-10" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4 relative z-10">{service.title}</h3>
              <p className="text-muted-foreground relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
