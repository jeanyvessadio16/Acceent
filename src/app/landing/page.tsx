import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPrgramme from "@/components/shared/AboutProgramme";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  listAccompagnement,
  approches,
} from "@/data/education/listAccompagnement";
import { Metadata } from "next";
import { Target, Heart, BookOpen, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCEENT4ELLES",
  description:
    "ACCEENT4ELLES est un programme d'accompagnement des jeunes filles",
};

export default function Acceent4ELLES() {
  const acceent4elles = {
    titre: "À propos du programme",
    description:
      "ACCENT4ELLES est un programme initié par ACCEENT pour accompagner des jeunes filles en situation de vulnérabilité, souvent confrontées à des difficultés scolaires, économiques ou à des grossesses précoces. Notre objectif est de leur offrir un cadre bienveillant et structurant pour les aider à reprendre confiance en elles, poursuivre leur scolarité et construire un avenir meilleur.",
  };
  return (
    <>
      {/* header */}
      <Header />

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/image/acceentImage.jpg)" }}
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto px-6 md:px-10 relative text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                ACCEENT4ELLES
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Accompagner les jeunes filles vers un avenir meilleur
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Un programme dédié à l&apos;émancipation et à la réussite des
                jeunes filles en situation de vulnérabilité.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 top-0 bg-black/50"></div>
      </section>

      {/* composant AboutProgramme amélioré */}
      <div className="py-16">
        <AboutPrgramme {...acceent4elles}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* programme */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl max-sm:text-2xl md:text-4xl font-bold text-primary">
                  Le programme d&apos;accompagnement
                </h2>
              </div>
              <details>
                <summary className="text-lg font-semibold text-primary cursor-pointer hover:text-primary/80 transition-colors">
                  Liste d&apos;accompagnement
                </summary>
                <div className="space-y-3 mt-4">
                  {listAccompagnement.map((list) => (
                    <div
                      key={list.nom}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Heart className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{list.nom}</span>
                    </div>
                  ))}
                </div>
              </details>
              <p className="text-lg text-gray-600 leading-relaxed">
                Avec ACCENT4ELLES, nous croyons qu&apos;aucune situation
                n&apos;est définitive. Chaque fille mérite une seconde chance,
                un accompagnement digne et des opportunités pour se révéler et
                s&apos;épanouir.
              </p>
            </div>

            {/* approche */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-3xl max-sm:text-2xl md:text-4xl font-bold text-primary">
                  Notre approche
                </h2>
              </div>
              <details>
                <summary className="text-lg font-semibold text-primary cursor-pointer hover:text-primary/80 transition-colors">
                  Notre approche
                </summary>
                <div className="space-y-3 mt-4">
                  {approches.map((approche) => (
                    <div
                      key={approche.nom}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Target className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-lg text-gray-700">
                        {approche.nom}
                      </span>
                    </div>
                  ))}
                </div>
              </details>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre approche repose sur un accompagnement global et durable,
                combinant formation continue, mentorat personnalisé et suivi
                post-formation pour garantir l&apos;autonomie et la réussite des
                bénéficiaires.
              </p>
            </div>
          </div>
        </AboutPrgramme>
      </div>

      {/* lien vers TUT'TANK */}
      <div className="p-10 flex flex-col justify-center items-center">
        <Button asChild size={"xl"} className="mx-auto bg-accent">
          <Link href="/tuttank">Programme TUT&apos;TANK</Link>
        </Button>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
