
// Components/Projects.jsx
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 lg:px-20">
      <h2 className="text-4xl font-black mb-12">Selected Projects</h2>
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div 
            key={p.slug} 
            // PASTE THE CLASSNAME HERE:
            className="bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px] overflow-hidden hover:border-white/30 transition-all duration-500 group"
          >
            {/* Project Image */}
            <div className="h-64 overflow-hidden">
              <img 
                src={p.image} 
                alt={p.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Project Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-400 mb-6 line-clamp-2">{p.description}</p>
             
<div className="flex flex-wrap gap-2 mb-4">
  {p.stack.map((tech) => (
    <span key={tech} className="text-[10px] font-bold px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400">
      {tech}
    </span>
  ))}
</div>
              <div className="flex gap-4">
                <Link 
                  href={`/projects/${p.slug}`}
                  className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition"
                >
                  Details
                </Link>
                <a 
                  href={p.live} 
                  target="_blank" 
                  className="border border-white/10 px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-black transition"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
