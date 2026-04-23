// Page à propos

import { type Section } from "@/types/section";
import { Card, CardDescription } from "@/components/ui/card";
import { programmes } from "@/data/programmeAcceent";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { aboutVision } from "@/data/aboutVision";
import { engagementCulturel } from "@/data/aboutVision";

export default function AboutSection({ description }: Section) {
  return (
    <>
      {/* Section principale : Qui sommes-nous */}
      <section className="w-full px-6 md:px-10 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Titre */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
                Qui sommes-nous ?
              </h2>
              {/* <div className="w-32 h-2 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div> */}
            </div>
            {/* Description */}
            <p className="text-lg md:text-xl max-md:text-justify leading-relaxed text-gray-700 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      <div className="w-40 h-1.5 mx-auto bg-secondary rounded-full"></div>

      {/* Section Vision et Missions */}
      <section className="w-full px-6 md:px-10 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenu texte */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                  Notre vision et nos missions
                </h2>
                <div className="w-24 h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-lg md:text-xl max-md:text-justify  leading-relaxed text-gray-700">
                Acceent s&apos;engage à autonomiser les populations locales,
                notamment les jeunes et les femmes, en leur offrant des outils
                adaptés pour surmonter les défis socio-économiques.
                L&apos;organisation croit fermement en la création de solutions
                créatives et adaptées pour améliorer les conditions de vie des
                communautés locales. Elle aspire à faire de ses bénéficiaires
                des acteurs du changement, en les dotant des compétences
                nécessaires pour participer activement au développement de leur
                territoire. En savoir plus sur notre engagement culturel et
                social ou consultez notre Agend&apos;Acceent.
              </p>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src={aboutVision.imageUrl}
                  alt={aboutVision.title}
                  width={600}
                  height={400}
                  className="w-full h-80 md:h-96 lg:h-96 rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Programmes */}
      <section
        id="programmes"
        className="px-6 md:px-10 py-16 md:py-20 bg-gray-50 relative overflow-hidden"
      >
        {/* Décoration de fond subtile */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="mx-auto max-w-7xl relative z-10">
          {/* En-tête de section */}
          <div className="text-center mb-16 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
                Nos Domaines d&apos;Action
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-primary">
                Programmes ACCEENT
              </h3>
            </div>
            <div className="w-32 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Grille des programmes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {programmes.map((programme, idx) => (
              <Card
                key={programme.id || idx}
                className="group pt-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-0 flex flex-col h-full transform hover:-translate-y-3"
              >
                {/* Image du programme */}
                <div className="relative w-full h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <h4 className="text-white text-2xl font-bold capitalize drop-shadow-lg">
                      {programme.title}
                    </h4>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="px-6 py-3 flex flex-col flex-grow">
                  <CardDescription className="text-gray-600 mb-2 flex-grow leading-relaxed text-lg">
                    {programme.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="mt-auto self-start p-0 text-primary font-semibold hover:text-accent hover:bg-transparent group/btn h-auto transition-all duration-300"
                  >
                    <Link
                      href={programme.link}
                      className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/5 transition-colors"
                    >
                      Savoir plus
                      <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement culturel et social */}
      <section id="culture" className="w-full px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary leading-tight">
              Engagement culturel et social
            </h2>
            <div className="w-52 h-1 mx-auto bg-accent rounded-full"></div>
          </div>
          <br />
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenu texte */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl text-accent font-bold  leading-tight">
                  Carnaval de Santhiaba
                </h2>
              </div>
              <p className="text-lg md:text-xl max-md:text-justify  leading-relaxed text-gray-700">
                Acceent joue un rôle clé dans la promotion de la culture comme
                levier de développement durable. Elle est notamment partenaire
                central du Carnaval de Santhiaba, un événement qui célèbre la
                diversité culturelle et l&apos;identité locale. À travers ce
                carnaval, l&apos;organisation réunit divers acteurs culturels et
                institutionnels pour discuter du rôle de la culture dans le
                développement des territoires.
              </p>
            </div>
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src={engagementCulturel.imageUrl}
                  alt={engagementCulturel.title}
                  width={600}
                  height={400}
                  className="w-full h-80 md:h-96 lg:h-96 rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
