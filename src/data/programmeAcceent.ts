import { Programme } from "@/types/programme";
import { BookOpen, Briefcase, Globe } from "lucide-react";
export const programmes: Programme[] = [
  {
    id: 1,
    title: "éducation",
    description:
      "Formations adaptées et accompagnement éducatif pour renforcer les capacités et l'autonomie des jeunes en milieu rural.",
    link: "/education",
    icone: BookOpen,
  },
  {
    id: 2,
    title: "Entreprenariat",
    description:
      "Soutien au développement de projets entrepreneuriaux et accompagnement des jeunes entrepreneurs dans leur parcours de création d'entreprise.",
    link: "/entreprenariat",
    icone: Briefcase,
  },
  {
    id: 3,
    title: "Numérique",
    description:
      "Accès à la formation numérique et transformation digitale pour développer les compétences technologiques et stimuler l'innovation locale.",
    link: "/numerique",
    icone: Globe,
  },
  // {
  //   id: 4,
  //   title: "Atelier entrepreneuriat",
  //   description:
  //     "Encourager l'esprit d'entreprise chez les jeunes de Ziguinchor, moments forts à revivre.",
  //   imageUrl: "/image/entreprenariat.jpeg",
  //   link: "/Décourir-Atelier-entrepreneuriat",
  //   category: "Entreprenariat",
  // },
  // {
  //   id: 5,
  //   title: "Carnaval de Santhiaba",
  //   description:
  //     "Un moment fort pour la culture locale et la cohésion sociale, retour en images.",
  //   imageUrl: "/image/carnaval.jpeg",
  //   link: "/Décourir-Carnaval-de-Santhiaba",
  //   category: "Culture",
  // },
  // {
  //   id: 6,
  //   title: "Forum des acteurs locaux",
  //   description:
  //     "Rencontres et échanges autour du développement local à Ziguinchor.",
  //   imageUrl: "/image/forum.jpeg",
  //   link: "/Décourir-Forum-des-acteurs-locaux",
  //   category: "Education",
  // },
  // {
  //   id: 7,
  //   title: "YAAKAAR Jeunesse & Entrepreneuriat (YEAH)",
  //   description:
  //     "Programme d'accompagnement des jeunes sénégalais dans l'entrepreneuriat agricole et le développement durable.",
  //   imageUrl: "/image/yaakarr.png",
  //   link: "/Décourir-YAAKAAR-Jeunesse-&-Entrepreneuriat-(YEAH)",
  //   category: "Entreprenariat",
  // },
  // {
  //   id: 8,
  //   title: "World Robot Olympiad (WRO)",
  //   description:
  //     "Compétition internationale de robotique éducative pour stimuler la créativité et l'innovation technologique chez les jeunes.",
  //   imageUrl: "/image/wro.webp",
  //   link: "/Décourir-World-Robot-Olympiad-(WRO)",
  //   category: "Technologie",
  // },
];
