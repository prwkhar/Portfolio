"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (optional but adds polish)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-teal-400 hover:text-white transition">
          Prakhar.dev
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link href="/" className="hover:text-teal-400 transition">Home</Link></li>
          <li><Link href="/about" className="hover:text-teal-400 transition">About</Link></li>
          <li><Link href="/projects" className="hover:text-teal-400 transition">Projects</Link></li>
        </ul>

        {/* Mobile menu toggle */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link href="/" onClick={toggleMenu} className="block hover:text-teal-400 transition">Home</Link></li>
            <li><Link href="/about" onClick={toggleMenu} className="block hover:text-teal-400 transition">About</Link></li>
            <li><Link href="/projects" onClick={toggleMenu} className="block hover:text-teal-400 transition">Projects</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
