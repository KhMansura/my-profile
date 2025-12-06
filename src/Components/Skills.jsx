const skills = {
  frontend: ["React", "Tailwind CSS", "DaisyUI", "Framer Motion"],
  backend: ["Node.js", "Express.js", "JWT", "MongoDB"],
  tools: ["Vercel", "Netlify", "Render", "Git", "SweetAlert2"],
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-[#0F1224]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-neonCyan">Skills</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat} className="p-4 rounded-lg border border-white/10 bg-black/30 shadow-neon">
              <h3 className="text-neonPurple font-semibold capitalize">{cat}</h3>
              <ul className="mt-3 space-y-2">
                {list.map((s) => (
                  <li key={s} className="text-white/80">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}