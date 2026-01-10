// import React from "react";
// import { projects } from "../../../data/projects";

// export default async function ProjectPage({ params }) {
//   const { slug } = await params; 

//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return <div className="text-center py-20">Project not found</div>;
//   }

//   return (
//     <section className="py-16 bg-dark max-w-4xl mx-auto px-4">
//       <h2 className="text-3xl font-bold text-neonCyan">{project.name}</h2>
//       <p className="mt-4 text-white/80">{project.description}</p>

//       <div className="mt-6 flex gap-4 flex-wrap">
//         {project.live && (
//           <a href={project.live} target="_blank" className="px-4 py-2 bg-neonCyan text-black rounded">
//             Live Demo
//           </a>
//         )}
//         {project.github && (
//           <a href={project.github} target="_blank" className="px-4 py-2 border border-neonPurple text-neonPurple rounded">
//             GitHub
//           </a>
//         )}
//         {project.githubClient && (
//           <a href={project.githubClient} target="_blank" className="px-4 py-2 border border-neonPurple text-neonPurple rounded">
//             Client Repo
//           </a>
//         )}
//         {project.githubServer && (
//           <a href={project.githubServer} target="_blank" className="px-4 py-2 border border-neonPurple text-neonPurple rounded">
//             Server Repo
//           </a>
//         )}
//       </div>
//     </section>
//   );
// }
// app/projects/[slug]/page.jsx
"use client";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-center py-20">Project not found</div>;

  return (
    <main className="min-h-screen bg-dark pt-28 pb-12 px-4">
      <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 p-8 rounded-3xl shadow-neon">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-neonCyan mb-6 hover:underline">
          <FaArrowLeft /> Back to Projects
        </button>

<img 
  src={project.image} 
  alt={project.name} 
  className="w-full h-64 md:h-[450px] object-cover object-top rounded-3xl mb-8 border border-white/10 shadow-2xl" 
/>

<h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
  {project.name}
</h1>


<div className="flex flex-wrap gap-2 mb-10">
  {project.stack.map((tech) => (
    <span key={tech} className="px-4 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-lg text-xs font-bold uppercase tracking-widest">
      {tech}
    </span>
  ))}
</div>

        <div className="space-y-8 text-white/80">
          <div>
            <h2 className="text-xl font-semibold text-neonPurple mb-2">Description</h2>
            <p className="leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neonPurple mb-2">Challenges Faced</h2>
            <p className="leading-relaxed">{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-neonPurple mb-2">Potential Improvements & Future Plans</h2>
            <p className="leading-relaxed">{project.futurePlans}</p>
          </div>

          
<div className="mt-12 flex flex-wrap gap-4 pt-8 border-t border-white/10">
  <a 
    href={project.live} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white text-black px-4 py-2 rounded-full font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
  >
    <FaExternalLinkAlt /> Live Link
  </a>

  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="border border-white/10 text-white px-4 py-2 rounded-full font-black uppercase tracking-tighter flex items-center gap-2 hover:bg-white hover:text-black transition-all active:scale-95 backdrop-blur-sm"
  >
    <FaGithub /> GitHub Repository
  </a>
</div>
        </div>
      </div>
    </main>
  );
}