import { motion } from "framer-motion";

export function Process() {
  const steps = [
    { num: "01", title: "Échange gratuit", desc: "On discute de votre projet. Devis sous 24h." },
    { num: "02", title: "Création", desc: "Site sur mesure avec vos couleurs, textes et photos." },
    { num: "03", title: "Livraison", desc: "Votre site en ligne en 48h chrono." },
    { num: "04", title: "Suivi SEO", desc: "Référencement Google et suivi mensuel." }
  ];

  return (
    <section id="process" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight text-center mb-16">
          La <span className="text-stroke opacity-70">Méthode</span> <span className="text-primary">Digiryze</span>
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-background p-6 rounded-2xl border border-border text-center z-10"
              >
                <div className="w-16 h-16 mx-auto bg-primary text-primary-foreground font-display font-bold text-2xl rounded-full flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
