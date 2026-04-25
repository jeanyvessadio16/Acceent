"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenu] = useState(false);

  // liens items
  const navbarItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#about" },
    // { name: "Inscription", href: "/signup" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-3 fixed top-0 left-0 z-50 bg-primary/95 backdrop-blur-xl border-b border-gray-800 shadow-[0_20px_40px_-25px_rgba(15,23,42,0.85)] transition-all duration-300">
        {/* logo ACCEENT */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo-acceent.png"
            alt="Logo Acceent"
            width={80}
            height={80}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        {/* Bouton menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenu(!isMenuOpen)}
            className="md:hidden bg-white/15 text-white/90 hover:text-white cursor-pointer"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu de navigation */}
        <nav className="max-md:hidden">
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-white/95 text-sm md:text-base lg:text-lg font-semibold hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Menu mobile */}
      <nav>
        {isMenuOpen && (
          <ul className="fixed top-0 left-0 w-full h-screen bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 z-40 px-6">
            {navbarItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  href={item.href}
                  className="block w-full text-center px-6 py-2 text-lg font-bold text-white hover:text-secondary transition-colors duration-300"
                  onClick={() => setIsMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
