"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // liens items
  const navbarItems = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-2 fixed top-0 left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#212E53] backdrop-blur-xl border-b border-white/10 shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* logo ACCEENT */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div
              className={`absolute inset-0 bg-white/20 rounded-full blur-md transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100 group-hover:opacity-50"}`}
            ></div>
            <Image
              src="/logo/logo-acceent.png"
              alt="Logo Acceent"
              width={scrolled ? 70 : 90}
              height={scrolled ? 70 : 90}
              priority
              className="transition-all duration-500 relative z-10"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Link>

        {/* Bouton menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenu(!isMenuOpen)}
            className="md:hidden bg-white/10 backdrop-blur-md text-white hover:bg-white/20 cursor-pointer border border-white/10 rounded-full"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu de navigation */}
        <nav className="max-md:hidden">
          <ul className="flex items-center gap-6 lg:gap-10 bg-white/5 backdrop-blur-md px-8 py-2 rounded-full border border-white/10 shadow-inner">
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-white/90 text-sm md:text-base lg:text-lg font-medium hover:text-white transition-colors duration-300 link-underline pb-1"
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
        <div
          className={`fixed inset-0 bg-[#212E53]/95 backdrop-blur-3xl z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <ul className="flex flex-col items-center justify-center gap-8 px-6 w-full max-w-md">
            {navbarItems.map((item, index) => (
              <li
                key={item.name}
                className="w-full text-center transform transition-all duration-500 delay-[index*100ms]"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Link
                  href={item.href}
                  className="inline-block text-lg font-bold text-white hover:text-purple-300 transition-colors duration-300 link-underline pb-2"
                  onClick={() => setIsMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
