import { CheckCircle } from "lucide-react";

const bullets = [
  "Fundada em 2016 com foco em qualidade e durabilidade",
  "Peças 100% originais com garantia de fábrica",
  "Técnicos treinados e com mais de 5 anos de experiência",
  "Atendemos residências, comércios e indústrias",
  "Orçamento sem compromisso e visita técnica gratuita",
  "Nota fiscal em todos os serviços prestados",
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/assets/images/background-whoiskaiser.png"
                alt="Equipe Serralheria Kaiser"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
            </div>
            {/* Badge flutuante */}
            <div className="absolute -bottom-5 -right-5 bg-[#c8a84b] text-black p-6 w-36 h-36 flex flex-col items-center justify-center text-center shadow-2xl">
              <span
                className="text-4xl font-bold leading-none"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                +10
              </span>
              <span
                className="text-xs font-semibold mt-1 leading-tight"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                anos no mercado
              </span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p
              className="text-[#c8a84b] text-xs tracking-widest uppercase mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Nossa História
            </p>
            <h2 className="section-title text-white mb-1">
              Quem é a <span className="text-[#c8a84b]">Kaiser?</span>
            </h2>
            <div className="divider-gold" />

            <p
              className="text-gray-400 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fundada em 2016, a <strong className="text-white">Portas de Aço e Serralheria Kaiser</strong> nasceu
              com um propósito claro: entregar segurança, resistência e qualidade para cada cliente
              da Grande São Paulo.
            </p>
            <p
              className="text-gray-400 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ao longo de uma década, construímos uma reputação sólida atendendo desde pequenos
              comércios até grandes redes varejistas. Trabalhamos exclusivamente com peças originais
              e garantimos suporte técnico emergencial 24 horas por dia, todos os dias do ano.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="text-[#c8a84b] shrink-0 mt-0.5" size={18} />
                  <span
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5511977988716"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
