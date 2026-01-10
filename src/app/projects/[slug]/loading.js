"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center">
      {/* The Animated Spinner */}
      <motion.div
        animate={{
          rotate: 360,
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="w-16 h-16 border-2 border-white/20 border-t-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      />
      
      {/* Subtle Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="mt-6 text-xs font-black uppercase tracking-[0.4em] text-gray-500"
      >
        Loading Experience
      </motion.p>
    </div>
  );
}