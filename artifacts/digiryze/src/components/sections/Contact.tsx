import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, Mail, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Téléphone requis"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  project: z.string().min(10, "Veuillez décrire votre projet"),
});

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      project: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: values.firstName,
          nom: values.lastName,
          email: values.email,
          telephone: values.phone,
          service: values.service,
          projet: values.project,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "Demande envoyée !", description: "Nous vous recontacterons sous 2h." });
        form.reset();
      } else {
        throw new Error(data.error || "Erreur");
      }
    } catch {
      toast({ title: "Erreur d'envoi", description: "Veuillez réessayer ou nous appeler directement.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-14 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8 py-3 px-6 rounded-2xl bg-primary/10 border border-primary/20 max-w-2xl mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
          <p className="text-sm font-semibold text-primary text-center">
            ⚡ Seulement <strong>3 créneaux disponibles</strong> ce mois — Réservez votre place maintenant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">
              Prêt à <span className="text-primary">décoller ?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Demandez votre devis gratuit. Nous analysons votre besoin et vous répondons en moins de 2 heures.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Appelez-nous directement</p>
                  <p className="text-xl font-bold text-foreground">06 51 81 31 16</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:contact.digiryze@gmail.com" className="text-xl font-bold text-foreground hover:text-primary transition-colors" data-testid="link-email">contact.digiryze@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="text-xl font-bold text-foreground">Marseille & France entière</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Réactivité</p>
                  <p className="text-xl font-bold text-foreground">Délai de réponse sous 2h</p>
                </div>
              </div>
            </div>

            {/* Guarantee block */}
            <div className="mt-10 p-5 rounded-2xl bg-card border border-border flex items-start gap-4">
              <ShieldCheck size={28} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-foreground mb-1">Garantie satisfaction 30 jours</p>
                <p className="text-sm text-muted-foreground">Si vous n'êtes pas satisfait du rendu dans les 30 jours, nous corrigeons gratuitement. Aucun risque pour vous.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-3xl border border-border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Dupont" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="jean@exemple.com" type="email" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="06 00 00 00 00" type="tel" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service souhaité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="web">Site web</SelectItem>
                          <SelectItem value="web_seo">Site web + SEO</SelectItem>
                          <SelectItem value="web_ia_seo">Site web + IA + SEO</SelectItem>
                          <SelectItem value="seo">SEO uniquement</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre projet</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Décrivez votre besoin..." 
                          className="bg-background min-h-[120px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-bold glow-hover" disabled={isSubmitting} data-testid="contact-submit">
                  {isSubmitting ? "Envoi en cours..." : (
                    <>Envoyer la demande <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 Vos données sont confidentielles. Réponse garantie sous 2h.
                </p>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
