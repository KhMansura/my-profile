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
// import { projects } from "../data/projects";
// import Link from "next/link";

// export default function Projects() {
//     console.log("Projects data:", projects);

//   return (
//     <section id="projects" className="py-16 bg-dark">
//       <h2 className="text-3xl font-semibold text-neonCyan text-center">Projects</h2>
//       <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {projects.map((p) => (
//           <div key={p.slug} className="bg-black/40 p-4 rounded-lg shadow-neon hover:scale-105 transition">
//             <h3 className="mt-4 text-xl font-semibold text-neonPurple">{p.name}</h3>
//             <p className="mt-2 text-white/70 text-sm">{p.description}</p>
//             <div className="mt-4 flex gap-3">
//               {p.live && (
//                 <a href={p.live} target="_blank" className="px-3 py-2 bg-neonCyan text-black rounded hover:bg-cyan-400 transition">
//                   Live
//                 </a>
//               )}
//               {p.github && (
//                 <a href={p.github} target="_blank" className="px-3 py-2 border border-neonPurple text-neonPurple rounded hover:bg-neonPurple hover:text-black transition">
//                   GitHub
//                 </a>
//               )}
//               <Link href={`/projects/${p.slug}`} className="px-3 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black transition">
//                 Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from "next/link";

export default function Projects() {
  console.log("Projects data:", projects);

  return (
    <section id="projects" className="py-16 bg-dark">
      <h2 className="text-3xl font-semibold text-neonCyan text-center">
        Projects
      </h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black/40 p-4 rounded-lg shadow-neon"
          >
            {/* Project Image */}
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="rounded-lg w-full h-48 object-cover"
              />
            )}

            {/* Project Title */}
            <h3 className="mt-4 text-xl font-semibold text-neonPurple">
              {p.name}
            </h3>

            {/* Short Description */}
            <p className="mt-2 text-white/70 text-sm">{p.description}</p>

            {/* Links */}
            <div className="mt-4 flex gap-3 flex-wrap">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-neonCyan text-black rounded hover:bg-cyan-400 transition"
                >
                  Live
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 border border-neonPurple text-neonPurple rounded hover:bg-neonPurple hover:text-black transition"
                >
                  GitHub
                </a>
              )}
              <Link
                href={`/projects/${p.slug}`}
                className="px-3 py-2 border border-neonCyan text-neonCyan rounded hover:bg-neonCyan hover:text-black transition"
              >
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
