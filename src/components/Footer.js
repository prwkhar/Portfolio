"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react"; // icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Name and copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">
            Made by <span className="text-white font-semibold">Prakhar Agarwal</span> © {new Date().getFullYear()}
          </p>
        </div>

        {/* Right - Social links */}
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
