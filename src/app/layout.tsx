import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joaquín Gómez | Fullstack Developer",
  description:
    "Portfolio profesional de Joaquín Gómez — Desarrollador Fullstack especializado en .NET, C#, JavaScript, React, Node.js y MySQL. Estudiante avanzado en Tecnicatura en Desarrollo de Software.",
  keywords: [
    "Joaquín Gómez",
    "fullstack developer",
    "desarrollador software",
    ".net",
    "c#",
    "react",
    "node.js",
    "javascript",
    "mysql",
    "portfolio",
    "San Luis",
    "Argentina",
  ],
  authors: [{ name: "Joaquín Gómez" }],
  openGraph: {
    title: "Joaquín Gómez | Fullstack Developer",
    description:
      "Desarrollador Fullstack especializado en soluciones web con .NET, React, Node.js y MySQL.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
