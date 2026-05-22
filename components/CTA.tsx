export default function CTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(/assets/images/background-main.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/85" />
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c8a84b]" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <p
          className="text-[#c8a84b] text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Emergência? Estamos Disponíveis Agora
        </p>
        <h2 className="section-title text-white mb-4">
          Porta com Problema?{" "}
          <span className="text-[#c8a84b]">Resolva Agora.</span>
        </h2>
        <p
          className="text-gray-400 mb-8 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Nossa equipe atende emergências 24 horas por dia, 7 dias por semana em toda a
          Grande São Paulo. Entre em contato agora e tenha uma solução rápida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5511977988716"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Falar no WhatsApp Agora
          </a>
          <a href="tel:+5511977988716" className="btn-outline inline-block">
            Ligar: (11) 97798-8716
          </a>
        </div>
      </div>
    </section>
  );
}
