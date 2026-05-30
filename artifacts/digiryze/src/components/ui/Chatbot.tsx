import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  from: "bot" | "user";
  text: string;
};

const BOT_NAME = "Digiryze IA";

const QUICK_REPLIES = [
  "Vos tarifs ?",
  "Délai de livraison ?",
  "Comment vous contacter ?",
  "Quels services ?",
];

function getBotReply(input: string): string {
  const msg = input.toLowerCase();
  if (msg.includes("tarif") || msg.includes("prix") || msg.includes("coût") || msg.includes("combien")) {
    return "Nos tarifs s'adaptent à votre projet. Pour un devis personnalisé et gratuit, contactez-nous au 06 51 81 31 16 ou par email à contact.digiryze@gmail.com — réponse sous 2h !";
  }
  if (msg.includes("délai") || msg.includes("livraison") || msg.includes("48") || msg.includes("rapide") || msg.includes("vite")) {
    return "Nous livrons votre site en 48h chrono ⚡ Dès validation de votre brief, on s'y met immédiatement. Besoin urgent ? Appelez-nous au 06 51 81 31 16.";
  }
  if (msg.includes("contact") || msg.includes("appel") || msg.includes("joindre") || msg.includes("téléphone") || msg.includes("email")) {
    return "Vous pouvez nous joindre au 06 51 81 31 16 ou par email à contact.digiryze@gmail.com. On répond sous 2h en journée !";
  }
  if (msg.includes("service") || msg.includes("propos") || msg.includes("offre") || msg.includes("que faites")) {
    return "Nous proposons 3 services : \n• Création de site web (vitrine, landing page, médical…)\n• Référencement SEO (Google My Business, balises, annuaires)\n• Maintenance & suivi mensuel\n\nVous voulez en savoir plus sur l'un d'eux ?";
  }
  if (msg.includes("seo") || msg.includes("référencement") || msg.includes("google")) {
    return "Notre service SEO inclut l'optimisation Google My Business, les balises méta, les annuaires locaux et un suivi mensuel de votre positionnement. Vous apparaîtrez en tête de Google sur votre zone !";
  }
  if (msg.includes("site") || msg.includes("web") || msg.includes("création") || msg.includes("vitrine")) {
    return "On crée des sites vitrines, landing pages, sites médicaux ou commerciaux. Design sur mesure, 100% mobile-first, livré en 48h. Vous avez déjà un site à refondre ou c'est un nouveau projet ?";
  }
  if (msg.includes("marseille") || msg.includes("où") || msg.includes("localisation")) {
    return "Nous sommes basés à Marseille et intervenons dans toute la France ! Que vous soyez à Marseille ou ailleurs, on travaille 100% à distance avec la même réactivité.";
  }
  if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello") || msg.includes("bonsoir")) {
    return "Bonjour ! 👋 Je suis l'assistant Digiryze. Je peux répondre à vos questions sur nos services, tarifs ou délais. Comment puis-je vous aider ?";
  }
  if (msg.includes("merci") || msg.includes("super") || msg.includes("parfait") || msg.includes("ok")) {
    return "Avec plaisir ! Si vous avez d'autres questions, je suis là. Vous pouvez aussi nous appeler directement au 06 51 81 31 16 😊";
  }
  return "Je ne suis pas sûr de comprendre votre question. Vous pouvez nous contacter directement au 06 51 81 31 16 ou à contact.digiryze@gmail.com — on vous répond sous 2h !";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Bonjour ! 👋 Je suis l'assistant Digiryze. Comment puis-je vous aider ?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, typing]);

  function sendMessage(text: string) {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: "bot", text: getBotReply(text) }]);
    }, 900);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* Bubble toggle */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-chatbot-toggle"
        aria-label="Ouvrir le chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden"
            style={{ height: 440 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">{BOT_NAME}</p>
                <p className="text-xs opacity-80">Réponse instantanée</p>
              </div>
              <div className="ml-auto w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[82%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_REPLIES.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    data-testid={`button-quick-reply-${q}`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-border">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 bg-muted rounded-full px-4 py-2 text-sm outline-none text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-primary"
                data-testid="input-chatbot-message"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center disabled:opacity-40 transition-opacity"
                data-testid="button-chatbot-send"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
