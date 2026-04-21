import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <Card className="md:w-xl p-5 bg-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold uppercase italic">
              Inscription
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-2.5">
              <div className="flex justify-between items-center gap-2.5">
                {/* prenom */}
                <div className="w-full">
                  <Label htmlFor="prenom" className="text-lg mb-0.5">
                    Prénom <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="prenom"
                    required
                    placeholder="Votre prénom"
                    className=""
                  />
                </div>
                {/* nom */}
                <div className="w-full">
                  <Label htmlFor="nom" className="text-lg mb-0.5">
                    Nom <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    type="text"
                    name="nom"
                    required
                    placeholder="Votre nom"
                    className=""
                  />
                </div>
              </div>
              {/* adresse */}
              <div>
                <Label htmlFor="adresse" className="text-lg mb-0.5">
                  Adresse <span className="text-red-700">*</span>
                </Label>
                <Input
                  type="text"
                  name="adresse"
                  required
                  placeholder="Votre adresse"
                  className=""
                />
              </div>

              <div className="flex justify-between items-center gap-2.5">
                {/* email */}
                <div className="w-full">
                  <Label htmlFor="email" className="text-lg mb-0.5">
                    Email <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="Votre email"
                    className=""
                  />
                </div>

                {/* mot de passe */}
                <div className="w-full">
                  <Label htmlFor="password" className="text-lg mb-0.5">
                    Mot de passe <span className="text-red-700">*</span>
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    required
                    placeholder="Votre mot de passe"
                    className=""
                  />
                </div>
              </div>

              {/* bouon validation */}
              <div>
                <Button
                  type="submit"
                  size={"xl"}
                  className="w-full text-lg hover:bg-blue-950 cursor-pointer"
                >
                  S&apos;inscrire
                </Button>
              </div>
            </form>

            {/* lien se connecter */}
            <p className="text-lg text-center mt-2.5">
              Vous avez déjà un compte?{" "}
              <Link href="/login" className="hover:text-blue-950">
                Se connecter
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
