// const skills = {
//   frontend: ["React", "Tailwind CSS", "DaisyUI", "Framer Motion"],
//   backend: ["Node.js", "Express.js", "JWT", "MongoDB"],
//   tools: ["Vercel", "Netlify", "Render", "Github", "SweetAlert2"],
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="py-16 bg-[#0F1224]">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-semibold text-neonCyan">Skills</h2>
//         <div className="mt-8 grid md:grid-cols-3 gap-6">
//           {Object.entries(skills).map(([cat, list]) => (
//             <div key={cat} className="p-4 rounded-lg border border-white/10 bg-black/30 shadow-neon">
//               <h3 className="text-neonPurple font-semibold capitalize">{cat}</h3>
//               <ul className="mt-3 space-y-2">
//                 {list.map((s) => (
//                   <li key={s} className="text-white/80">{s}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiNetlify, SiRender, SiFramer } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { BsShieldLock, BsStars } from "react-icons/bs";

const skills = {
  frontend: [
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "DaisyUI", icon: <MdDesignServices className="text-pink-400" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-purple-400" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "JWT", icon: <BsShieldLock className="text-yellow-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  ],
  tools: [
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
    { name: "Render", icon: <SiRender className="text-purple-400" /> },
    { name: "Github", icon: <FaGithub className="text-gray-300" /> },
    { name: "SweetAlert2", icon: <BsStars className="text-yellow-300" /> },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#0F1224]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.h2
          className="text-neon-light text-3xl font-semibold text-neonCyan text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        {/* Animated Cards */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([cat, list], i) => (
            <motion.div
              key={cat}
              className="p-6 rounded-lg border border-white/10 bg-black/30 shadow-neon"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-neonPurple font-semibold capitalize">{cat}</h3>
              <ul className="mt-4 space-y-3">
                {list.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-2 text-white/80 hover:text-neonCyan transition"
                  >
                    {s.icon}
                    {s.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}