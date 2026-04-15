import { type Section } from "@/types/section";
import Image from "next/image";

export default function AboutVision({ title, description, imageUrl }: Section) {
  return (
    <>
      <section className="w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="w-full space-y-6 order-2 md:order-1">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed text-justify px-1">
            {description}
          </p>
        </div>
        <div className="relative group order-1 md:order-2">
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/40 to-secondary/40 rounded-2xl blur-xl opacity-30 group-hover:opacity-70 transition duration-700"></div>
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="relative w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] border border-white/10"
          />
        </div>
      </section>
    </>
  );
}
