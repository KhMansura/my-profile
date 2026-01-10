"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
        >
          <div className="flex flex-col items-center">
            {/* Minimalist Progress Bar */}
            <div className="w-48 h-[2px] bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-white"
              />
            </div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-[10px] uppercase tracking-[0.5em] text-gray-500 font-black"
            >
              Khandaker Mansura
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}