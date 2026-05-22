import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Serralheria Kaiser | Portas de Aço na Grande São Paulo",
  description:
    "Especialistas em portas de aço automáticas e manuais, portões, grades e estruturas metálicas na Grande São Paulo. Atendimento emergencial 24h. Solicite seu orçamento grátis!",
  keywords: [
    "serralheria São Paulo",
    "portas de aço",
    "portão automático",
    "manutenção porta de aço",
    "serralheria 24h",
    "porta de enrolar",
    "grades de ferro",
    "serralheria Grande São Paulo",
    "Serralheria Kaiser",
  ],
  openGraph: {
    title: "Serralheria Kaiser | Portas de Aço e Serralheria",
    description:
      "Especialistas em portas de aço, portões e estruturas metálicas na Grande São Paulo. Atendimento 24h.",
    url: "https://serralheriakaiser.com.br",
    siteName: "Serralheria Kaiser",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://serralheriakaiser.com.br" },
  icons: {
    icon: "/assets/logo/logokaiser.jpeg",
    apple: "/assets/logo/logokaiser.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Script src="https://js.hcaptcha.com/1/api.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}