import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

export function WhyDigiryze() {
  const stats = [
    { value: "48H", label: "Livraison Record", icon: Zap },
    { value: "100%", label: "Clients Satisfaits", icon: Users },
    { value: "N°1", label: "Objectif Google", icon: TrendingUp },
  ];

  const differentiators = [
    "Design sur mesure ultra-rapide et optimisé pour la conversion.",
    "SEO technique intégré dès la conception, pas après coup.",
    "Support réactif basé à Marseille, toujours disponible.",
    "Technologies modernes pour des sites rapides, durables et sécurisés."
  ];

  return (
    <section className="py-14 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Stats Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border border-border p-8 rounded-3xl ${i === 2 ? 'sm:col-span-2' : ''} glow-hover transition-all`}
              >
                <stat.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-5xl font-display font-bold text-foreground mb-2">{stat.value}</h4>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Text Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">
                Pourquoi choisir <span className="text-primary">Digiryze ?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Parce que vous n'avez pas de temps à perdre. Nous concevons des machines à vendre, conçues pour dominer les résultats de recherche locaux et convertir vos visiteurs en clients.
              </p>

              <ul className="space-y-4">
                {differentiators.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
