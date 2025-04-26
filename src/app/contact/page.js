"use client";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
        Contact Me
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
        Feel free to reach out through any platform below!
      </p>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl">
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 w-64">
          <FaEnvelope className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            Email
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 break-all">
            prakharagarwal1434@gmail.com
          </p>
          <a
            href="mailto:prakharagarwal1434@gmail.com"
            className="text-blue-500 hover:underline text-sm"
          >
            Send a Mail
          </a>
        </div>

        <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 w-64">
          <FaLinkedin className="text-blue-700 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            LinkedIn
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Let's connect!
          </p>
          <a
            href="https://www.linkedin.com/in/prwkhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline text-sm"
          >
            View Profile
          </a>
        </div>

        <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all rounded-2xl p-6 w-64">
          <FaGithub className="text-black dark:text-white text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            GitHub
          </h2>
          <p className="text-gray-300 text-sm mb-4">
            Explore my projects
          </p>
          <a
            href="https://github.com/prwkhar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600   hover:underline text-sm"
          >
            Visit GitHub
          </a>
        </div>

      </div>
    </div>
  );
}
