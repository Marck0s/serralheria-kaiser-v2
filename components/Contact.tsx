"use client";

import { useRef, useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const HCAPTCHA_SITE_KEY = "e2109722-70de-4a8a-bf84-7a78061a698e";

const info = [
  {
    icon: MapPin,
    title: "Localização",
    lines: ["São Paulo — SP", "Atendemos toda a Grande SP"],
  },
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    lines: ["(11) 97798-8716"],
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["portasdeacokaiser@gmail.com"],
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Seg–Sex: 08h–18h", "Emergências: 24h"],
  },
];

export default function Contact() {
  const captchaContainerRef = useRef<HTMLDivElement>(null);
  const captchaWidgetId = useRef<any>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaVisible, setCaptchaVisible] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Registra callbacks globais
  useEffect(() => {
    (window as any).onHCaptchaSuccess = () => {
      setCaptchaVerified(true);
      setSubmitError(false);
    };
    (window as any).onHCaptchaExpire = () => {
      setCaptchaVerified(false);
    };
    return () => {
      delete (window as any).onHCaptchaSuccess;
      delete (window as any).onHCaptchaExpire;
    };
  }, []);

  // Renderiza o widget toda vez que o captcha se torna visível
  useEffect(() => {
    if (!captchaVisible || !captchaContainerRef.current) return;

    const tryRender = () => {
      const hcaptcha = (window as any).hcaptcha;
      if (!hcaptcha) {
        // Script ainda não carregou, tenta novamente em 300ms
        setTimeout(tryRender, 300);
        return;
      }

      // Limpa o container e renderiza widget novo
      captchaContainerRef.current!.innerHTML = "";
      captchaWidgetId.current = hcaptcha.render(captchaContainerRef.current, {
        sitekey: HCAPTCHA_SITE_KEY,
        theme: "dark",
        callback: "onHCaptchaSuccess",
        "expired-callback": "onHCaptchaExpire",
      });

      setCaptchaVerified(false);
    };

    tryRender();
  }, [captchaVisible]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Primeiro clique: revela o captcha
    if (!captchaVisible) {
      setCaptchaVisible(true);
      setSubmitError(true);
      return;
    }

    // Captcha visível mas não resolvido
    if (!captchaVerified) {
      setSubmitError(true);
      return;
    }

     const form = formRef.current;
  if (form) {
    ["h-captcha-response", "g-recaptcha-response"].forEach((name) => {
      const el = form.querySelector(`[name="${name}"]`);
      if (el) el.remove();
    });
    form.submit();
  }
}

  return (
    <section id="contato" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14">

          {/* ── Left: info ── */}
          <div>
            <p
              className="text-[#c8a84b] text-xs tracking-widest uppercase mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fale Conosco
            </p>
            <h2 className="section-title text-white mb-1">
              Entre em <span className="text-[#c8a84b]">Contato</span>
            </h2>
            <div className="divider-gold" />
            <p
              className="text-gray-400 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Estamos prontos para atender você. Entre em contato pelo WhatsApp,
              telefone ou nos envie um e-mail. Orçamento sem compromisso!
            </p>

            <div className="space-y-5">
              {info.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#c8a84b]/10 border border-[#c8a84b]/20 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#c8a84b]" size={18} />
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-medium mb-0.5"
                      style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
                    >
                      {item.title}
                    </p>
                    {item.lines.map((l) => (
                      <p
                        key={l}
                        className="text-gray-400 text-sm"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5511977988716"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 mt-8"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.553 4.104 1.522 5.83L0 24l6.346-1.501A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.028-1.38l-.36-.214-3.727.882.897-3.643-.235-.375A9.818 9.818 0 1112 21.818z" />
              </svg>
              Iniciar Conversa no WhatsApp
            </a>
          </div>

          {/* ── Right: form ── */}
          <div className="bg-[#111] border border-white/5 p-8">
            <h3
              className="text-xl text-white mb-6"
              style={{ fontFamily: "var(--font-oswald)", letterSpacing: "0.05em" }}
            >
              Solicite seu Orçamento
            </h3>

            <form
              ref={formRef}
              action="https://formsubmit.co/8ce50f60a8e1c5c870bc4b2b80eb63fc"
              method="POST"
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="_subject" value="Foi solicitado um orçamento via site" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://serralheriakaiser.com.br/solicitacao-enviada" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Nome *
                  </label>
                  <input name="Nome" required placeholder="Seu nome" className="input-field" />
                </div>
                <div>
                  <label
                    className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Telefone *
                  </label>
                  <input name="Telefone" required placeholder="(11) 99999-9999" className="input-field" />
                </div>
              </div>

              <div>
                <label
                  className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  E-mail
                </label>
                <input name="E-mail" type="email" placeholder="seu@email.com" className="input-field" />
              </div>

              <div>
                <label
                  className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Serviço de Interesse
                </label>
                <select name="Serviço" className="input-field">
                  <option value="">Selecione...</option>
                  <option>Porta de Aço Automática</option>
                  <option>Porta de Aço Manual</option>
                  <option>Manutenção / Reparo</option>
                  <option>Portão Metálico</option>
                  <option>Grades de Segurança</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-gray-400 text-xs uppercase tracking-wider mb-1.5"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Mensagem
                </label>
                <textarea
                  name="Mensagem"
                  rows={4}
                  placeholder="Descreva seu projeto ou necessidade..."
                  className="input-field resize-none"
                />
              </div>

              {/* hCaptcha — oculto até o primeiro clique em Enviar */}
              <div
                ref={captchaContainerRef}
                className={captchaVisible ? "block" : "hidden"}
              />

              {submitError && !captchaVerified && (
                <p
                  className="text-red-400 text-xs"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Por favor, confirme que você não é um robô antes de enviar.
                </p>
              )}

              <button type="submit" className="btn-primary w-full text-center block">
                Enviar Solicitação
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
