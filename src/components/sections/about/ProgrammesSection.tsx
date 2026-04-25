import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { programmes } from "@/data/programmeAcceent";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function ProgrammesSection() {
  return (
    <section
      id="programmes"
      className="px-6 md:px-10 py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-100/50 via-secondary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/50 via-primary/5 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-6 animate-on-scroll">
          <div className="space-y-4">
            <h2 className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-bold tracking-widest text-secondary uppercase">
              Nos Domaines d&apos;Action
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
              Programmes{" "}
              <span className="bg-clip-text bg-gradient-to-r">ACCEENT</span>
            </h3>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos différentes initiatives conçues pour accompagner et
            transformer notre communauté.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {programmes.map((programme, idx) => (
            <Card
              key={programme.id || idx}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgba(132,98,131,0.15)] transition-all duration-500 ease-out border border-white/50 flex flex-col h-full transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

              <CardHeader className="relative z-10 flex flex-col items-center text-center pb-4 pt-8 px-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_10px_20px_rgba(132,98,131,0.2)] group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-purple-600 border border-gray-200 mb-6">
                  <programme.icone
                    className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                  {programme.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow relative z-10 text-center px-8 pb-6">
                <CardDescription className="text-gray-600 flex-grow leading-relaxed text-base">
                  {programme.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="relative z-10 mt-auto px-8 py-6 border-t border-gray-100 flex justify-center bg-gray-50/50 group-hover:bg-purple-50/50 transition-colors duration-500">
                <Link
                  href={programme.link}
                  className="inline-flex items-center gap-2 text-sm text-secondary font-bold hover:text-purple-700 transition-colors group/link"
                >
                  En savoir plus
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/link:shadow-md transition-all">
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/link:translate-x-0.5" />
                  </div>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
