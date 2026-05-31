export function Marquee() {
  const items = [
    "Création de site web",
    "Référencement SEO",
    "Devis gratuit sous 24h",
    "Marseille & France entière",
    "Livraison 48h",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-primary py-4 overflow-hidden border-y border-primary/20 my-10">
      <div className="flex animate-marquee" style={{ width: "max-content" }}>
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-primary-foreground font-display font-bold text-xl uppercase whitespace-nowrap flex items-center"
            style={{ padding: "0 32px" }}
          >
            {item}
            <span className="ml-8 text-primary-foreground/40 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
