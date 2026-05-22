"use client";

const partners = [
  { name: "BMG", img: "/assets/partners/bmg.png" },
  { name: "Kalunga", img: "/assets/partners/kalunga.png" },
  { name: "Lojas Mel", img: "/assets/partners/lojasmel.png" },
  { name: "Mercantil", img: "/assets/partners/mercantil.png" },
  { name: "Pernambucanas", img: "/assets/partners/pernambucanas.png" },
  { name: "Petz", img: "/assets/partners/petz.png" },
  { name: "Poupatempo", img: "/assets/partners/poupatempo.png" },
  { name: "Sumire", img: "/assets/partners/sumire.png" },
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section id="parceiros" className="py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 mb-10">
        <p
          className="text-[#c8a84b] text-xs tracking-widest uppercase mb-3"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Confiança comprovada
        </p>
        <h2 className="section-title text-white">
          Empresas que <span className="text-[#c8a84b]">Confiam</span> em Nós
        </h2>
        <div className="divider-gold" />
        <p
          className="text-gray-400 max-w-xl"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Grandes marcas escolheram a Kaiser para garantir segurança e qualidade nas
          suas unidades.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center justify-center bg-[#111] border border-white/5 px-8 py-6 min-w-[160px] shrink-0 hover:border-[#c8a84b]/30 transition-colors"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
