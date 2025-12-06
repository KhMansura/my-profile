// export default function About() {
//   return (
//     <section id="about" className="py-16 bg-dark">
//       <div className="max-w-4xl mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-neonCyan">About Me</h2>
//         <p className="mt-4 text-white/80">
//           My programming journey started with curiosity about UI polish and real-time feedback.
//           I love building e-commerce and portfolio apps with consistent theming, animations, and seamless UX.
//           Beyond coding, I enjoy experimenting with neon color palettes, gaming-inspired design, and creative problem solving.
//         </p>
//       </div>
//     </section>
//   )
// }
// "use client";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="py-16 bg-dark">
//       <div className="max-w-4xl mx-auto px-4">
//         {/* Heading animation */}
//         <motion.h2
//           className="text-3xl font-semibold text-neonCyan"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           About Me
//         </motion.h2>

//         {/* Paragraph animation */}
//         <motion.p
//           className="mt-4 text-white/80"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           My programming journey started with curiosity about UI polish and
//           real-time feedback. I love building e-commerce and portfolio apps with
//           consistent theming, animations, and seamless UX. Beyond coding, I
//           enjoy experimenting with neon color palettes, gaming-inspired design,
//           and creative problem solving.
//         </motion.p>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-dark">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading animation */}
        <motion.h2
          className="text-3xl font-semibold text-neonCyan"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph animation */}
        <motion.p
          className="mt-4 text-white/80 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I am a junior MERN stack developer passionate about building visually engaging,
          user‑friendly web applications. My journey began with curiosity about UI polish
          and real‑time feedback, and has grown into hands‑on experience with React,
          Node.js, Express, and MongoDB. I focus on creating recruiter‑ready portfolio
          projects, scalable e‑commerce apps, and polished interfaces with JWT
          authentication, responsive layouts, and smooth animations.
        </motion.p>

        {/* Extra animated highlight */}
        <motion.p
          className="mt-6 text-white/70 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Beyond coding, I enjoy experimenting with neon color palettes, gaming‑inspired
          design, and creative problem solving. My goal is to keep learning, refining my
          craft, and growing within collaborative teams.
        </motion.p>
      </div>
    </section>
  );
}
