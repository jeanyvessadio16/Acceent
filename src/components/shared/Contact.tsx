import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "../../schema/contact";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
      <section className="flex flex-col justify-center items-center px-10 py-16">
        <Card className="max-w-xl md:min-w-xl max-md:w-96 bg-white">
          <CardHeader className="p-5">
            <CardTitle className="text-2xl text-center font-bold">
              CONTATEZ-NOUS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
              <div>
                <Label htmlFor="name" className="text-lg">
                  Prénom & nom <span className="text-red-800">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  {...register("name")}
                  placeholder="Entrer votre prénom et nom"
                  className={`border-gray-300 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-lg">
                  Email <span className="text-red-800">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Entrez votre email"
                  className={`border-gray-300 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="text-lg">
                  Message <span className="text-red-800">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Ecrivez votre ici"
                  className={`border-gray-300 h-32 ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <Button
                  size={"xl"}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-lg cursor-pointer transition hover:bg-accent"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </div>
              <p>{result}</p>
            </form>
          </CardContent>
        </Card>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Message envoyé !</DialogTitle>
            <DialogDescription>
              Votre message a été envoyé avec succès. Nous vous répondrons
              bientôt.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
