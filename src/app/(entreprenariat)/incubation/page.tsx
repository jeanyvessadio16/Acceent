import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPrgramme from "@/components/shared/AboutProgramme";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { incubActivity } from "@/data/entreprenariat/accentIncub";

export const metadata: Metadata = {
  title: "ACCEENT - INCUB",
  description: "Incub",
};

export default function AcceentIncubProgramme() {
  const acceent4elles = {
    titre: "À propos du programme",
    description:
      "ACCEENT'INCUB est un programme d'incubation dédié aux jeunes porteurs et porteuses de projets de la région de Ziguinchor. Il a pour ambition de transformer des idées en initiatives concrètes, viables et porteuses de sens, en accompagnant les jeunes tout au long de leur parcours entrepreneurial. Le programme s'adresse en priorité à des jeunes qui ont du potentiel mais manquent souvent de cadre, de conseils ou de ressources pour lancer et faire évoluer leur projet",
  };
  return (
    <>
      {/* header */}
      <Header />

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/image/acceent-incub.jpeg)" }}
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto px-6 md:px-10 relative text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                ACCEENT&apos;INCUB
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Incubateur pour jeunes porteurs et porteuses de projets à
                Ziguinchor
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 top-0 bg-black/50"></div>
      </section>

      {/* composant AboutProgramme amélioré */}
      <div className="py-16">
        <AboutPrgramme {...acceent4elles}>
          <div className="flex flex-col justify-center items-center">
            {/* programme */}
            <div className="space-y-6">
              <div className="flex justify-center items-center space-x-3">
                <h2 className="text-2xl font-bold text-accent">
                  Le programme ACCEENT&apos;INCUB
                </h2>
              </div>
              {/* liste activités */}
              <ul className="list-disc space-y-2.5">
                {incubActivity.map((activity) => (
                  <li
                    key={activity.nom}
                    className="transition-all hover:bg-accent/10 cursor-pointer"
                  >
                    <h3 className="text-xl text-black/80 font-semibold">
                      {activity.nom}
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AboutPrgramme>
      </div>

      {/* lien vers TUT'TANK */}
      <div className="p-10 flex flex-col justify-center items-center">
        <Button asChild size={"xl"} className="mx-auto bg-accent">
          <Link href="/atelier">Atelier entreprenariat</Link>
        </Button>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
