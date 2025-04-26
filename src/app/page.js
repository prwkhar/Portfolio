"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mood, setMood] = useState("😄");

  const toggleMood = () => {
    const moods = ["😄", "😎", "🤓", "🥱", "🤖"];
    const next = moods[Math.floor(Math.random() * moods.length)];
    setMood(next);
  };

  return (
    <main className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
        Prakhar Agarwal
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Full Stack Developer
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:scale-105 cursor-pointer" onClick={toggleMood}>
        <p className="text-lg font-medium text-gray-700 dark:text-white mb-2">
          Current Mood:
        </p>
        <div className="text-4xl">{mood}</div>
        <p className="text-sm text-gray-500 mt-2">Click me to change mood!</p>
      </div>
    </main>
  );
}
