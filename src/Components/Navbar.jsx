export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-neonCyan font-bold tracking-wide">
          KM<span className="text-neonPurple">_DEV</span>
        </a>
        <ul className="hidden md:flex gap-6 text-sm">
          <li><a href="#about" className="hover:text-neonCyan">About</a></li>
          <li><a href="#skills" className="hover:text-neonCyan">Skills</a></li>
          <li><a href="#projects" className="hover:text-neonCyan">Projects</a></li>
          <li><a href="#education" className="hover:text-neonCyan">Education</a></li>
          <li><a href="#contact" className="hover:text-neonCyan">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}