"use client";
import { useState } from "react";
import { Share2, Camera, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="/assets/logo/logokaiser.jpeg"
            alt="Serralheria Kaiser"
            className="h-10 w-auto object-contain mb-4"
          />
          <p
            className="text-gray-500 text-sm leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Especialistas em portas de aço e serralheria na Grande São Paulo. Qualidade,
            segurança e atendimento 24h.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/people/Portas-de-A%C3%A7o-Kaiser/61574927464934/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              aria-label="Facebook"
            >
              <Share2 size={16} />
            </a>
            <a
              href="https://www.instagram.com/serralheria.kaiser0/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              aria-label="Instagram"
            >
              <Camera size={16} />
            </a>
            <a
              href="mailto:portasdeacokaiser@gmail.com"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-gray-400 hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              aria-label="E-mail"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4
            className="text-white text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Navegação
          </h4>
          <ul className="space-y-2">
            {[
              { href: "#servicos", label: "Nossos Serviços" },
              { href: "#sobre", label: "Sobre a Kaiser" },
              { href: "#parceiros", label: "Clientes" },
              { href: "#depoimentos", label: "Depoimentos" },
              { href: "#contato", label: "Solicitar Orçamento" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-500 text-sm hover:text-[#c8a84b] transition-colors flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <ArrowRight size={12} />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Contato
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-gray-500" style={{ fontFamily: "var(--font-inter)" }}>
              <MapPin size={15} className="text-[#c8a84b] mt-0.5 shrink-0" />
              São Paulo — SP<br/>Grande São Paulo
            </li>
            <li>
              <a
                href="tel:+5511977988716"
                className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#c8a84b] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <Phone size={15} className="text-[#c8a84b] shrink-0" />
                (11) 97798-8716
              </a>
            </li>
            <li>
              <a
                href="mailto:portasdeacokaiser@gmail.com"
                className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-[#c8a84b] transition-colors"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <Mail size={15} className="text-[#c8a84b] shrink-0" />
                portasdeacokaiser@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            className="text-white text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Fique por Dentro
          </h4>
          <p
            className="text-gray-500 text-sm leading-relaxed mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Receba dicas de manutenção, promoções e novidades diretamente no seu e-mail.
          </p>
          {sent ? (
            <div className="bg-[#c8a84b]/10 border border-[#c8a84b]/30 text-[#c8a84b] text-sm px-4 py-3" style={{ fontFamily: "var(--font-inter)" }}>
              ✓ Obrigado! Você está cadastrado.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="seu@email.com"
                className="input-field flex-1 text-sm"
                style={{ borderRight: "none" }}
              />
              <button
                type="submit"
                className="bg-[#c8a84b] text-black px-4 flex items-center justify-center hover:bg-[#a8872e] transition-colors shrink-0"
                aria-label="Cadastrar e-mail"
              >
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-gray-600 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © 2026 Portas de Aço e Serralheria Kaiser. Todos os direitos reservados.
          </p>
          <p
            className="text-gray-700 text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Desenvolvido por{" "}
            <a
              href="https://mmcoretech.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c8a84b] transition-colors"
            >
              M&M CoreTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
