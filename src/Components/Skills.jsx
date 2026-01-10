"use client";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiVercel,SiNetlify, SiRender, 
  SiFirebase, SiJavascript, SiNextdotjs 
} from "react-icons/si";
import { Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "JS", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    title: "Tools & Deploy",
    skills: [
      { name: "Git", icon: <FaGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
     { 
      name: "Netlify", 
      icon: <SiNetlify className="text-[#00C7B7]" /> 
    },
    { 
      name: "Surge", 
      icon: <SiNextdotjs className="text-white" />
    },
    { 
      name: "Render", 
      icon: <SiRender className="text-white" /> 
    },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-20 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 tracking-tighter text-white">TECHNICAL STACK</h2>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              // GLASSMORPHISM CLASS APPLIED HERE:
              className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:border-white/20 transition-all group"
            >
              <h3 className="text-gray-500 text-xs font-black uppercase tracking-widest mb-8">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 group/item">
                    <div className="text-4xl transition-transform duration-300 group-hover/item:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-400 group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}