import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACCEENT – Éducation, Culture et Numérique à Ziguinchor",
  description:
    "ACCEENT est une association à Ziguinchor qui œuvre pour l'éducation, la culture, l'entrepreneuriat et le numérique. Découvrez nos programmes ACCEENT4ELLES, TUT'TANK, ACCEENT'INCUB et nos actions locales pour le développement du territoire sénégalais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
