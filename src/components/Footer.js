"use client";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative z-10">
      <div className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 py-10 px-6 shadow-inner border-t border-gray-700/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-gray-400 text-center md:text-left"
          >
            Developed by{" "}
            <span className="text-white font-bold hover:text-teal-400 transition">
              Prakhar Agarwal
            </span>{" "}
            © {new Date().getFullYear()}
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              href="https://github.com/prwkhar"
              target="_blank"
              className="group"
            >
              <Github
                size={24}
                className="text-gray-400 group-hover:text-white transition duration-300 group-hover:drop-shadow-[0_0_6px_#00f2ff]"
              />
            </Link>
            <Link
              href="https://linkedin.com/in/prwkhar"
              target="_blank"
              className="group"
            >
              <Linkedin
                size={24}
                className="text-gray-400 group-hover:text-white transition duration-300 group-hover:drop-shadow-[0_0_6px_#00f2ff]"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
