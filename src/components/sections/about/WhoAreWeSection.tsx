import { type Section } from "@/types/section";
import Image from "next/image";

export function WhoAreWeSection({ description }: Section) {
  return (
    <section className="relative w-full px-6 md:px-10 py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/2"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-slide-left relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
              <span className="text-secondary font-bold text-sm tracking-wider uppercase">
                À propos de nous
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black/80 font-extrabold leading-tight relative">
              Qui sommes-<span>nous ?</span>
              <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-600 mt-8">
              {description}
            </p>

            <div className="pt-6 flex gap-4">
              <div className="flex flex-col border-l-4 border-secondary pl-4">
                <span className="text-3xl font-black text-primary">Local</span>
                <span className="text-sm font-medium text-gray-500 uppercase">
                  Ancrage fort
                </span>
              </div>
              <div className="flex flex-col border-l-4 border-secondary pl-4">
                <span className="text-3xl font-black text-primary">
                  Inclusif
                </span>
                <span className="text-sm font-medium text-gray-500 uppercase">
                  Transformation sociale
                </span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            className="w-full lg:w-1/2 relative animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src="/image/aboutImage.jpg"
                alt="À propos de ACCEENT"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 hidden md:block glass">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-primary">ACCEENT</h4>
                  <p className="text-sm text-gray-500">Ziguinchor, Sénégal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
