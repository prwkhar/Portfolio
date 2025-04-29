"use client";

import { useRef, useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_hdrf3lb", // replace with your EmailJS Service ID
        "template_ov5qbwj", // replace with your EmailJS Template ID
        formRef.current,
        "tjvgwgNh2ZCrPGTsr" // replace with your EmailJS Public Key
      )
      .then(() => {
        setSent(true);
        formRef.current?.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((err) => console.error(err));
  };

  const contactData = [
    {
      icon: <FaEnvelope className="text-4xl mb-4 text-pink-400" />,
      title: "Email",
      detail: "prakharagarwal1434@gmail.com",
      link: "mailto:prakharagarwal1434@gmail.com",
      btn: "Send Email",
    },
    {
      icon: <FaLinkedin className="text-4xl mb-4 text-blue-500" />,
      title: "LinkedIn",
      detail: "Let's connect!",
      link: "https://www.linkedin.com/in/prwkhar/",
      btn: "View Profile",
    },
    {
      icon: <FaGithub className="text-4xl mb-4 text-white" />,
      title: "GitHub",
      detail: "Explore my projects",
      link: "https://github.com/prwkhar",
      btn: "Visit GitHub",
    },
  ];

  return (
    <div className="relative py-24 px-6 min-h-screen  from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex flex-col md:flex-row md:gap-5 items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        playbaackRate={0.1}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity"
      >
        <source
          src="https://res.cloudinary.com/dijtya7zg/video/upload/v1745955707/background2_knztsy.mp4"
          type="video/mp4"
        />
      </video>
<div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center pt-16 space-y-6 mb-3 overflow-visible z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text z-10"
        >
          Contact Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-300 mb-16 text-center z-10"
        >
          Reach out via any platform or drop a message.
        </motion.p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 z-10 w-full max-w-6xl">
          {contactData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg border flex flex-col justify-center items-center border-white/20 p-6 rounded-2xl text-center transition-all shadow-lg"
            >
              {item.icon}
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4 break-all">{item.detail}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white py-2 px-4 rounded-xl font-semibold transition-all"
              >
                {item.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex w-full">
       <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-full max-w-2xl space-y-6 shadow-xl z-10"
>
  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
    <div>
      <label htmlFor="user_name" className="block text-sm mb-1 font-medium">Name</label>
      <input
        type="text"
        name="user_name"
        required
        className="w-full p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
        placeholder="Your name"
      />
    </div>
    <div>
      <label htmlFor="user_email" className="block text-sm mb-1 font-medium">Email</label>
      <input
        type="email"
        name="user_email"
        required
        className="w-full p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
        placeholder="Your email"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm mb-1 font-medium">Message</label>
      <textarea
        name="message"
        rows={5}
        required
        className="w-full p-3 rounded-lg bg-white/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none"
        placeholder="Your message..."
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white py-3 rounded-xl font-semibold transition-all"
    >
      Send Message
    </button>
    {sent && (
      <p className="text-green-300 mt-2 text-center">
        Your message was sent successfully! 🎉
      </p>
    )}
  </form>
</motion.div>
 
      </div>
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-16 -left-16"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -bottom-20 -right-20"></div>
              </div>
  );
}
