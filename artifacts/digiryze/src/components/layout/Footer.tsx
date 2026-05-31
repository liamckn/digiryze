import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="flex items-center gap-1 font-display text-2xl font-bold tracking-tighter">
            <span className="text-foreground">DIGI</span>
            <span className="text-primary">RYZE</span>
          </a>
          <p className="text-muted-foreground text-sm">Agence Web & SEO Marseille</p>
        </div>

        <div className="flex items-center gap-2 text-foreground font-bold">
          <Phone size={18} className="text-primary" />
          <span>06 51 81 31 16</span>
        </div>

        <div className="text-sm text-muted-foreground">
          © 2026 Digiryze — Tous droits réservés.
        </div>
      </div>
      
      {/* Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a 
          href="tel:0651813116" 
          className="flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-transform active:scale-95"
          data-testid="fab-call"
        >
          <Phone size={24} />
        </a>
      </div>
    </footer>
  );
}
