import { type Section } from "@/types/section";

export function WhoAreWeSection({ description }: Section) {
  return (
    <>
      <section className="w-full px-6 md:px-10 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-6xl font-bold text-primary leading-tight">
                Qui sommes-nous ?
              </h2>
            </div>
            <p className="text-lg md:text-xl md:text-justify leading-relaxed text-gray-700 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>
      <div className="w-40 h-1.5 mx-auto bg-secondary rounded-full"></div>
    </>
  );
}
