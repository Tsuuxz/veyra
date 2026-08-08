import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEYRA • AI Development Suite",
  description: "Construa mais. Espere menos. VEYRA adiciona uma camada avançada de produtividade ao seu workflow de desenvolvimento com IA.",
  keywords: ["AI", "Development", "Productivity", "VEYRA", "Extension", "Tools"],
  authors: [{ name: "VEYRA" }],
  openGraph: {
    title: "VEYRA • AI Development Suite",
    description: "Construa mais. Espere menos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-full antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
