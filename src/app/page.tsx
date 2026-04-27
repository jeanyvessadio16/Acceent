"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Partenaire from "@/components/shared/Partenaire";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {/* Header */}
      <Header />
      {/* Page d'acceuil */}
      <main className="w-full flex flex-col overflow-hidden">
        {/* HERO SECTION */}
        <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Parallax effect */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full scale-105 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: "url('/image/banner.jpg')",
              backgroundAttachment: isMobile ? "scroll" : "fixed",
            }}
          ></div>

          {/* Gradient Overlay pour une profondeur magnifique */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/60 to-purple-900/50"></div>

          {/* Pattern decoratif en overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

          {/* Contenu */}
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto mt-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white max-w-5xl leading-[1.1] animate-hero-title drop-shadow-2xl">
              Bienvenue à <br className="hidden md:block" />
              <strong className="bg-clip-text uppercase inline-block animate-float">
                ACCEENT
              </strong>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed tracking-wide animate-hero-description font-light">
              <span className="font-semibold text-white drop-shadow-md">
                Action pour la Contribution Collective pour l&apos;Education,
                l&apos;Entrepreneuriat et le Numérique des Territoires
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-hero-buttons w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-secondary to-purple-600 hover:from-purple-600 hover:to-secondary text-white transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(132,98,131,0.5)] rounded-full px-8 sm:px-10 py-6 sm:py-8 text-base sm:text-lg font-bold group btn-glow border-none"
                asChild
              >
                <Link
                  href="#about"
                  className="flex items-center justify-center gap-3"
                >
                  Découvrir nos programmes
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* A propos section */}
        <section id="about" className="bg-white relative overflow-hidden pt-10">
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
