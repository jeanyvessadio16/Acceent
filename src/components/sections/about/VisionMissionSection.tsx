import Image from "next/image";
import { aboutVision } from "@/data/aboutVision";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export function VisionMissionSection() {
  return (
    <section className="relative w-full px-6 md:px-10 py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image Content - Left side */}
          <div className="lg:col-span-5 order-1 relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10 animate-on-scroll">
              <Image
                src={aboutVision.imageUrl}
                alt={aboutVision.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <Lightbulb className="w-10 h-10 mb-4 text-purple-300" />
                <h3 className="text-2xl font-bold mb-2">Notre Vision</h3>
                <p className="text-white/90 text-sm">
                  Une communauté locale forte, autonome et actrice de son
                  développement.
                </p>
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-secondary/30 rounded-3xl -z-0 translate-x-4 translate-y-4"></div>
          </div>

          {/* Text Content - Right side */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:pl-10 animate-slide-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  Notre Mission
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
                Catalyser le{" "}
                <span className="bg-clip-text bg-gradient-to-r">
                  changement
                </span>
              </h2>
            </div>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600">
              Acceent s&apos;engage à autonomiser les populations locales,
              notamment les jeunes et les femmes, en leur offrant des outils
              adaptés pour surmonter les défis socio-économiques.
            </p>

            <div className="space-y-6 pt-4">
              {/* Mission item 1 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">
                    Solutions Créatives
                  </h4>
                  <p className="text-gray-600">
                    Création de solutions adaptées pour améliorer les conditions
                    de vie des communautés locales.
                  </p>
                </div>
              </div>

              {/* Mission item 2 */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">
                    Acteurs du Changement
                  </h4>
                  <p className="text-gray-600">
                    Doter les bénéficiaires des compétences nécessaires pour
                    participer activement au développement de leur territoire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
