import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Méthode", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 font-display text-2xl font-bold tracking-tighter z-50" data-testid="nav-logo">
          <span className="text-foreground">DIGI</span>
          <span className="text-primary">RYZE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="rounded-full px-6 font-semibold" data-testid="nav-cta">
            <a href="#contact">Démarrer →</a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="rounded-full px-8 py-6 text-lg mt-4" data-testid="nav-mobile-cta">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Démarrer →
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
