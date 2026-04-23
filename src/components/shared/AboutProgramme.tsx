import { ReactNode } from "react";

interface AboutProgramme {
  children: ReactNode;
  titre: string;
  description: string;
}

export default function AboutPrgramme({
  children,
  titre,
  description,
}: AboutProgramme) {
  return (
    <>
      <section className="px-10">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl max-md:text-3xl font-bold"> {titre} </h1>
          <p className="text-lg"> {description} </p>
        </div>
        {children}
      </section>
    </>
  );
}
