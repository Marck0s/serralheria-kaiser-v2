// app/solicitacao-enviada/page.tsx  (ou pages/solicitacao-enviada.tsx se usar Pages Router)
// Rota: https://serralheriakaiser.com.br/solicitacao-enviada
// Apontada pelo campo _next do FormSubmit

import Link from "next/link";

export const metadata = {
  title: "Solicitação Enviada | Serralheria Kaiser",
  description: "Sua solicitação de orçamento foi recebida com sucesso.",
};

export default function SolicitacaoEnviada() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0a0a0a", fontFamily: "var(--font-inter)" }}
    >
      {/* ── Thin gold top bar ── */}
      <div className="h-[3px] w-full bg-[#c8a84b]" />

      {/* ── Logo / header strip ── */}
      <header className="flex items-center justify-center py-6 px-5 border-b border-white/5">
        <Link href="/" aria-label="Voltar ao início">
          {/* Substitua pelo seu componente <Logo /> ou <Image> se preferir */}
          <span
            className="text-white text-2xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.12em" }}
          >
            Portas de Aço e Serralheria<span className="text-[#c8a84b]"> Kaiser</span>.
          </span>
        </Link>
      </header>

      {/* ── Main content ── */}
      <section
        className="flex-1 flex items-center justify-center px-5 py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url(/assets/images/background-main.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/88" />

        {/* Decorative gold circle glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-lg w-full text-center">
          {/* Check icon */}
          <div className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                border: "2px solid #c8a84b",
                boxShadow: "0 0 32px rgba(200,168,75,0.18)",
              }}
            >
              {/* Simple SVG checkmark */}
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <polyline
                  points="6,19 14,27 30,11"
                  stroke="#c8a84b"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Label */}
          <p
            className="text-[#c8a84b] text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Solicitação Recebida
          </p>

          {/* Headline */}
          <h1
            className="text-white text-4xl sm:text-5xl uppercase mb-5 leading-tight"
            style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
          >
            Mensagem{" "}
            <span className="text-[#c8a84b]">Enviada</span>
            <br />
            com Sucesso!
          </h1>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-[#c8a84b] mx-auto mb-6" />

          {/* Body copy */}
          <p
            className="text-gray-400 text-base leading-relaxed mb-3"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Obrigado pelo contato! Recebemos sua solicitação de orçamento e nossa equipe
            entrará em contato em breve para atendê-lo da melhor forma.
          </p>
          <p
            className="text-gray-500 text-sm leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Se precisar de atendimento imediato, fale conosco diretamente pelo WhatsApp.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Back to site — primary */}
            <Link
              href="/"
              className="btn-primary inline-block text-center"
            >
              ← Voltar ao Site
            </Link>

            {/* WhatsApp — outline */}
            <a
              href="https://wa.me/5511977988716"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <footer className="py-5 px-5 border-t border-white/5 text-center">
        <p
          className="text-gray-600 text-xs"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Portas de Aço e Serralheria Kaiser. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
