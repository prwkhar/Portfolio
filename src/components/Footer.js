"use client";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
          Developed by <span className="text-white font-semibold">Prakhar Agarwal</span> © {new Date().getFullYear()}
        </p>
        <div className="flex gap-6">
          <Link href="https://github.com/prwkhar" target="_blank" className="hover:text-white transition">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com/in/prwkhar" target="_blank" className="hover:text-white transition">
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
