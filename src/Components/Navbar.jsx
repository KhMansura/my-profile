
// "use client";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
//       <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
//         <a href="/" className="text-neonCyan font-bold tracking-wide">KM<span className="text-neonPurple">_DEV</span></a>
        
//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-6 text-sm uppercase font-bold">
//           <li><a href="#about" className="hover:text-neonCyan">About</a></li>
//           <li><a href="#skills" className="hover:text-neonCyan">Skills</a></li>
//           <li><a href="#projects" className="hover:text-neonCyan">Projects</a></li>
//           <li><a href="#education" className="hover:text-neonCyan">Education</a></li>
//           <li><a href="#contact" className="hover:text-neonCyan">Contact</a></li>
//         </ul>

//         {/* Mobile Toggle */}
//         <button className="md:hidden text-neonCyan text-2xl" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden bg-black/90 text-center py-6 space-y-4 uppercase font-bold text-neonCyan border-b border-white/10">
//           <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
//           <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
//           <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
//           <li><a href="#education" className="hover:text-neonCyan">Education</a></li>
//           <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
//         </ul>
//       )}
//     </header>
//   );
// }
// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "History", href: "#history" }, // Changed to match your History component ID
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <header className="fixed top-0 w-full z-[100] backdrop-blur-xl bg-black/50 border-b border-white/5">
//       <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <motion.a 
//           href="/" 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-white font-black tracking-tighter text-xl"
//         >
//           K<span className="text-gray-500">M.</span>
//         </motion.a>
        
//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-8 items-center">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a 
//                 href={link.href} 
//                 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-white transition-colors"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle */}
//         <button 
//           className="md:hidden text-white text-xl" 
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* Mobile Menu with Animation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.ul 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl py-10 flex flex-col items-center space-y-8 border-b border-white/5"
//           >
//             {navLinks.map((link) => (
//               <li key={link.name}>
//                 <a 
//                   href={link.href} 
//                   onClick={() => setIsOpen(false)}
//                   className="text-xs uppercase tracking-[0.5em] font-black text-gray-400 hover:text-white transition-colors"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "History", href: "#history" }, 
    { name: "Contact", href: "#contact" },
  ];

  return (
    
    <header className="fixed top-0 left-0 w-full z-[100] border-b border-white/5 bg-black/60 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="text-white font-black tracking-tighter text-2xl hover:opacity-80 transition-opacity">
          KM<span className="text-gray-500">.</span>
        </a>
        
        {/* Desktop Links  */}
        <ul className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-white transition-all relative group"
              >
                {link.name}
                
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Menu  */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 flex flex-col items-center py-10 gap-8 overflow-hidden"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-[0.4em] font-black text-gray-400 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}