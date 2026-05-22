"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#parceiros", label: "Clientes" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/assets/logo/logokaiser.jpeg"
            alt="Serralheria Kaiser"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            unoptimized
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+5511977988716"
            className="flex items-center gap-2 text-sm font-medium text-[#c8a84b]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <Phone size={14} />
            (11) 97798-8716
          </a>
          <a
            href="https://wa.me/5511977988716"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Orçamento Grátis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/98 border-t border-white/10 px-5 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511977988716"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center mt-2"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
