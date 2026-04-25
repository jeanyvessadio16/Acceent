// Composant about

import AboutSection from "@/components/sections/AboutSection";

export default function About() {
  const aboutData = {
    title: "À propos de ACCEENT",
    description:
      "Acceent est une association sénégalaise située à Ziguinchor, dans le quartier de Santhiaba. Elle œuvre principalement dans les domaines de l'éducation, de la culture, de l'entrepreneuriat, du développement durable et du numérique. Son approche se distingue par un ancrage local fort et une volonté de promouvoir une transformation sociale inclusive et durable. Pour découvrir nos actions concrètes, visitez ACCEENT4ELLES, TUT'TANK et notre programme d'incubation ACCEENT'INCUB.",
    imageUrl: "/image/aboutImage.jpg",
  };

  return (
    <>
      {/* sections à propos */}
      <section>
        <AboutSection {...aboutData} />
      </section>
    </>
  );
}
