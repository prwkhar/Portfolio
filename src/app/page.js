"use client";
import Pdfviewer from "@/components/Pdfviewer";
import Tictactoe from "@/components/tictactoe";
import { motion } from "framer-motion";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [win,setwin] = useState(false);
  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme === "true") {
      setwin(true);
    } else {
      setwin(false);
    }
  }, [])
  const updation = () => {
    console.log("win");
    setwin(true);
    localStorage.setItem("theme", "true");
  };
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        playbaackrate={0.1}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="https://res.cloudinary.com/dijtya7zg/video/upload/v1745955707/background2_knztsy.mp4"
          type="video/mp4"
        />
      </video>

      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-auto text-center pt-16 space-y-6 mb-3"
      >
        <p className="text-5xl md:text-6xl pb-2 font-extrabold relative bg-clip-text text-transparent bg-gradient-to-br from-teal-400 to-blue-500">
          {`Hey, I'm Prakhar Agarwal`}
        </p>

        <p className="text-lg md:text-xl text-gray-300 drop-shadow drop-shadow-blue-500">
          A Full-Stack Web Developer crafting both frontend and backend of web
          applications, ensuring performance, beauty, and brains in every
          project.
        </p>
      </motion.div>
      <div className="flex space-x-4 ">
      <Link href="/about" className="w-[110px] text-center p-2 h-fit rounded-full bg-gradient-to-tr from-slate-600/50 via-blue-800/50 to-black/50 border-2 border-amber-50/50 shadow-2xl shadow-amber-100 animate-gradient-border hover:scale-105 transition-all duration-300">
      {`About`} 
      </Link>
      <Link href="/contact" className="w-[110px] p-2 text-center h-fit rounded-full bg-gradient-to-tr from-slate-600/50 via-blue-800/50 to-black/50 border-2 border-amber-50/50 shadow-2xl shadow-amber-100 animate-gradient-border hover:scale-105 transition-all duration-300">
      {`Contact`} 
      </Link></div>

      {/* TicTacToe Section */}
      {win ?(
        <Pdfviewer/>
      )
      : (
      <motion.div
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-900 mt-5 rounded-2xl shadow-lg shadow-teal-500/10 bg-gradient-to-b from-blue-300/50 to-purple-800/80 backdrop-blur-sm border border-gray-700/40 max-w-[90%] md:max-w-2xl mx-auto mb-10"
      >

        <Tictactoe onwin={updation}/>
      </motion.div>)}
    </div>
  );
}
