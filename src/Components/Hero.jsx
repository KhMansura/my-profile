"use client"; // client component for animation
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 text-center">
      {/* Profile Image with scale + fade */}
      {/* <motion.img
        src="/profile.jpg"
        alt="Frontend Focused MERN Stack Developer"
        className="p-8 mx-auto w-40 h-40 rounded-full ring-4 ring-neonPurple shadow-neon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      /> */}
     <div className="flex flex-col items-center justify-center gap-6">
  {/* Circle with neon glow */}
  <div className="circle-neon rounded-full border-4 border-teal-500 p-6 bg-gradient-to-br from-gray-900 to-black">
    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">KM</h1>
  </div>

  </div>



      {/* Name with slide down */}
      <motion.h1
        className="mt-6 text-4xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Khandaker Mansura
      </motion.h1>

      {/* Title with fade in */}
      <motion.p
        className="mt-2 text-neonCyan"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Junior MERN Stack Developer
      </motion.p>

      {/* Buttons with staggered animation */}
      <motion.div
        className="mt-4 flex justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <a
          href="/Kh Mansura - Resume 2025.12.04.pdf"
          download
          className="text-neon
          flex px-4 py-2 bg-neonCyan text-black rounded shadow-neon hover:bg-cyan-400"
        >
          <FaDownload /> Download Resume
        </a>
        <a
          href="#projects"
          className="px-4 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black"
        >
          View Projects
        </a>
      </motion.div>

      {/* Social Links with fade + hover glow */}
      <motion.div
        className="mt-6 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <a href="https://github.com/KhMansura" className="hover:text-neonCyan">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kh-mansura/"
          className="hover:text-neonCyan"
        >
          LinkedIn
        </a>
        {/* <a href="https://twitter.com/youruser" className="hover:text-neonCyan">
          Twitter
        </a> */}
      </motion.div>
    </section>
  );
}
