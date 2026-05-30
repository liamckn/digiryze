import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Gérante — Institut de beauté",
    city: "Marseille 8e",
    rating: 5,
    text: "Site livré en moins de 48h, exactement ce que je voulais. Depuis, j'ai multiplié mes réservations en ligne par 3. Je recommande à 100% !"
  },
  {
    name: "Karim B.",
    role: "Plombier indépendant",
    city: "Aix-en-Provence",
    rating: 5,
    text: "Je cherchais une agence réactive et sérieuse. Digiryze a créé mon site et m'a référencé sur Google My Business en une semaine. Maintenant j'apparais en premier sur Aix."
  },
  {
    name: "Laura D.",
    role: "Ostéopathe",
    city: "Marseille 13e",
    rating: 5,
    text: "Professionnels, rapides et à l'écoute. Mon site est moderne, mobile et bien référencé. J'avais peur que ce soit compliqué — ils ont tout géré."
  },
  {
    name: "Youssef A.",
    role: "Restaurateur",
    city: "Marseille 1er",
    rating: 5,
    text: "Mon ancienne agence prenait 3 semaines pour un simple changement. Digiryze livre en 48h et répond le jour même. C'est le jour et la nuit."
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-bold tracking-[4px] uppercase mb-4">— Témoignages</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Des entrepreneurs, artisans et indépendants qui ont choisi Digiryze pour se développer en ligne.
          </p>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 mb-12 p-5 rounded-2xl bg-card border border-border w-fit"
        >
          <div className="text-center px-4 border-r border-border">
            <p className="text-4xl font-display font-bold text-primary">5.0</p>
            <div className="flex gap-0.5 mt-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
          </div>
          <div>
            <p className="font-bold text-foreground">Note parfaite</p>
            <p className="text-sm text-muted-foreground">Basé sur tous nos avis Google</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
              data-testid={`card-testimonial-${i}`}
            >
              <Quote size={24} className="text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role} · {t.city}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
