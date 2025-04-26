"use client"
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaGitAlt, FaLinux, FaAndroid } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiFirebase,  SiC, SiCplusplus } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: FaReact }, // Ideally SiJavascript
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
      className="py-20 px-6 sm:px-12 bg-gray-50 dark:bg-black text-gray-800 dark:text-white"
    >
      <h1 className="text-5xl font-bold text-center mb-16">About Me</h1>

      <div className="flex flex-col-reverse md:flex-row mx-auto gap-16 max-w-6xl items-center">
        <div className="flex-1 text-left">
          <p className="text-lg leading-8 whitespace-pre-line text-gray-700 dark:text-gray-300">
            {aboutInfo}
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <div className="w-fit h-fit hover:rotate-2 rounded-2xl overflow-hidden mb-8 border-4 border-gray-300 dark:border-gray-700 shadow-2xl hover:scale-110 transition-all duration-500 ease-in-out">
            <Image
              src="/me.png"
              alt="Profile Picture"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold text-center mt-20 mb-8">My Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={`skill-${index}`}
              className="flex flex-col items-center justify-center p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-110 hover:rotate-2 hover:bg-amber-300 dark:hover:bg-amber-500 transition-all duration-300 cursor-pointer group"
            >
              <IconComponent className="text-4xl mb-1 group-hover:animate-bounce" />
              <div className="text-sm font-bold text-gray-700 dark:text-white text-center">
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

