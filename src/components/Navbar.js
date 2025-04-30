"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projectss" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950 text-white drop-shadow-2xl drop-shadow-amber-100 shadow-amber-50/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition"
        >
          Prakhar.dev
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 items-center relative">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`transition duration-200 ${
                  pathname === link.href
                    ? "text-teal-400"
                    : "text-white hover:text-teal-400"
                }`}
              >
                {link.name}
              </Link>
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400"
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-15 right-0 w-[50%] mr-3 ">
        <motion.div
          initial={{ height: "100%", opacity: 0.5 ,width: 0}}
          animate={{ height: "100%", opacity: 1, width: "100%" }}
          exit={{ height: 0, opacity: 0, width: 0}}
          className="md:hidden flex font-bold flex-col rounded-2xl shadow-xl shadow-amber-400 border-2 border-purple-400/50 bg-gradient-to-bl from-blue-600/70 to-red-600/70 items-center w-full gap-4 py-4 text-white"
        > 
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg transition ${
                pathname === link.href
                  ? "text-amber-400"
                  : "hover:text-teal-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
        </div>
      )}
    </nav>
  );
}
