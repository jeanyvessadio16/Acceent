// Page Numerique

import LayoutHeader from "@/components/shared/LayoutHeader";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { numeriquePrograms } from "@/data/numerique/programmes";

const numeriqueHeader = {
  titre: "Programme numérique",
  image: "/image/numerique2.png",
};

export default function Numerique() {
  return (
    <>
      <LayoutHeader {...numeriqueHeader}></LayoutHeader>
      <section className="px-10 py-16">
        <h2 className="text-4xl max-md:text-2xl text-center text-accent mb-16 font-bold">
          Liste des prorammes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {numeriquePrograms.map((programme) => (
            <Card key={programme.id} className="max-h-96">
              <Image
                src={programme.image}
                alt={programme.titre}
                width={300}
                height={200}
                className="w-full min-h-48 object-cover rounded-t"
              />
              <div className="px-5 space-y-2">
                <h2 className="text-2xl font-bold">{programme.titre}</h2>
                <p className="text-gray-700">{programme.description}</p>
                <Button variant="outline" asChild>
                  <Link
                    href={programme.lien}
                    className="text-blue-500 hover:underline"
                  >
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
