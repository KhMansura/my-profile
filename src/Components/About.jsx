
"use client";
import { motion } from "framer-motion";
import { Palette, Code2, Trophy, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl font-black mb-12 tracking-tighter uppercase text-white"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Story Card - Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px] p-8 lg:p-12 hover:border-white/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-white" size={24} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">The Journey</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white">
              With an M.S. in Art & Creative Studies, I don't just write code; <span className="text-gray-500">I compose digital experiences.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              My professional journey is a unique blend of artistic vision and technical precision. 
              I transitioned from Arts to MERN development to bring 
              creativity to life through code. I thrive in the "creative problem-solving" phase, 
              turning a blank canvas into a functional, scalable digital product.
            </p>
          </motion.div>

          {/* Artistic Roots Card - Small */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <Palette className="text-gray-400" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Artist at Heart</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Beyond the code editor, I spend my time painting and exploring gaming-inspired 
                digital designs.
              </p>
            </div>
          </motion.div>

          {/* Discipline Card  */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-white/20 transition-all"
          >
            <Trophy className="text-gray-400" size={32} />
            <div>
              <h4 className="text-xl font-bold mb-2 text-white">Discipline</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                My background in Arts has instilled in me a deep sense of discipline and patience—qualities I now apply to architecting clean, efficient, and scalable codebases
              </p>
            </div>
          </motion.div>

          {/* Philosophy Card - Medium */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px] p-8 lg:p-10 flex items-center gap-6 hover:border-white/20 transition-all"
          >
            <div className="hidden sm:block p-4 bg-white/5 rounded-2xl">
              <BrainCircuit size={40} className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-white">Technical Aesthetics</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                My artistic background ensures every interface I build is as beautiful 
                as it is functional, focusing on UI polish and seamless backend logic.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}