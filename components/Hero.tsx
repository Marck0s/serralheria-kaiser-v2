"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/background-main.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay — mais leve para deixar a foto aparecer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85" />
        {/* Vinheta radial: escurece o centro atrás da mensagem sem esconder a foto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 58% at 50% 45%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 70%, transparent 100%)",
          }}
        />
        {/* Gold accent line bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#c8a84b] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 border border-[#c8a84b]/50 px-4 py-1.5 text-[#c8a84b] text-xs tracking-widest uppercase mb-6 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"
            }`}
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] inline-block" />
          Atendimento Emergencial 24h
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b] inline-block" />
        </div>

        {/* Headline */}
        <h1
          className={`section-title text-white mb-4 transition-all duration-700 delay-100 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ lineHeight: "1.08", textShadow: "0 2px 28px rgba(0,0,0,0.55)" }}
        >
          Segurança e Resistência
          <br />
          <span className="text-[#c8a84b]">em Aço e Ferro</span>
        </h1>

        {/* Sub */}
        <p
          className={`text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          style={{ fontFamily: "var(--font-inter)", fontWeight: 300, textShadow: "0 1px 16px rgba(0,0,0,0.6)" }}
        >
          Fabricação, instalação e manutenção de portas de aço automáticas e manuais,
          portões e estruturas metálicas para toda a Grande São Paulo.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="https://wa.me/5511977988716"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Solicitar Orçamento Grátis
          </a>
          <a href="#servicos" className="btn-outline inline-block">
            Nossos Serviços
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-14 grid grid-cols-3 gap-4 max-w-2xl mx-auto transition-all duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"
            }`}
        >
          {[
            { n: "+10", label: "Anos de Experiência" },
            { n: "+2000", label: "Projetos Realizados" },
            { n: "24h", label: "Atendimento Emergencial" },
          ].map((s) => (
            <div key={s.n} className="border-l border-[#c8a84b]/30 pl-4 text-left">
              <div
                className="text-2xl md:text-3xl font-bold text-[#c8a84b]"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {s.n}
              </div>
              <div
                className="text-xs text-gray-400 mt-0.5 leading-tight"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-[#c8a84b] transition-colors animate-bounce"
        aria-label="Ver serviços"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
