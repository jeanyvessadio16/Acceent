import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "../../schema/contact";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", "9f61db8b-108b-4771-b30b-d250af190b1f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();
    if (responseData.success) {
      setResult("Message envoyé avec succès !");
      setIsDialogOpen(true);
      reset();
    } else {
      setResult("Erreur lors de l'envoi.");
    }
  };

  return (
    <>
      <section className="relative px-4 sm:px-6 md:px-10 py-24 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-100/50 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h3 className="text-3xl md:text-5xl font-extrabold">
              Contactez-nous
            </h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Une question, une suggestion ou envie de collaborer ?
              N&apos;hésitez pas à nous envoyer un message.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
            {/* Colonne de gauche: Infos de contact */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-blue-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden animate-slide-left">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/4">
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFFFFF"
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90,-18.1,88.5,-3.3C87,11.5,81.4,25.7,73.4,37.9C65.4,50.1,55,60.3,42.5,67.6C30,74.9,15,79.3,0.3,78.8C-14.4,78.3,-28.8,72.9,-41.8,65.8C-54.8,58.7,-66.4,49.9,-75.1,38.5C-83.8,27.1,-89.6,13.1,-89.8,-1C-90,-15.1,-84.6,-29.3,-75.6,-40.4C-66.6,-51.5,-54.1,-59.5,-40.9,-67.2C-27.7,-74.9,-13.8,-82.3,1.3,-84.5C16.4,-86.7,30.6,-83.6,44.7,-76.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Informations
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <MapPin className="h-6 w-6 text-purple-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">
                      Notre Adresse
                    </h4>
                    <p className="text-blue-100">
                      Quartier Santhiaba, Ziguinchor
                      <br />
                      Sénégal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-purple-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Téléphone</h4>
                    <p className="text-blue-100">+221 76 141 70 70</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-purple-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-blue-100">info@acceent.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne de droite: Formulaire */}
            <div className="lg:col-span-3">
              <Card
                className="h-full bg-white shadow-xl border-none rounded-3xl animate-on-scroll"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="p-8 sm:p-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Prénom & nom <span className="text-secondary">*</span>
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          {...register("name")}
                          placeholder="Votre prénom et nom"
                          className={`bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/50 rounded-xl h-12 transition-all ${errors.name ? "border-red-500" : ""}`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 font-medium">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Email <span className="text-secondary">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="votre@email.com"
                          className={`bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/50 rounded-xl h-12 transition-all ${errors.email ? "border-red-500" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1 font-medium">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Message <span className="text-secondary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Comment pouvons-nous vous aider ?"
                        className={`bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-secondary/50 rounded-xl h-40 resize-none transition-all ${errors.message ? "border-red-500" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 font-medium">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-4">
                      <Button
                        size="lg"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
                      >
                        {isSubmitting ? (
                          "Envoi en cours..."
                        ) : (
                          <>
                            Envoyer le message
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white sm:rounded-2xl border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-primary">
              Message envoyé !
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Merci de nous avoir contactés. Votre message a été envoyé avec
              succès. Nous vous répondrons dans les plus brefs délais
              (généralement sous 48h).
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="rounded-full px-8 bg-secondary hover:bg-secondary/90"
            >
              Fermer
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
