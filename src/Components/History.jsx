// Components/History.jsx
"use client";
import { motion } from "framer-motion";

const education = [
  {
    degree: "M.S. in Art & Creative Studies",
    institution: "Dhaka University",
    duration: "2020 — 2021",
    result: "CGPA: 3.87",
    description: "Focused on visual aesthetics, creative problem solving, and design theory."
  },
  {
    degree: "B.S. in Art & Creative Studies",
    institution: "Dhaka University",
    duration: "2016 — 2020",
    result: "Completed",
    description: "Developed a strong foundation in visual arts and composition."
  }
];

const experience = [
  {
    role: "Project-based MERN Developer",
    company: "Personal Portfolio & Freelance",
    duration: "2025 — Present",
    description: "Built scalable e-commerce platforms and job marketplaces using React, Node.js, and MongoDB."
  },
  {
    role: "Junior Web Developer (Trainee)",
    company: "Programming Hero",
    duration: "2025 — 2026",
    description: "Mastered modern frontend technologies and backend integration through intensive projects."
  }
];

export default function History() {
  return (
    <section id="history" className="py-20 px-6 lg:px-20 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Education Section  */}
        <div>
          <h2 className="text-3xl font-black mb-10 tracking-tighter uppercase">Education</h2>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#111111]/50 backdrop-blur-md border border-white/10 p-6 rounded-[24px] relative"
              >
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{edu.duration}</span>
                <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                <p className="text-xs font-bold text-gray-500 mb-2 uppercase">{edu.result}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section  */}
        <div>
          <h2 className="text-3xl font-black mb-10 tracking-tighter uppercase">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-[#111111]/50 backdrop-blur-md border border-white/10 p-6 rounded-[24px]"
              >
                <span className="text-primary text-xs font-bold">{exp.duration}</span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <p className="text-gray-400 text-sm mb-4">{exp.company}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}