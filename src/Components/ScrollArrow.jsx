"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollArrow() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }} // Appear after preloader is done
      className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      onClick={scrollToBottom}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scroll</span>
        <ChevronDown size={20} className="text-white/50" />
      </motion.div>
    </motion.div>
  );
}