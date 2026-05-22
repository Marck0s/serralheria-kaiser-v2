import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayron Santos",
    text: "Trabalho de alta qualidade, atendimento de primeira e muito rápido. Recomendo a todos!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUgRrbAs-vKCDXVfN9peTiDmP0BbX_h04RnjIQFSRkwG-dzDGM5=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Jhonatan Amaral",
    text: "Melhor preço da região! Instalaram 4 portas automáticas com nota fiscal, tudo certinho. Ótimo atendimento, super recomendo.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKZ_Gz_mjq_nyOzHKfQL7EmOIPrfPj9RBmQ2rIM32FzuzGjEQ=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Gabriel Fontinely",
    text: "Tinha muita dificuldade em subir e descer a porta da minha loja. Depois do serviço melhorou de 0 a 1000! Serviço muito bom.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUbWrjJSLH70dcwP0nTyrVjKtv9wkN5pTK0bOhAZruoTJPQsAPw7g=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Marcos Oliveira",
    text: "Melhor serralheria! Serviços com qualidade, garantia e profissionalismo. Recomendo sem hesitar.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWbS_rAxiary2X9SskBUZvr-K7lMLuVXb-lNUp4Fy40U6b8jb8a2Q=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Adega do Big Jhow",
    text: "Rápido, eficiente e preço justo! Exatamente o que precisávamos para nosso estabelecimento.",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI7BPmOkUubA48vDYgQ7aPXvT3wVw12lvaQAjwpwuE_b84CQA=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Wanderson Pereira",
    text: "Gostei muito do serviço prestado! Equipe profissional e pontual. Super indico a amigos e família!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVQQdOFxWnGt5KLuPQ-hCGur_MPZQF_5YwjS-c0uHg7-tgvgeI88A=w72-h72-p-rp-mo-br100",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-[#c8a84b] text-xs tracking-widest uppercase mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Avaliações Reais
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="section-title text-white">
                Quem Contratou, <span className="text-[#c8a84b]">Recomenda</span>
              </h2>
              <div className="divider-gold" />
            </div>
            <div className="flex items-center gap-3 bg-[#1a1a1a] border border-[#c8a84b]/20 px-5 py-3 self-start md:self-auto">
              <div>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={16} className="text-[#c8a84b] fill-[#c8a84b]" />
                  ))}
                </div>
                <p className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-oswald)" }}>
                  4.8 / 5.0
                </p>
              </div>
              <div className="border-l border-white/10 pl-3">
                <p className="text-gray-400 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                  Avaliações
                </p>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card p-6 relative">
              <Quote className="text-[#c8a84b]/20 absolute top-4 right-4" size={36} />
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={13} className="text-[#c8a84b] fill-[#c8a84b]" />
                ))}
              </div>
              <p
                className="text-gray-300 text-sm leading-relaxed mb-5"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Cliente verificado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
