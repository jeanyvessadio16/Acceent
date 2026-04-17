"use client";

import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Partenaire from "@/components/shared/Partenaire";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Page d'acceuil */}
      <main className="flex flex-col w-full overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
          {/* Background Image*/}
          <div
            className="absolute inset-0 bg-cover bg-to bg-no-repeat w-full h-full"
            style={{
              backgroundImage: "url('/image/acceentImage.jpg')",
              backgroundAttachment: "fixed",
            }}
          ></div>

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/70 to-primary/40"></div>

          {/* Contentu */}
          <div className="relative z-10 container px-6 mx-auto flex flex-col items-center text-center space-y-3">
            <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-4 animate-hero-badge">
              <span className="font-medium tracking-wider text-sm text-white uppercase">
                Association Senégalaise
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight animate-hero-title">
              Bienvenue à{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-foreground">
                Acceent
              </strong>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl leading-relaxed uppercase tracking-wide animate-hero-description">
              Action pour la Contribution Collective pour l&apos;Education,
              l&apos;Entrepreneuriat et le Numérique des Territoires
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 animate-hero-buttons">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(251,191,36,0.3)] rounded-full px-8 py-6 text-base font-bold group"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 rounded-full px-8 py-6 text-base font-bold bg-transparent"
              >
                <Link href="#programmes" className="flex items-center gap-2">
                  Découvrir nos programmes
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
          className="px-10 py-24 bg-gray-100 relative overflow-hidden"
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
    </>
  );
}
