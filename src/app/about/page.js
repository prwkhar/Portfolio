"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaGithub,
  FaGitAlt, FaLinux, FaAndroid
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase,
  SiC, SiCplusplus
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaReact },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Android Studio", icon: FaAndroid },
  { name: "Linux", icon: FaLinux },
];

const aboutInfo = `
I'm a Computer Science undergraduate and a Full-Stack Web Developer, passionate about building
scalable and efficient web applications. With expertise in the MERN stack, I develop dynamic and responsive
websites that enhance user experience and functionality.

I also enjoy sharing my knowledge and insights on web development, backend systems, and emerging technologies,
helping fellow developers in the community. Feel free to connect with me or explore my work on GitHub, 
where I regularly contribute to open-source projects and share valuable resources.

I'm always open to exciting opportunities where I can contribute, learn, and grow. 
If you have a role that aligns with my skills and experience, don't hesitate to reach out! 
`;

export default function About() {
  return (
    <section
      id="About"
      className="relative py-24 px-6 sm:px-12  from-black via-zinc-900 to-gray-800 text-white overflow-hidden"
    >
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
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600"
      >
        About Me
      </motion.h1>
<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-lg p-10 flex flex-col-reverse md:flex-row mx-auto gap-20 max-w-7xl items-center transition-all duration-500">

        <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex-1 text-left text-lg leading-8 whitespace-pre-line text-white drop-shadow-md"
>
  {aboutInfo}
</motion.div>


        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="flex-1 relative"
        >
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-[0_0_60px_10px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-700 border-4 border-white/20 backdrop-blur-md bg-white/5">

            <Image
              src="/me.png"
              alt="Profile Picture"
              fill
              className="object-cover rounded-full animate-pulse"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-amber-400/20 blur-3xl animate-spin-slow" />
          </div>
        </motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mt-24 mb-12"
      >
         My Skills
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              className="md:p-6 p-3 rounded-xl bg-gradient-to-tl from-amber-300 to-red-500 shadow-lg shadow-blue-500 md:shadow-amber-200/50 md:hover:bg-amber-500/80 text-white flex flex-col items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer group animate-bounce"
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <Icon className="text-5xl mb-2 group-hover:animate-bounce" />
              <p className="text-sm font-bold">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
