import AboutPrgramme from "@/components/shared/AboutProgramme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACCEENT - World Robot Olympiad",
  description: "",
};

export default function WROProgramme() {
  const acceent4elles = {
    titre: "À propos de  WRO",
    description:
      "Une compétition de robotique véritablement mondiale dédiée à la science, à la technologie et à l'éducation. Notre mission est d'aider les jeunes à développer leur créativité et leur capacité à résoudre des problèmes de manière ludique et stimulante. Pour ce faire, nous organisons des concours de robotique dans quatre catégories différentes pour les élèves de 8 à 19 ans. L'Association World Robot Olympiad™ est une organisation indépendante à but non lucratif. Tous les revenus des parrainages et des cotisations sont investis dans notre mission : promouvoir la robotique dans l'enseignement des STEM (sciences, technologie, ingénierie et mathématiques) à travers le monde.",
  };
  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/image/wro.webp)" }}
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto px-6 md:px-10 relative text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                World Robot Olympiad
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Développer la créativité et la compétence en résolution de
                problème chez les jeunes
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
              <div className="flex justify-center items-center space-x-3"></div>
            </div>
          </div>
        </AboutPrgramme>
      </div>
    </>
  );
}
