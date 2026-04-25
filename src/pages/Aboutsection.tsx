// Page à propos

import { type Section } from "@/types/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { programmes } from "@/data/programmeAcceent";
import Image from "next/image";
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
            <p className="text-lg md:text-xl md:text-justify leading-relaxed text-gray-700 max-w-3xl mx-auto">
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
              <p className="text-lg md:text-xl md:text-justify  leading-relaxed text-gray-700">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {programmes.map((programme, idx) => (
              <Card
                key={programme.id || idx}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-gray-100 flex flex-col h-full transform hover:-translate-y-1.5 hover:border-primary/30"
              >
                {/* Effet lumineux en arrière-plan au survol */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 -translate-y-2 pointer-events-none z-0"></div>

                <CardHeader className="relative z-10 flex flex-col items-center text-center pb-2 pt-6 px-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-primary border border-primary/10 mb-3">
                    <programme.icone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                  </div>
                  <CardTitle className="text-lg font-bold text-accent capitalize group-hover:text-primary transition-colors duration-300">
                    {programme.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-grow relative z-10 text-center px-6 pb-4">
                  <CardDescription className="text-gray-600 flex-grow leading-relaxed text-sm">
                    {programme.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="relative z-10 mt-auto px-6 py-4 border-t border-gray-100/50 flex justify-center">
                  <Link
                    href={programme.link}
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-accent transition-colors group/link"
                  >
                    En savoir plus
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/link:translate-x-1" />
                  </Link>
                </CardFooter>
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
          <div className="mt-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenu texte */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl text-accent font-bold  leading-tight">
                  Carnaval de Santhiaba
                </h2>
              </div>
              <p className="text-lg md:text-xl md:text-justify  leading-relaxed text-gray-700">
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
