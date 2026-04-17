// Composant partenaire

import { type Partenaire } from "@/types/partenaires";
import { Card } from "../ui/card";
import { partenaires } from "@/data/partenaires";
import Image from "next/image";

export default function Partenaire() {
  const sliderItems = [...partenaires, ...partenaires];

  return (
    <section className="space-y-8 rounded-4xl border border-slate-200/60 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl md:p-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-500">
          Nos partenaires
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Ils accompagnent nos projets.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Une sélection de partenaires engagés et complémentaires qui
          participent à l&apos;impact de nos programmes.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-slate-950/5 py-6 group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-white/0" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-white/0" />

        <div className="partner-slider animate-partner-slide flex items-stretch gap-5 px-6">
          {sliderItems.map((partenaire, index) => (
            <Card
              key={`${partenaire.id}-${index}`}
              className="min-w-70 max-w-[320px] flex-none bg-white/95 border border-slate-200/80 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="space-y-5 p-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-20 w-20 place-items-center rounded-3xl bg-slate-950/5 ring-1 ring-slate-900/5">
                    <Image
                      src={partenaire.logo}
                      alt={partenaire.name}
                      width={68}
                      height={68}
                      className="h-14 w-14 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {partenaire.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {partenaire.description}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-200/80" />

                <a
                  href={partenaire.website}
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Visiter le site
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
