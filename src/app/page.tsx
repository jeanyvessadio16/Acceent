"use client";

import Header from "@/components/layout/Header";
import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { programmes } from "@/data/programmeAcceent";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [filters] = useState([
    "Tous",
    "Education",
    "Entreprenariat",
    "Numérique",
  ]);

  const filtrerImage = (term: string) => {
    setActiveFilter(term);
    // Ideally we would filter the programmes array here based on the term
  };

  return (
    <>
      <Header />
      <main className="flex flex-col w-full overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center">
          {/* Background Image with Parallax feel */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
            style={{
              backgroundImage: "url('/image/banner.jpg')",
              backgroundAttachment: "fixed",
            }}
          ></div>

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/90 via-primary/70 to-primary/40 backdrop-blur-[2px]"></div>

          {/* Content */}
          <div className="relative z-10 container px-6 mx-auto flex flex-col items-center text-center space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-4">
              <span className="font-medium tracking-wider text-sm text-white uppercase">
                Association Senégalaise
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-tight">
              Bienvenue à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Acceent
              </span>
            </h1>

            <p className="text-gray-200 text-lg md:text-xl font-medium max-w-3xl leading-relaxed uppercase tracking-wide">
              Action pour la Contribution Collective pour l&apos;Education,
              l&apos;Entrepreneuriat et le Numérique des Territoires
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(251,191,36,0.3)] rounded-full px-8 py-6 text-base font-bold group"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 transform hover:-translate-y-1 rounded-full px-8 py-6 text-base font-bold bg-transparent"
              >
                Découvrir nos actions
              </Button>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center justify-center opacity-70">
            <span className="text-white text-sm mb-2 font-medium tracking-widest uppercase">
              Défiler
            </span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* PROGRAMMES SECTION */}
        <section className="py-24 px-6 md:px-10 bg-background relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
                Nos Domaines d&apos;Action
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary">
                Programmes Acceent
              </h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Elegant Filters */}
            <div className="flex flex-wrap gap-3 justify-center items-center mb-12">
              {filters.map((term) => (
                <Button
                  key={term}
                  variant={activeFilter === term ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 transition-all duration-300 text-sm font-medium
                    ${
                      activeFilter === term
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5"
                    }`}
                  onClick={() => filtrerImage(term)}
                >
                  {term}
                </Button>
              ))}
            </div>

            {/* Dynamic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {programmes.map((programme, idx) => (
                <Card
                  key={programme.id || idx}
                  className="group pt-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-2 h-full"
                >
                  <div className="relative w-full h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full"></div>
                    <Image
                      src={programme.imageUrl}
                      alt={programme.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-5 py-2 flex flex-col flex-grow">
                    <CardTitle className="text-xl text-primary font-bold mb-3 group-hover:text-accent transition-colors">
                      {programme.title}
                    </CardTitle>
                    <CardDescription className="text-gray-500 mb-3 flex-grow leading-relaxed">
                      {programme.description}
                    </CardDescription>
                    <Button
                      variant="ghost"
                      className="mt-auto self-start p-0 text-primary font-semibold hover:text-secondary hover:bg-transparent group/btn h-auto"
                    >
                      Découvrir ce programme
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1 text-secondary" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="bg-primary relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <About />
        </section>

        {/* CONTACT SECTION */}
        <section className="bg-gradient-to-b from-white to-gray-50">
          <Contact />
        </section>
      </main>
    </>
  );
}
