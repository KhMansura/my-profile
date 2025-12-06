// import { projects } from "../../../data/projects";

// export default function ProjectPage({ params }) {
//   const project = projects.find((p) => p.slug === params.slug);

//   if (!project) return <div className="text-center py-20">Project not found</div>;

//   return (
//     <section className="py-16 bg-dark max-w-4xl mx-auto px-4">
//       <h2 className="text-3xl font-bold text-neonCyan">{project.name}</h2>
//       <p className="mt-4 text-white/80">{project.description}</p>

//       <div className="mt-6 flex gap-4">
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
// import { projects } from "../../../data/projects";

// export default function ProjectPage({ params }) {
//   const project = projects.find((p) => p.slug === params.slug);

//   if (!project) {
//     return <div className="text-center py-20 text-red-400">Project not found</div>;
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
import { projects } from "../../../data/projects";

export default async function ProjectPage({ params }) {
  const { slug } = await params; // ✅ params unwrap করতে হবে

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <section className="py-16 bg-dark max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-neonCyan">{project.name}</h2>
      <p className="mt-4 text-white/80">{project.description}</p>

      <div className="mt-6 flex gap-4 flex-wrap">
        {project.live && (
          <a href={project.live} target="_blank" className="px-4 py-2 bg-neonCyan text-black rounded">
            Live Demo
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" className="px-4 py-2 border border-neonPurple text-neonPurple rounded">
            GitHub
          </a>
        )}
        {project.githubClient && (
          <a href={project.githubClient} target="_blank" className="px-4 py-2 border border-neonPurple text-neonPurple rounded">
            Client Repo
          </a>
        )}
        {project.githubServer && (
          <a href={project.githubServer} target="_blank" className="px-4 py-2 border border-neonPurple text-neonPurple rounded">
            Server Repo
          </a>
        )}
      </div>
    </section>
  );
}