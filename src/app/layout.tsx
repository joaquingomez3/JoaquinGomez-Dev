import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joaquingomez.dev"),
  title: "Joaquín Gómez — Desarrollador Full Stack Junior",
  description:
    "Desarrollador Full Stack Junior de San Luis, Argentina. APIs backend con Node.js y .NET, apps móviles híbridas con Flutter y bases de datos MySQL. Próximo a graduarme de la Tecnicatura en Desarrollo de Software.",
  keywords: [
    "Joaquín Gómez",
    "desarrollador full stack",
    "full stack junior",
    "backend developer",
    "node.js",
    ".net",
    "c#",
    "flutter",
    "react",
    "mysql",
    "api rest",
    "San Luis",
    "Argentina",
  ],
  authors: [{ name: "Joaquín Gómez" }],
  creator: "Joaquín Gómez",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Joaquín Gómez — Desarrollador Full Stack Junior",
    description:
      "APIs backend (Node.js & .NET), desarrollo móvil híbrido con Flutter y bases de datos MySQL. Buscando mi primera posición Full Stack.",
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Joaquín Gómez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joaquín Gómez — Desarrollador Full Stack Junior",
    description:
      "APIs backend (Node.js & .NET), desarrollo móvil híbrido con Flutter y bases de datos MySQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
