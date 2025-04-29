"use client";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const projects = [
  {
    title: "Gate Keeper – Apartment Visitor Entry System",
    description:
      "Mobile app for security guards to send visitor details instantly to residents. Real-time updates, built in React Native and Node.js.",
    images: [
      "/flatsec/img1.jpg",
      "/flatsec/img2.jpg",
      "/flatsec/img3.jpg",
      "/flatsec/img4.jpg",
      "/flatsec/img5.jpg",
      "/flatsec/img6.jpg",
    ],
    sourceCode: "https://github.com/prwkhar/flatsec-front",
  },
  {
    title: "Auction Hub – Real-Time Auction Hosting Platform",
    description:
      "Auction platform with real-time bidding, live updates, role-based access, error handling, concurrency management, and responsive design.",
    images: [
      "/auction.png",
      "/auction2.png",
    ],
    video: "https://res.cloudinary.com/dijtya7zg/video/upload/v1745926622/auction_y6m3w6.mp4",
    liveLink: "https://auction-app-frontend-virid.vercel.app/",
    sourceCode: "https://github.com/prwkhar/auction-app-frontend",
    livevideo: "https://www.youtube.com/watch?v=Zue1BFg-uDE",
  },
  {
    title: "Get Meet – Real time video calling website",
    description:
      "WebRTC based video chat app using Socket.io for real-time signaling. Smooth peer-to-peer connection with responsive UI.",
    images: [
      "/GetMeet.png"
    ],
    sourceCode: "https://github.com/prwkhar/GetMeet",
  },
  {
    title: "Todo App – Full Stack Task Manager",
    description:
      "Manage tasks with full CRUD operations. Frontend built with React, backend powered by Node.js & Express. Authentication and robust API.",
    images: [
      "/taskify.png",
      "/taskify2.png"],
    liveLink: "https://taskify-two-sigma.vercel.app/",
    sourceCode: "https://github.com/prwkhar/todo_frontend",
  },
  {
    title: "GetMeChai – Creator Donation Platform (On Going)",
    description:
      "Patreon-style MERN app with Razorpay integration. Donate to creators anonymously without login. Includes creator dashboards & donation logs.",
    images: [
      "/getmeachai.png",
    ],
    sourceCode: "https://github.com/prwkhar/buymechai",
  },
  {
    title: "Cursed Tomb - A 3D FPS Xperience",
    description:
      "A first-person shooter game developed using Unreal Engine and Blueprints. Players engage in time-based shooting challenges in a pre-designed 3D environment. Optimized for smooth gameplay, the game leverages Unreal Engine’s FPS mechanics to deliver an immersive experience.",
    images: [
      "/cursedtomb.png",
      "/cursedtomb2.png",
    ],
    livevideo:"https://youtu.be/N7rKkm_kypA",
  }
];

export default function Project() {
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);
  return (
    <div className="relative flex flex-col items-center py-20 px-4  min-h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        playbaackrate={0.1}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity"
      >
        <source
          src="https://res.cloudinary.com/dijtya7zg/video/upload/v1745955707/background2_knztsy.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className="text-6xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 mt-10 via-blue-50 to-purple-500 animate-pulse drop-shadow-lg">
        PROJECTS
      </h1>

      <div className="flex flex-wrap justify-center gap-12 w-full">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between items-center text-center backdrop-blur-md bg-white/5 border-2 border-gray-700 dark:border-white/10 hover:border-cyan-400 rounded-3xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 p-6 w-[620px] h-[540px] overflow-hidden transform hover:scale-[1.03]"
          >
            {/* Image Slider / Video */}
            <div className="w-full h-[70%] mb-6 p-1 rounded-2xl overflow-hidden flex items-center place-content-center justify-center border-2 border-white/20 shadow-inner shadow-cyan-700/30">
              {proj.video ? (
                <video
                  src={proj.video}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-300 ease-in-out"
                  loop={false}
                  playsInline
                  controls={hoveredVideoIndex === idx}
                  onMouseEnter={() => setHoveredVideoIndex(idx)}
                  onMouseLeave={() => setHoveredVideoIndex(null)}
                />
              ) : (
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation={true}
                  modules={[Navigation]}
                  className="w-full h-full rounded-2xl justify-center items-center"
                >
                  {proj.images.map((img, imgIdx) => (
                    <SwiperSlide key={imgIdx}>
                      <img
                        src={img}
                        alt={`${proj.title} screenshot ${imgIdx + 1}`}
                        className="max-h-full flex justify-center items-center object-contain rounded-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-white tracking-widest drop-shadow-md mb-2">
              {proj.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-gray-300 mb-4 px-2 italic line-clamp-3 group-hover:line-clamp-none transition-all duration-300 ease-in-out">
              {proj.description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center mt-2">
              {proj.liveLink && (
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              )}
              {proj.livevideo && (
                <a
                  href={proj.livevideo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Video
                </a>
              )}
              <a
                href={proj.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}