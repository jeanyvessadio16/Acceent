import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPrgramme from "@/components/shared/AboutProgramme";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { incubActivity } from "@/data/entreprenariat/accentIncub";

export const metadata: Metadata = {
  title: "ACCEENT - Atelier entreprenariat",
  description: "Atelier Entreprenariat",
};

export default function AtelierEntreprenariatProgramme() {
  const acceent4elles = {
    titre: "À propos du programme",
    description:
      "L'Atelier de l'Entrepreneriat est un programme d'échange, de formation et d'accompagnement dédié aux jeunes porteurs de projets désireux de transformer leurs idées en réalisations concrètes. Chaque participant est guidé, outillé et encouragé à chaque étape de son parcours entrepreneurial. L'objectif est de rendre les jeunes plus autonome économiquement et de participer au développement de leur localité.",
  };
  return (
    <>
      {/* header */}
      <Header />

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/image/entreprenariat.jpeg)" }}
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto px-6 md:px-10 relative text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Atelier entreprenariat
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Encourager la créativité et l&apos;innonvation chez les jeunes
                de Ziguinchor
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
                <h2 className="text-2xl font-bold text-accent">Galerie</h2>
              </div>
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
