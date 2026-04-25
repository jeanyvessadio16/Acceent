import Image from "next/image";
import { aboutVision } from "@/data/aboutVision";

export function VisionMissionSection() {
  return (
    <section className="w-full px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Notre vision et nos missions
              </h2>
              <div className="w-24 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl md:text-justify leading-relaxed text-gray-700">
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
  );
}
