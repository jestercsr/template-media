'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white px-6 py-10 mt-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-2">MediaPulse</h4>
          <p className="text-sm text-gray-400">L’actualité avec du style.</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Liens</h4>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>À propos</li>
            <li>Partenaires</li>
            <li>Mentions légales</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Suivez-nous</h4>
          <p className="text-sm text-gray-400">Twitter – Instagram – LinkedIn</p>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} MediaPulse. Tous droits réservés.
      </div>
    </motion.footer>
  );
}
