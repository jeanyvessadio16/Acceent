// Pieds de page ou footer

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="w-full grid md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-10 px-10 py-24 bg-primary/80">
        {/* logo acceent */}
        <div>
          <Image
            src="/logo/logo-acceent.png"
            width={200}
            height={200}
            alt="Logo Acceent"
          />
        </div>

        {/* contact acceent */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Contactez-nous</h2>
          <ul>
            <li className="text-gray-300 mb-2 flex items-center gap-2">
              <Mail className="text-white" /> contact@acceent.sn
            </li>
            <li className="text-gray-300 mb-2 flex items-center gap-2">
              <Phone className="text-white" /> +221 33 888 88 88
            </li>
            <li className="text-gray-300 mb-2 flex items-center gap-2">
              <MapPin className="text-white" /> Dakar, Sénégal
            </li>
          </ul>
        </div>

        {/* reseaux sociaux acceent */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Suivez-nous</h2>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/acceent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/media-social/facebook.svg"
                  width={40}
                  height={40}
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/acceent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/media-social/twitter.svg"
                  width={40}
                  height={40}
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/acceent"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo/media-social/instagram.svg"
                  width={40}
                  height={40}
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
