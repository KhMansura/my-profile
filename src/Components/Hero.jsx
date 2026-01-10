"use client";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* Left Side: Content  */}
        <div className="lg:col-span-2 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs">
              MERN Stack Developer
            </span>
            <h1 className="mt-4 text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              KHANDAKER <br /> MANSURA
            </h1>
          </motion.div>

          <motion.p 
            className="max-w-xl text-gray-400 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting scalable web applications with a focus on high-end 
            visuals and seamless user experiences. Turning complex logic into elegant interfaces.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="/Kh Mansura - Resume 2025.12.04.pdf"
              download
              className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-lg"
            >
              Resume <Download size={18} />
            </a>
            <a
              href="#projects"
              className="border border-white/10 text-white px-8 py-4 rounded-full font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-white hover:text-black transition-all active:scale-95 backdrop-blur-sm"
            >
              Projects <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div 
            className="flex gap-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/KhMansura" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kh-mansura/" target="_blank" className="text-gray-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Professional Image  */}
        <motion.div 
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Bento-style Frame */}
          {/* <div className="relative z-10 w-full aspect-circle rounded-[40px] overflow-hidden border border-white/10 bg-[#111111]/50 backdrop-blur-md p-4">
            <img 
              src="../../projects/profilePic.jpeg" 
              alt="Khandaker Mansura"
              className="w-full h-full object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div> */}
          {/* Circular Frame Container */}
<div className="relative z-10 w-full max-w-[400px] aspect-square rounded-full overflow-hidden border border-white/10 bg-[#111111]/50 backdrop-blur-md p-4 mx-auto">
  <img 
    src="../../projects/profilePic.jpeg" 
    alt="Khandaker Mansura"
  
    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
  />
</div>
          
          <div className="absolute -inset-4 bg-white/5 blur-3xl -z-10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}

