// Composant about

import AboutSection from "@/components/sections/AboutSection";

export default function About() {
  const aboutData = {
    title: "À propos de ACCEENT",
    description:
      "ACCEENT est une association située à Ziguinchor, dans le quartier de Santhiaba. Elle œuvre principalement dans le domaine de l'éducation, l'entrepreneuriat, du numérique et de la culture. Notre approche se distingue par un ancrage local fort et une volonté de promouvoir une transformation sociale inclusive et durable. Pour découvrir nos actions concrètes, visitez ACCEENT4ELLES, TUT'TANK et notre programme d'incubation ACCEENT'INCUB.",
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
