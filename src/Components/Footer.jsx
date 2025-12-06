"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-6 bg-[#0F1224] border-t border-white/10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} <span className="text-neonCyan font-medium">Khandaker Mansura</span> — All Rights Reserved.
      </div>
    </motion.footer>
  );
}