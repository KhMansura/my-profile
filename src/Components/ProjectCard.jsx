import { projects } from "../data/projects";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <section id="projects" className="py-16 bg-dark">
      <h2 className="text-3xl font-semibold text-neonCyan text-center">
        Projects
      </h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="bg-black/40 p-4 rounded-lg shadow-neon hover:scale-105 transition"
          >
            {/* Project Image */}
            <img src={p.image} alt={p.name} className="rounded-lg" />

            {/* Project Title */}
            <h3 className="mt-4 text-xl font-semibold text-neonPurple">
              {p.name}
            </h3>

            {/* Short Description */}
            <p className="mt-2 text-white/70 text-sm">{p.description}</p>

            {/* Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-neonPurple/20 text-neonCyan border border-neonPurple/40"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-3">
              <a
                href={p.live}
                target="_blank"
                className="px-3 py-2 bg-neonCyan text-black rounded hover:bg-cyan-400 transition"
              >
                Live
              </a>
              <a
                href={p.github}
                target="_blank"
                className="px-3 py-2 border border-neonPurple text-neonPurple rounded hover:bg-neonPurple hover:text-black transition"
              >
                GitHub
              </a>
              <Link
                href={`/projects/${p.slug}`}
                className="px-3 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black transition"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
