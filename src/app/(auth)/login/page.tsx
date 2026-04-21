import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center">
        <Card className="md:w-xl p-5 bg-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold uppercase italic">
              Se connecter
            </CardTitle>
            <CardDescription className="text-lg text-center">
              Entrez votre email et mot de passe pour se connecter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-2.5">
              <div className="space-y-2.5">
                {/* email */}
                <div>
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
                <div>
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
                  Se connecter
                </Button>
              </div>
            </form>

            {/* lien se connecter */}
            <p className="text-lg text-center mt-2.5">
              Vous avez déjà un compte?{" "}
              <Link href="/signup" className="hover:text-blue-950">
                S&apos;`inscire
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
