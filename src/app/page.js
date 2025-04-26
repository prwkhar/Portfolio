'use client'
import { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaPython } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiSocketdotio } from "react-icons/si";
import Tictactoe from "@/components/tictactoe";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="max-w-[700px]">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Hey, I'm Prakhar Agarwal
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          A Full-Stack Web Developer building both the Frontend and Backend of Websites and Web Applications, ensuring seamless functionality and contributing to the success of the overall product.
        </p>
          <Tictactoe/>
        </div>
    </main>
  );
}
