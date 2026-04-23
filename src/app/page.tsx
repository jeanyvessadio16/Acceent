"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Partenaire from "@/components/shared/Partenaire";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Page d'acceuil */}
      <main className="w-full flex flex-col overflow-hidden">
        {/* HERO SECTION */}
        <section className="w-full relative min-h-screen sm:max-h-96 flex items-center justify-center">
          {/* Background Image*/}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: "url('/image/banner.jpg')",
              backgroundAttachment: "fixed",
            }}
          ></div>

          {/* Background sombre pour le contraste */}
          <div className="w-full absolute inset-0 min-h-screen bg-blue-950/50"></div>
          {/* Contentu */}
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 flex flex-col items-center text-center space-y-3 max-w-5xl mx-auto">
            <div className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-2 md:mb-4 animate-hero-badge group">
              <span className="font-medium tracking-wider text-xs sm:text-sm text-white uppercase">
                Association Sénégalaise
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight animate-hero-title">
              Bienvenue à <strong className="uppercase">Acceent</strong>
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-100 max-w-3xl leading-relaxed tracking-wide animate-hero-description">
              <span className="font-semibold text-white">
                Action pour la Contribution Collective pour l&apos;Education,
                l&apos;Entrepreneuriat et le Numérique des Territoires
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-8 animate-hero-buttons w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(132,98,131,0.4)] rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-bold group btn-glow"
                asChild
              >
                <Link
                  href="#about"
                  className="flex items-center justify-center gap-2"
                >
                  Découvrir nos programmes
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* A propos section */}
        <section id="about" className="bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <About />
        </section>

        {/* Partenaires section */}
        <section
          id="partenaires"
          className="px-6 sm:px-10 py-16 md:py-24 bg-gray-50 relative overflow-hidden"
        >
          <Partenaire />
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="bg-gradient-to-b from-white to-gray-50"
        >
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
