import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutPrgramme from "@/components/shared/AboutProgramme";
import { Button } from "@/components/ui/button";
import { tuttankActivity } from "@/data/education/tuttank";
import { Metadata } from "next";
import { Heart, BookOpen } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "ACCEENT - TUT'TANK",
  description: "TUT'TANK",
};

export default function Acceent4ELLES() {
  const acceent4elles = {
    titre: "À propos du programme",
    description:
      "TUT TANK est un programme mis en place par ACCEENT pour accompagner les enfants et leurs familles dans un cadre éducatif et bienveillant. Il vise à renforcer la pensée critique des enfants, améliorer les relations familiales et soutenir les parents dans leur rôle éducatif",
  };
  return (
    <>
      {/* header */}
      <Header />

      {/* Hero Section */}
      <section
        style={{ backgroundImage: "url(/image/tut-tank.jpeg)" }}
        className="relative bg-cover bg-center bg-fixed py-20 md:py-28 overflow-hidden"
      >
        <div className="mx-auto px-6 md:px-10 relative text-white z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                TUT&apos;TANK
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Un programme d&apos;accompagnement scolaire et social des jeunes
                filles vulnérables
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
                  Nos différentes activités proposées
                </h2>
              </div>
              {/* liste activités */}
              <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {tuttankActivity.map((activity) => (
                  <li
                    key={activity.nom}
                    className="transition-all hover:bg-accent/10 cursor-pointer"
                  >
                    <Card>
                      <CardHeader>
                        <p className="bg-accent/20 w-15 h-15  mx-auto flex flex-col justify-center items-center rounded-full">
                          <span className="block mx-auto">
                            {<activity.icone />}{" "}
                          </span>
                        </p>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardTitle className="text-xl font-semibold">
                          {activity.nom}
                        </CardTitle>
                        <CardDescription>
                          {activity.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
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
          <Link href="/">Autres programmes</Link>
        </Button>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
