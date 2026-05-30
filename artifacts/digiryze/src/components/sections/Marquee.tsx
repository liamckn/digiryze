export function Marquee() {
  const items = [
    "Création de site web",
    "Référencement SEO",
    "Devis gratuit sous 24h",
    "Marseille & France entière",
    "Livraison 48h"
  ];

  return (
    <div className="w-full bg-primary py-4 overflow-hidden flex items-center border-y border-primary/20 rotate-[-1deg] scale-105 origin-center my-10">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around items-center">
          {items.map((item, i) => (
            <span key={i} className="text-primary-foreground font-display font-bold text-xl uppercase whitespace-nowrap px-4 flex items-center gap-4">
              {item} <span className="text-primary-foreground/50 text-2xl">•</span>
            </span>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center">
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="text-primary-foreground font-display font-bold text-xl uppercase whitespace-nowrap px-4 flex items-center gap-4">
              {item} <span className="text-primary-foreground/50 text-2xl">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
