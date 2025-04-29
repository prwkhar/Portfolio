"use client";

import Tictactoe from "@/components/tictactoe";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  bg-gray-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-auto text-center pt-16 space-y-6 mb-3 overflow-visible"
      >
        <p className="text-5xl md:text-6xl pb-2 font-extrabold relative bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-blue-500">
          {`Hey, I'm Prakhar Agarwal`}
        </p>

        <p className="text-lg md:text-xl text-gray-300">
          A Full-Stack Web Developer crafting both frontend and backend of web
          applications, ensuring performance, beauty, and brains in every
          project.
        </p>
      </motion.div>

      <motion.div
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-900  mt-5 rounded-2xl shadow-lg shadow-teal-500/10 bg-gradient-to-b from-blue-300/50 to-purple-800/80  backdrop-blur-sm border border-gray-700/40 max-wd-[70%] md:max-w-2xl mx-auto mb-10"
      >
        <Tictactoe />
      </motion.div>
    </div>
  );
}
