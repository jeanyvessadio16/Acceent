"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signIn.email({
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
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4">
      <Card className="md:w-lg bg-white shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center uppercase font-bold">
            Se connecter
          </CardTitle>
          {error && <p className="text-red-500">{error}</p>}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            <div>
              <Label htmlFor="email" className="block text-lg mb-0.5">
                Mot de passe <span className="text-red-700">*</span>
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
                placeholder="Entrez vore mot de passe"
                required
                className="w-full rounded-md border border-neutral-700 px-3 py-2"
              />{" "}
            </div>
            <div>
              <Button
                size={"xl"}
                type="submit"
                className="w-full text-lg bg-blue-950 font-medium rounded-md px-4 py-2 hover:bg-blue-800"
              >
                {" "}
                Se connecter
              </Button>{" "}
            </div>
          </form>{" "}
        </CardContent>
        <CardFooter className="border-none">
          <CardDescription className="mx-auto text-lg">
            Vous n&apos;avez pas de compte?{" "}
            <Link href="/sign-up" className="hover:text-blue-800">
              S&apos;inscrire
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </main>
  );
}
