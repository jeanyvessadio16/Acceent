"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formData = new FormData(e.currentTarget);
    const res = await signUp.email({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center space-y-4 bg-white/45">
      <Card className="md:w-lg bg-white shadow-2xl">
        <CardHeader>
          <CardDescription className="text-2xl text-center font-bold uppercase">
            Inscription
          </CardDescription>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            <div>
              <Label htmlFor="name" className="block text-lg mb-0.5">
                Prénom & Nom <span className="text-red-700">*</span>
              </Label>
              <Input
                name="name"
                placeholder="Entrez votre prénom et nom"
                required
                className="w-full rounded-md border border-neutral-700 px-3 py-2"
              />{" "}
            </div>
            <div>
              <Label htmlFor="email" className="block text-lg mb-0.5">
                Email <span className="text-red-700">*</span>
              </Label>
              <Input
                name="email"
                type="email"
                placeholder="Entrez votre email"
                required
                className="w-full rounded-md border border-neutral-700 px-3 py-2"
              />{" "}
            </div>
            <div>
              <Label htmlFor="password" className="block text-lg mb-0.5">
                Mot de passe <span className="text-red-700">*</span>
              </Label>
              <Input
                name="password"
                type="password"
                placeholder="Entrez un mot de passe"
                required
                minLength={8}
                className="w-full rounded-md border border-neutral-700 px-3 py-2"
              />{" "}
            </div>
            <div>
              <Button
                size={"xl"}
                type="submit"
                className="w-full bg-blue-950 text-lg text-white font-medium rounded-md px-4 py-2 cursor-pointer hover:bg-blue-900"
              >
                {" "}
                Créer compte
              </Button>{" "}
            </div>
          </form>{" "}
        </CardContent>
        <CardFooter className="border-none">
          <CardDescription className="mx-auto text-lg">
            Vous avez déjà un compte?{" "}
            <Link href="/sign-in" className="hover:text-blue-800">
              Se connecter
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}
