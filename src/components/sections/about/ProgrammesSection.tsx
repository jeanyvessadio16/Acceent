import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { programmes } from "@/data/programmeAcceent";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function ProgrammesSection() {
  return (
    <section
      id="programmes"
      className="px-6 md:px-10 py-16 md:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-bold tracking-widest text-secondary uppercase">
              Nos Domaines d&apos;Action
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">
              Programmes ACCEENT
            </h3>
          </div>
          <div className="w-32 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {programmes.map((programme, idx) => (
            <Card
              key={programme.id || idx}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ease-out border border-gray-100 flex flex-col h-full transform hover:-translate-y-1.5 hover:border-primary/30"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 -translate-y-2 pointer-events-none z-0"></div>

              <CardHeader className="relative z-10 flex flex-col items-center text-center pb-2 pt-6 px-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-md group-hover:bg-primary border border-primary/10 mb-3">
                  <programme.icone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                </div>
                <CardTitle className="text-lg font-bold text-accent capitalize group-hover:text-primary transition-colors duration-300">
                  {programme.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col flex-grow relative z-10 text-center px-6 pb-4">
                <CardDescription className="text-gray-600 flex-grow leading-relaxed text-sm">
                  {programme.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="relative z-10 mt-auto px-6 py-4 border-t border-gray-100/50 flex justify-center">
                <Link
                  href={programme.link}
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-accent transition-colors group/link"
                >
                  En savoir plus
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/link:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
