"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-500 dark:text-teal-300">
          Prakhar.dev
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-teal-500 dark:hover:text-teal-300 transition">Home</Link>
          <Link href="/about" className="hover:text-teal-500 dark:hover:text-teal-300 transition">About</Link>
          <Link href="/projectss" className="hover:text-teal-500 dark:hover:text-teal-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-teal-500 dark:hover:text-teal-300 transition">Contact</Link>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white dark:bg-gray-900">
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-teal-500">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-teal-500">About</Link>
          <Link href="/projectss" onClick={() => setMenuOpen(false)} className="hover:text-teal-500">Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-teal-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
