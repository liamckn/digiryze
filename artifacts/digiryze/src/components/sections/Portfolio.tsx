import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Beauté Éclat",
    category: "Institut de beauté",
    tags: ["Site vitrine", "SEO local"],
    color: "from-pink-500/20 to-rose-600/10",
    accent: "#f472b6",
    description: "Landing page épurée avec prise de RDV en ligne. +200% de réservations en 3 mois."
  },
  {
    name: "Plomberie Benali",
    category: "Artisan plombier",
    tags: ["Site vitrine", "Google My Business"],
    color: "from-blue-500/20 to-cyan-600/10",
    accent: "#60a5fa",
    description: "Site mobile-first avec formulaire de devis urgent. Positionné #1 sur Aix-en-Provence."
  },
  {
    name: "Dr. Fontaine",
    category: "Ostéopathe",
    tags: ["Site médical", "SEO", "Agenda"],
    color: "from-emerald-500/20 to-teal-600/10",
    accent: "#34d399",
    description: "Site professionnel RGPD-compliant avec agenda Doctolib intégré."
  },
  {
    name: "Le Vieux Port",
    category: "Restaurant gastronomique",
    tags: ["Site vitrine", "Réservation"],
    color: "from-orange-500/20 to-amber-600/10",
    accent: "#fb923c",
    description: "Design immersif avec photos plein écran, menu interactif et réservation directe."
  },
  {
    name: "FitCoach Céline",
    category: "Coach sportif",
    tags: ["Landing page", "SEO régional"],
    color: "from-violet-500/20 to-purple-600/10",
    accent: "#a78bfa",
    description: "Page de vente optimisée pour les programmes en ligne. Taux de conversion x4."
  },
  {
    name: "Elec Pro 06",
    category: "Électricien",
    tags: ["Site vitrine", "Urgences 24h"],
    color: "from-yellow-500/20 to-orange-600/10",
    accent: "#facc15",
    description: "Site avec CTA urgence visible, devis rapide et fiche Google optimisée."
  }
];

export function Portfolio() {
  return (
    <section className="py-24 bg-card relative border-y border-border overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-primary text-sm font-bold tracking-[4px] uppercase mb-4">— Réalisations</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">
            Nos derniers <span className="text-stroke opacity-60">projets</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            De l'artisan local au cabinet médical — chaque site est conçu pour convertir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-background overflow-hidden cursor-pointer"
              data-testid={`card-portfolio-${i}`}
            >
              {/* Visual preview area */}
              <div className={`relative h-48 bg-gradient-to-br ${p.color} flex items-center justify-center overflow-hidden`}>
                {/* Browser mockup */}
                <div className="w-4/5 bg-card/80 backdrop-blur rounded-t-lg border border-white/10 shadow-xl">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                    <span className="w-2 h-2 rounded-full bg-red-400/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <span className="w-2 h-2 rounded-full bg-green-400/60" />
                    <div className="flex-1 mx-2 h-3 bg-white/5 rounded-full" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-3 rounded-full w-3/4" style={{ background: `${p.accent}40` }} />
                    <div className="h-2 rounded-full w-full bg-white/5" />
                    <div className="h-2 rounded-full w-2/3 bg-white/5" />
                    <div className="mt-3 h-6 rounded-lg w-1/3" style={{ background: `${p.accent}60` }} />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Votre secteur n'est pas listé ?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">Contactez-nous</a>
            {" "}— on intervient dans tous les domaines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
