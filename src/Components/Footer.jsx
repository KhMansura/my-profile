// "use client";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <motion.footer
//       className="py-6 bg-[#0F1224] border-t border-white/10"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, delay: 0.5 }}
//     >
//       <div className="mx-auto max-w-6xl px-4 text-center text-white/60 text-sm">
//         © {new Date().getFullYear()} <span className="text-neonCyan font-medium">Khandaker Mansura</span> — All Rights Reserved.
//       </div>
//     </motion.footer>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent border-t border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 text-sm font-medium tracking-tight"
        >
          © {new Date().getFullYear()} — <span className="text-white">Khandaker Mansura</span>
        </motion.div>

        {/* Center/Right Side: Design Credit */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-black"
        >
          Designed & Built with <span className="text-white/40">Passion</span>
        </motion.div>

        {/* Right Side: Simple Links (Optional but looks professional) */}
        <div className="flex gap-8">
          <a href="#about" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">About</a>
          <a href="#projects" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Work</a>
          <a href="#contact" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest font-bold">Contact</a>
        </div>
      </div>
    </footer>
  );
}