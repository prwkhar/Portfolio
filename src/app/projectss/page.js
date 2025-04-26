"use client";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
    liveLink: "https://auction-app-frontend-virid.vercel.app/",
    sourceCode: "https://github.com/prwkhar/auction-app-frontend",
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
    title: "GetMeChai – Creator Donation Platform",
    description:
      "Patreon-style MERN app with Razorpay integration. Donate to creators anonymously without login. Includes creator dashboards & donation logs.",
    images: [
      "/getmeachai.png",
    ],
    sourceCode: "https://github.com/prwkhar/buymechai",
  },
];

export default function Project() {
  return (
    <div className="flex flex-col items-center py-20 px-4">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between items-center text-center bg-green-800/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 w-[620px] h-[530px] overflow-hidden"
          >
            {/* Image Slider */}
            <div className="w-full h-[70%] mb-4 p-1 rounded-2xl overflow-hidden flex items-center place-content-center justify-center">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                className="w-full h-full"
              >
                {proj.images.map((img, imgIdx) => (
                  <SwiperSlide key={imgIdx}>
                    <img
                      src={img}
                      alt={`${proj.title} screenshot ${imgIdx + 1}`}
                      className="max-h-[100%] pt-1 w-auto mx-auto object-contain rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {proj.title}
            </h2>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {proj.description}
            </p>

            <div className="flex gap-3">
              {proj.liveLink && (
                <a
                  href={proj.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-xl transition text-sm"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              )}
              <a
                href={proj.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-3 py-1.5 rounded-xl transition text-sm"
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

