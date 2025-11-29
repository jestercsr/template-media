"use client";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaChevronRight,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-950 text-slate-300 border-t border-slate-800"
    >
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="font-bold text-2xl text-transparent bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text mb-4">
              MediaPulse
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Votre source d'actualités indépendantes et vérifiées
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition"
              >
                <FaInstagram
                  size={18}
                  className="text-slate-400 hover:text-slate-300"
                />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition"
              >
                <FaXTwitter
                  size={18}
                  className="text-slate-400 hover:text-slate-300"
                />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition"
              >
                <FaLinkedinIn
                  size={18}
                  className="text-slate-400 hover:text-slate-300"
                />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition"
              >
                <FaFacebookF
                  size={18}
                  className="text-slate-400 hover:text-slate-300"
                />
              </a>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              Sections
              <FaChevronRight size={16} />
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Politique
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Technologie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Économie
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Culture
                </a>
              </li>
            </ul>
          </div>

          {/* Pour Lecteurs */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              Pour Lecteurs
              <FaChevronRight size={16} />
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Articles Premium
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Newsletters
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Archives
                </a>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
              Entreprise
              <FaChevronRight size={16} />
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Publicités
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-slate-200 transition text-sm"
                >
                  Carrières
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-4">Rester Informé</h4>
            <p className="text-slate-400 text-sm mb-3">
              Recevez nos meilleures histoires
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:border-slate-600 focus:outline-none"
              />
              <button className="px-3 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-white font-semibold rounded-lg hover:shadow-lg transition text-sm">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} MediaPulse. Tous droits
              réservés.
            </div>
            <div className="flex gap-6 text-slate-400 text-sm justify-end flex-wrap">
              <a href="#" className="hover:text-slate-200 transition">
                Conditions
              </a>
              <a href="#" className="hover:text-slate-200 transition">
                Confidentialité
              </a>
              <a href="#" className="hover:text-slate-200 transition">
                Cookies
              </a>
              <a href="#" className="hover:text-slate-200 transition">
                Modération
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <p>Indépendant • Vérifié • Transparent</p>
            <p>Édition: France | Langue: Français</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
