import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
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
    "Desarrollador Full Stack Junior de San Luis, Argentina. Diseño la base de datos, escribo la API, armo el panel web y la app móvil que lo consume: Node.js, .NET, Next.js, React y Flutter. Con un sistema entregado y en producción para un cliente real.",
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
    "next.js",
    "typescript",
    "mysql",
    "postgresql",
    "api rest",
    "sistema de gestión",
    "San Luis",
    "Argentina",
  ],
  authors: [{ name: "Joaquín Gómez" }],
  creator: "Joaquín Gómez",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Joaquín Gómez — Desarrollador Full Stack Junior",
    description:
      "De la base de datos a la app móvil: Node.js, .NET, Next.js, React y Flutter. Un sistema entregado y en producción para un cliente real. Buscando mi primera posición Full Stack.",
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Joaquín Gómez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joaquín Gómez — Desarrollador Full Stack Junior",
    description:
      "De la base de datos a la app móvil: Node.js, .NET, Next.js, React y Flutter. Un sistema entregado y en producción para un cliente real.",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark" as const,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
