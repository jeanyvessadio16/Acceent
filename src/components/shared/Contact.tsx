// Composant contact

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="py-24 px-6 md:px-10 bg-gray-50 flex flex-col justify-center items-center space-y-12">
        {/* titre et description */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez collaborer avec nous ?
            N&apos;hésitez pas à nous envoyer un message via ce formulaire.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-4"></div>
        </div>

        <Card className="w-full bg-white p-8 md:p-10 shadow-lg rounded-3xl border border-gray-100 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

          {/* formulaire */}
          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary font-semibold">
                Nom complet
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Votre nom"
                required
                className="py-6 px-4 bg-gray-50/50 border-gray-200 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-semibold">
                Adresse Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="votre@email.com"
                required
                className="py-6 px-4 bg-gray-50/50 border-gray-200 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-xl"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="subject" className="text-primary font-semibold">
                Sujet
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sujet de votre message"
                required
                className="py-6 px-4 bg-gray-50/50 border-gray-200 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-xl"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message" className="text-primary font-semibold">
                Message
              </Label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Comment pouvons-nous vous aider ?"
                className="w-full min-h-[150px] p-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition-all resize-y"
              ></textarea>
            </div>

            <div className="md:col-span-2 pt-4">
              <Button
                type="submit"
                className="w-full sm:w-auto text-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-full px-10 py-6 font-bold group cursor-pointer"
              >
                Envoyer le message
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </>
  );
}
