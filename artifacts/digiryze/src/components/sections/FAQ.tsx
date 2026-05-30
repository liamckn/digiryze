import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      question: "Comment est-il possible de livrer en 48h ?",
      answer: "Grâce à notre expertise technique et nos processus optimisés, nous commençons à travailler dès la validation de votre cahier des charges. Nous utilisons les meilleures technologies pour coder vite et sans erreur."
    },
    {
      question: "Le référencement SEO est-il inclus ?",
      answer: "Oui, tous nos sites intègrent une base SEO solide (balises, structure, vitesse). Pour dominer Google, nous proposons également des forfaits SEO avancés mensuels (Google My Business, netlinking, création de contenu)."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs s'adaptent à vos besoins. De la landing page express au site e-commerce complexe avec SEO et IA. Demandez un devis gratuit, nous vous répondons sous 2h avec une proposition claire et sans surprise."
    }
  ];

  return (
    <section className="py-24 bg-card relative border-y border-border">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
            Questions <span className="text-stroke opacity-70">Fréquentes</span>
          </h2>
          <p className="text-muted-foreground">Tout ce que vous devez savoir avant de décoller.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border px-2">
                <AccordionTrigger className="text-left font-bold hover:text-primary hover:no-underline text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
