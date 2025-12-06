// export default function Experience() {
//   return (
//     <section id="experience" className="py-16 bg-[#0F1224]">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-neonCyan">Experience</h2>
//         <p className="mt-4 text-white/80">
//           Project-based MERN Development — Built e-commerce and portfolio apps with JWT auth, real-time cart, and animations.
//         </p>
//       </div>
//     </section>
//   )
// }
"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-[#0F1224]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-neon-light text-3xl font-semibold text-neonCyan relative inline-block"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
          {/* Underline animation */}
          <motion.span
            className="absolute left-0 -bottom-2 w-full h-[3px] bg-neonPurple"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="mt-6 text-white/80 text-lg leading-relaxed"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Project-based MERN Development — Built e-commerce and portfolio apps
          with JWT auth, real-time cart, and animations.
        </motion.p>

        {/* Extra animated highlight box */}
        <motion.div
          className="mt-8 p-6 rounded-lg bg-black/30 border border-neonCyan/40 shadow-neon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-neonPurple font-semibold">
            🚀 Hands-on with React, Node.js, Express, MongoDB, and Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  );
}
