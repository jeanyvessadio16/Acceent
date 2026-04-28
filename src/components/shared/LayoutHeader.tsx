import { EducationHeader } from "@/types/bannerHeader";

export default function LayoutHeader({ titre, image }: EducationHeader) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="relative w-full min-h-96 px-6 md:px-24 py-5 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-blue-950/70"></div>
        {/* Gradient overlay pour un effet plus joli */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            {titre}
          </h1>
          {/* Ajout d'une sous-ligne décorative */}
          <div className="mt-4 mx-auto w-24 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </>
  );
}
