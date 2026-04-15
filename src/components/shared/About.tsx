import AboutSection from "../layout/Aboutsection";
import AboutVision from "../layout/Vision";

export default function About() {
  const aboutData = {
    title: "À propos de ACCEENT",
    description:
      "Acceent est une association sénégalaise située à Ziguinchor, dans le quartier de Santhiaba. Elle œuvre principalement dans les domaines de l'éducation, de la culture, de l'entrepreneuriat, du développement durable et du numérique. Son approche se distingue par un ancrage local fort et une volonté de promouvoir une transformation sociale inclusive et durable. Pour découvrir nos actions concrètes, visitez ACCEENT4ELLES, TUT'TANK et notre programme d'incubation ACCEENT'INCUB.",
    imageUrl: "/image/aboutImage.jpg",
  };

  const aboutVision = {
    title: "Vision et Missions",
    description:
      "Acceent s'engage à autonomiser les populations locales, notamment les jeunes et les femmes, en leur offrant des outils adaptés pour surmonter les défis socio-économiques. L'organisation croit fermement en la création de solutions créatives et adaptées pour améliorer les conditions de vie des communautés locales. Elle aspire à faire de ses bénéficiaires des acteurs du changement, en les dotant des compétences nécessaires pour participer activement au développement de leur territoire. En savoir plus sur notre engagement culturel et social ou consultez notre Agend’Acceent.",
    imageUrl: "/image/vision.jpeg",
  };
  
  return (
    <>
      {/* sections about */}
      <section className="container mx-auto max-w-7xl py-24 px-6 md:px-10 space-y-24">
        <AboutSection {...aboutData} />
        
        <div className="flex justify-center mx-auto opacity-20">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>
        
        <AboutVision {...aboutVision} />
      </section>
    </>
  );
}
