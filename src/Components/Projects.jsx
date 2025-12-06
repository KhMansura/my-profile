// import { projects } from "../data/projects"
// import Link from "next/link"

// export default function Projects() {
//   return (
//     <section id="projects" className="py-16 bg-dark">
//       <h2 className="text-3xl font-semibold text-neonCyan text-center">Projects</h2>
//       <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {projects.map((p) => (
//           <div key={p.slug} className="bg-black/40 p-4 rounded-lg shadow-neon hover:scale-105 transition">
//             <img src={p.image} alt={p.name} className="rounded-lg" />
//             <h3 className="mt-4 text-xl">{p.name}</h3>
//             <Link
//               href={`/projects/${p.slug}`}
//               className="mt-2 inline-block px-3 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black"
//             >
//               View More / Details
//             </Link>
//           </div> // ✅ JSX block properly closed here
//         ))}
//       </div>
//     </section>
//   )
// }
// import { projects } from "../data/projects";
// import Link from "next/link";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-16 bg-dark">
//       <h2 className="text-3xl font-semibold text-neonCyan text-center">
//         Projects
//       </h2>
//       <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {projects.map((p) => (
//           <div
//             key={p.slug}
//             className="bg-black/40 p-4 rounded-lg shadow-neon hover:scale-105 transition"
//           >
//             <h3 className="mt-4 text-xl font-semibold text-neonPurple">
//               {p.name}
//             </h3>
//             <p className="mt-2 text-white/70 text-sm">{p.description}</p>
//             <div className="mt-4 flex gap-3">
//               {p.live && (
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   className="px-3 py-2 bg-neonCyan text-black rounded hover:bg-cyan-400 transition"
//                 >
//                   Live
//                 </a>
//               )}
//               {p.github && (
//                 <a
//                   href={p.github}
//                   target="_blank"
//                   className="px-3 py-2 border border-neonPurple text-neonPurple rounded hover:bg-neonPurple hover:text-black transition"
//                 >
//                   GitHub
//                 </a>
//               )}
//               <Link
//                 href={`/projects/${p.slug}`}
//                 className="px-3 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black transition"
//               >
//                 Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { projects } from "../data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-dark">
      <h2 className="text-3xl font-semibold text-neonCyan text-center">Projects</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {projects.map((p) => (
          <div key={p.slug} className="bg-black/40 p-4 rounded-lg shadow-neon hover:scale-105 transition">
            <h3 className="mt-4 text-xl font-semibold text-neonPurple">{p.name}</h3>
            <p className="mt-2 text-white/70 text-sm">{p.description}</p>
            <div className="mt-4 flex gap-3">
              {p.live && (
                <a href={p.live} target="_blank" className="px-3 py-2 bg-neonCyan text-black rounded hover:bg-cyan-400 transition">
                  Live
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" className="px-3 py-2 border border-neonPurple text-neonPurple rounded hover:bg-neonPurple hover:text-black transition">
                  GitHub
                </a>
              )}
              <Link href={`/projects/${p.slug}`} className="px-3 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black transition">
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}