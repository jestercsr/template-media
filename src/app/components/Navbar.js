'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md px-6 py-4 fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">MediaPulse</h1>
        <ul className="hidden md:flex space-x-6 text-gray-600 text-sm font-medium">
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/articles">Technologie</Link></li>
          <li>Culture</li>
          <li>Économie</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
}
