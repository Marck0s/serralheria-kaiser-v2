const stats = [
  { n: "+2000", label: "Projetos Concluídos" },
  { n: "+10", label: "Anos de Mercado" },
  { n: "24h", label: "Suporte Emergencial" },
  { n: "4.8★", label: "Avaliação no Google" },
];

export default function Stats() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(/assets/images/background-main.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.n} className="text-center">
              <div className="stat-number mb-2">{s.n}</div>
              <div
                className="text-gray-400 text-sm tracking-wide uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
