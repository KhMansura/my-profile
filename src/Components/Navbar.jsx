// export default function Navbar() {
//   return (
//     <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
//       <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
//         <a href="/" className="text-neonCyan font-bold tracking-wide">
//           KM<span className="text-neonPurple">_DEV</span>
//         </a>
//         <ul className="hidden md:flex gap-6 text-sm">
//           <li><a href="#about" className="hover:text-neonCyan">About</a></li>
//           <li><a href="#skills" className="hover:text-neonCyan">Skills</a></li>
//           <li><a href="#projects" className="hover:text-neonCyan">Projects</a></li>
//           <li><a href="#education" className="hover:text-neonCyan">Education</a></li>
//           <li><a href="#contact" className="hover:text-neonCyan">Contact</a></li>
//         </ul>
//       </nav>
//     </header>
//   )
// }
"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-neonCyan font-bold tracking-wide">KM<span className="text-neonPurple">_DEV</span></a>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm uppercase font-bold">
          <li><a href="#about" className="hover:text-neonCyan">About</a></li>
          <li><a href="#skills" className="hover:text-neonCyan">Skills</a></li>
          <li><a href="#projects" className="hover:text-neonCyan">Projects</a></li>
          <li><a href="#education" className="hover:text-neonCyan">Education</a></li>
          <li><a href="#contact" className="hover:text-neonCyan">Contact</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-neonCyan text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black/90 text-center py-6 space-y-4 uppercase font-bold text-neonCyan border-b border-white/10">
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#education" className="hover:text-neonCyan">Education</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}