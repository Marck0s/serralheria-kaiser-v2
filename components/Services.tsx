import { Shield, Wrench, Layers, Clock, Star, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Portas Sob Medida",
    desc: "Fabricamos e instalamos portas de enrolar automáticas e manuais personalizadas para residências, comércios e indústrias com máxima precisão.",
    img: "/assets/images/sobmedida.png",
    tag: "Mais Procurado",
  },
  {
    icon: Wrench,
    title: "Manutenção e Reparos",
    desc: "Conserto rápido e manutenção preventiva com garantia. Diagnóstico imediato e peças originais para prolongar a vida útil do seu equipamento.",
    img: "/assets/images/manutencao.png",
    tag: "Atendimento 24h",
  },
  {
    icon: Layers,
    title: "Serralheria Geral",
    desc: "Grades de segurança, portões metálicos, estruturas sob medida e corrimãos. Soluções completas em ferro e aço para sua propriedade.",
    img: "/assets/images/serralheria.png",
    tag: "Personalizado",
  },
];

const extras = [
  { icon: Clock, text: "Atendimento Emergencial 24h" },
  { icon: Shield, text: "Garantia em todos os serviços" },
  { icon: Star, text: "Peças 100% originais" },
  { icon: Wrench, text: "Equipe técnica certificada" },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-[#c8a84b] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            O Que Fazemos
          </p>
          <h2 className="section-title text-white">
            Nossos <span className="text-[#c8a84b]">Serviços</span>
          </h2>
          <div className="divider-gold" />
          <p
            className="text-gray-400 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Da fabricação à manutenção, oferecemos soluções completas em aço e ferro para
            proteger e valorizar seu patrimônio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s) => (
            <div key={s.title} className="card-service group">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="service-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span
                  className="absolute top-3 right-3 bg-[#c8a84b] text-black text-xs font-bold px-2.5 py-1 tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {s.tag}
                </span>
                <s.icon
                  className="absolute bottom-4 left-4 text-[#c8a84b]"
                  size={28}
                />
              </div>
              {/* Body */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-white mb-2 tracking-wide"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-gray-400 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {s.desc}
                </p>
                <a
                  href="https://wa.me/5511977988716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#c8a84b] text-sm font-medium group-hover:gap-3 transition-all"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Solicitar Orçamento <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Extra features row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {extras.map((e) => (
            <div
              key={e.text}
              className="flex items-center gap-3 bg-[#111] border border-white/5 px-4 py-4"
            >
              <e.icon className="text-[#c8a84b] shrink-0" size={20} />
              <span
                className="text-sm text-gray-300"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {e.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
