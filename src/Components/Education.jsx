// export default function Education() {
//   return (
//     <section id="education" className="py-16 bg-dark">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-neonCyan">Education</h2>
//         <p className="mt-4 text-white/80">
//           M.S. in Art & Creative Studies — Dhaka University, 2020–2021, CGPA:
//           3.87
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-neon-light text-3xl font-semibold text-neonCyan text-center relative inline-block"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
          <motion.span
            className="absolute left-0 -bottom-2 w-full h-[3px] bg-neonPurple"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Timeline Card */}
        <motion.div
          className="mt-10 p-6 rounded-lg bg-black/40 border border-neonCyan/40 shadow-neon"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-neonPurple">
            🎓 M.S. in Art & Creative Studies
          </h3>
          <p className="mt-2 text-white/80">Dhaka University — 2020–2021</p>
          <p className="mt-1 text-neonCyan font-bold">CGPA: 3.87</p>
        </motion.div>
      </div>
    </section>
  );
}
