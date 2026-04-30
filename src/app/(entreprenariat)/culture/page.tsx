import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPrgramme from "@/components/shared/AboutProgramme";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ACCEENT - Atelier entreprenariat",
  description: "Atelier Entreprenariat",
};

export default function CultureCarnaval() {
  const acceent4elles = {
    titre: "À propos du programme",
    description:
      "Acceent joue un rôle clé dans la promotion de la culture comme levier de développement durable. Nous sommes un partenaire central du Carnaval de Santhiaba, un événement vibrant qui célèbre la diversité culturelle et l'identité locale. À travers ce carnaval et d'autres initiatives, l'organisation réunit divers acteurs culturels et institutionnels pour discuter et repenser le rôle de la culture dans le développement de nos territoires.",
  };
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/image/carnaval.jpeg)" }}
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto px-6 md:px-10 relative text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Carnaval de Santhiaba
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Valoriser et promouvoir la culture
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

      {/* Footer */}
      <Footer />
    </>
  );
}
