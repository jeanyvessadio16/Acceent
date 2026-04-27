"use client";

import Image from "next/image";
import { engagementCulturel } from "@/data/aboutVision";
import { Heart, Music, Users, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CulturalEngagementSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="culture"
      ref={sectionRef}
      className="relative w-full px-6 md:px-10 py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column : Image and Floating Cards */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <Image
                src={engagementCulturel.imageUrl}
                alt={engagementCulturel.title}
                width={800}
                height={600}
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

              {/* Inner Content on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  <Music className="w-6 h-6 text-secondary" />
                  Carnaval de Santhiaba
                </h3>
                <p className="text-gray-200 text-sm md:text-base line-clamp-2">
                  Célébration de la diversité culturelle et de l&apos;identité
                  locale.
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-6 -right-6 lg:-right-12 glass-card-dark p-4 rounded-2xl flex items-center gap-4 animate-float z-30 border border-white/10 shadow-xl hidden md:flex">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                  Valeur
                </p>
                <p className="text-white font-bold text-sm">
                  Inclusion Sociale
                </p>
              </div>
            </div>
          </div>

          {/* Right Column : Text Content */}
          <div
            className={`space-y-8 order-1 lg:order-2 transition-all duration-1000 delay-300 transform ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary font-medium text-sm shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Culture</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Engagement <br />
                <span className="text-gradient">Culturel & Social</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r rounded-full"></div>
            </div>

            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
              <p>
                Acceent joue un rôle clé dans la promotion de la culture comme
                levier de développement durable. Nous sommes un partenaire
                central du{" "}
                <strong className="text-primary font-semibold">
                  Carnaval de Santhiaba
                </strong>
                , un événement vibrant qui célèbre la diversité culturelle et
                l&apos;identité locale.
              </p>
              <p className="mt-4">
                À travers ce carnaval et d&apos;autres initiatives,
                l&apos;organisation réunit divers acteurs culturels et
                institutionnels pour discuter et repenser le rôle de la culture
                dans le développement de nos territoires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
