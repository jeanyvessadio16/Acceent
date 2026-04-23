// Pieds de page ou footer

import { Mail, MapPin, Phone, ChevronRight, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { programmes } from "@/data/footer/programmes";
import { mediaLinks } from "@/data/footer/linkmedia";

export default function Footer() {
  return (
    <footer className="w-full bg-primary/80 backdrop-blur-md border-t border-white/10 text-white">
      {/* contenu principal */}
      <div className="px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* logo */}
        <div>
          <Image
            src="/logo/logo-acceent.png"
            alt="Logo Acceent"
            width={150}
            height={50}
          />
        </div>
        {/* programmes */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Programmes</h3>
          <ul className="space-y-3">
            {programmes.map((programme) => (
              <li key={programme.name}>
                <Link href={programme.href}>{programme.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Contact</h3>
          <ul className="space-y-3 flex flex-col">
            <li className="flex items-center gap-3">
              <MapPin />
              <span>Quartier Santhiaba, Ziguinchor, Sénégal</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone />
              <span>+33 1 23 45 67 89 / +221 76 141 70 70</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail />
              <span>info@acceent.org</span>
            </li>
          </ul>
        </div>

        {/* reséaux sociaux */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Suivez-nous</h3>
          <ul className="flex gap-3">
            {mediaLinks.map((link) => (
              <li key={link.name} className="p-2 bg-white/50 rounded">
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
