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
    { name: "Inscription", href: "/signup" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header className="w-full px-6 md:px-10 py-3 flex items-center justify-between bg-primary/90 backdrop-blur-sm border-b border-gray-800 fixed top-0 left-0 z-50">
        {/* logo ACCEENT */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo-acceent.png"
            alt="Logo Acceent"
            width={130}
            height={130}
          />
        </Link>

        {/* Bouton menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenu(!isMenuOpen)}
            className="md:hidden bg-white/50 hover:text-primary cursor-pointer"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu de navigation */}
        <nav className="max-md:hidden">
          <ul className="flex justify-between items-center">
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 text-white/80 text-md font-medium  hover:text-white transition-colors duration-300`}
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
        <ul>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-primary/90 backdrop-blur-md flex flex-col items-center justify-center gap-3 z-40">
              {navbarItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-xl font-bold text-white hover:text-primary transition-colors duration-300`}
                    onClick={() => setIsMenu(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}
