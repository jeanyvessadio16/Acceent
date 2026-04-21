import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACCEENT Authentification",
  description: "Inscription et connexion à ACCEENT",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="bg-black">{children}</main>
    </>
  );
}
