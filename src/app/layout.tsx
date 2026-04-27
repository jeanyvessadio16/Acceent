import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACCEENT",
  description:
    "ACCEENT est une association qui œuvre dans le domaine l'éducation, l'entrepreneuriat, du numérique et de la culture. Dans chaque domaine ACCEENT propose des programmes qui ciblent les jeunes et les femmes. L'association est située à Ziguinchor dans le quartier de Santhiaba.",
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
