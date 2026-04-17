// Page à propos

import { type Section } from "@/types/section";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { programmes } from "@/data/programmeAcceent";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection({ title, description }: Section) {
  const aboutVision = {
    title: "Vision et Missions",
    description:
      "Acceent s'engage à autonomiser les populations locales, notamment les jeunes et les femmes, en leur offrant des outils adaptés pour surmonter les défis socio-économiques. L'organisation croit fermement en la création de solutions créatives et adaptées pour améliorer les conditions de vie des communautés locales. Elle aspire à faire de ses bénéficiaires des acteurs du changement, en les dotant des compétences nécessaires pour participer activement au développement de leur territoire. En savoir plus sur notre engagement culturel et social ou consultez notre Agend’Acceent.",
    imageUrl: "/image/vision.jpeg",
  };
  return (
    <>
      <section className="w-full px-10 py-24">
        <div className="flex justify-between items-center gap-8">
          <div className="w-full space-y-6">
            {/* titre */}
            <div>
              <h2 className=" text-center text-3xl md:text-5xl font-bold text-primary">
                Qui sommes-nous ?
              </h2>
            </div>
            {/* contenu */}
            {/* <h2 className="text-3xl font-bold text-primary">{title}</h2> */}
            {/* <div className="w-20 h-1.5 bg-secondary rounded-full"></div> */}
            <p className="text-lg lg:text-xl leading-relaxed text-center px-1">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMMES SECTION */}
      <section id="programmes" className="px-10 relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
              Nos Domaines d&apos;Action
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-primary">
              Programmes Acceent
            </h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Les trois piliers */}
          <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {programmes.map((programme, idx) => (
              <Card
                key={programme.id || idx}
                className="group pt-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-2 h-full"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 w-full h-full"></div>
                  <div>
                    <Image
                      src={programme.image}
                      alt={programme.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="px-5 py-2 flex flex-col flex-grow">
                  <CardTitle className="text-xl text-primary font-bold mb-3 capitalize group-hover:text-accent transition-colors">
                    {programme.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 mb-3 flex-grow leading-relaxed">
                    {programme.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="mt-auto self-start p-0 text-primary font-semibold hover:text-secondary hover:bg-transparent group/btn h-auto"
                  >
                    <Link
                      href={programme.link}
                      className="flex items-center gap-1"
                    >
                      Savoir plus
                    </Link>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1 text-secondary" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
