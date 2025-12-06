export default function Footer() {
  return (
    <footer className="py-6 bg-[#0F1224] border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Khandaker Mansura — Built with MERN vibes and neon glow.
      </div>
    </footer>
  )
}