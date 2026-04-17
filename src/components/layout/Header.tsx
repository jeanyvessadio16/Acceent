"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenu] = useState(false);
  const pathname = usePathname();

  // liens items
  const navbarItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#about" },
    // { name: "Programmes", href: "/#programmes" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* Entete */}
      <header className="w-full fixed px-6 md:px-10 py-4 flex justify-between items-center bg-primary/80 backdrop-blur-md border-b border-white/10 z-50 transition-all duration-300">
        {/* logo ACCEENT */}
        <div className="logo relative overflow-hidden group">
          <Link
            href="/"
            className="block transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo/logo-acceent.png"
              alt="Accent logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Bouton de menu */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenu(!isMenuOpen)}
          className="md:hidden text-white hover:bg-white transition-colors cursor-pointer"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>

        {/* navigation menu */}
        <nav className="max-md:hidden">
          <ul className="flex items-center gap-8">
            {navbarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-md font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-secondary font-semibold"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {/* mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden fixed inset-0 top-16 flex flex-col items-center bg-primary/95 backdrop-blur-xl py-10 shadow-2xl z-40 transition-all">
          <ul className="flex flex-col gap-6 text-center w-full px-6">
            {navbarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.href}
                  className="w-full border-b border-white/10 pb-4"
                >
                  <Link
                    onClick={() => setIsMenu(false)}
                    href={item.href}
                    className={`block w-full text-lg transition-colors ${
                      isActive
                        ? "text-secondary font-bold"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
}
