import Image from "next/image";
import { engagementCulturel } from "@/data/aboutVision";

export function CulturalEngagementSection() {
  return (
    <section id="culture" className="w-full px-6 md:px-10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-primary leading-tight">
            Engagement culturel et social
          </h2>
          <div className="w-52 h-1 mx-auto bg-accent rounded-full"></div>
        </div>
        <br />
        <div className="mt-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl text-accent font-bold leading-tight">
                Carnaval de Santhiaba
              </h2>
            </div>
            <p className="text-lg md:text-xl md:text-justify leading-relaxed text-gray-700">
              Acceent joue un rôle clé dans la promotion de la culture comme
              levier de développement durable. Elle est notamment partenaire
              central du Carnaval de Santhiaba, un événement qui célèbre la
              diversité culturelle et l&apos;identité locale. À travers ce
              carnaval, l&apos;organisation réunit divers acteurs culturels et
              institutionnels pour discuter du rôle de la culture dans le
              développement des territoires.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src={engagementCulturel.imageUrl}
                alt={engagementCulturel.title}
                width={600}
                height={400}
                className="w-full h-80 md:h-96 lg:h-96 rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
