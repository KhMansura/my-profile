// export const projects = [

//   // {
//   //   slug: "toy-topia",
//   //   name: "ToyTopia",
//   //   description: "A toy marketplace app with product listing, cart, and responsive UI.",
//   //   live: "https://toytopia-a09-kh.netlify.app",
//   //   github: "https://github.com/KhMansura/Toy-Topia",
//   //   image: "/projects/toy-topia.png",
//   //   stack: ["React", "Node.js", "MongoDB"]
//   // },
//   {
//     slug: "toy-topia",
//     name: "ToyTopia",
//     description: "A comprehensive toy marketplace app where users can browse, add, and manage toy listings.",
//     challenges: "Handling the complex state for filtering and searching through a large database of toys while maintaining a smooth UI.",
//     futurePlans: "Implementing a real-time chat system between buyers and sellers and adding an AI-based toy recommendation engine.",
//     live: "https://toytopia-a09-kh.netlify.app",
//     github: "https://github.com/KhMansura/Toy-Topia",
//     image: "/projects/toy-topia.png",
//     stack: ["React", "Node.js", "MongoDB", "Firebase"]
//   },
//   {
//     slug: "freelance-hub",
//     name: "Freelance Hub",
//     description: "Full-stack freelance platform with client and server repos.",
//     live: "https://freelance-hub-a10.netlify.app",
//     githubClient: "https://github.com/KhMansura/freelance_client",
//     githubServer: "https://github.com/KhMansura/freelance_server",
//     image: "/projects/freelance-hub.png",
//     stack: ["React", "Express", "MongoDB"]
//   },
//   {
//     slug: "hero-app-store",
//     name: "Hero App Store",
//     description: "A hero-themed app store with modern UI and animations.",
//     live: "https://hero-app-store-kh.netlify.app/",
//     github: "https://github.com/KhMansura/hero-app-a08",
//     image: "/projects/app-store.png",
//     stack: ["React", "Tailwind"]
//   },
//   {
//     slug: "sweets-slice",
//     name: "Sweets Slice",
//     description: "A sweet shop app with product showcase and responsive design.",
//     live: "https://sweets-slice.vercel.app/",
//     github: "https://github.com/KhMansura/sweets-slice",
//     image: "/projects/Sweet-slice.png",
//     stack: ["Next.js", "MongoDB"]
//   },
//   {
//     slug: "green-earth",
//     name: "Green Earth",
//     description: "An eco-friendly themed project promoting sustainability.",
//     live: "https://green-earth-kh-a06.netlify.app",
//     image: "/projects/green-earth.png",
//     stack: ["React", "Tailwind"]
//   }
// ];
export const projects = [
{
    slug: "ticket-bari",
    name: "TicketBari",
    description: "A premium MERN-stack travel booking platform featuring role-based dashboards for Users, Vendors, and Admins with integrated secure payments.",
    challenges: "Implementing Role-Based Access Control (RBAC) to securely manage different dashboards and handling real-time seat inventory to prevent concurrent booking conflicts during the Stripe payment process.",
    futurePlans: "Implementing an AI-powered travel route optimizer and integrating a real-time push notification system using Socket.io for instant booking confirmations.",
    live: "https://ticket-bari-89e64.web.app/",
    github: "https://github.com/KhMansura/Ticket-Bari-client.git",
    image: "/projects/a11dark.png", 
    stack: ["MongoDB", "Express", "React", "Node.js", "Firebase", "Stripe"]
  },
{
    slug: "freelance-hub",
    name: "FreelanceHub",
    description: "A data-driven MERN marketplace where clients post jobs and freelancers manage tasks through an interactive dashboard with real-time statistics.",
    challenges: "Implementing complex state synchronization to ensure the Sidebar and Navbar reflect profile modifications instantly, and integrating Recharts to visualize job distribution data fetched from a live MongoDB backend.",
    futurePlans: "Developing a real-time messaging system for direct client-freelancer communication and adding an automated review/rating system after task completion.",
    live: "https://freelance-hub-a10.netlify.app", 
    github: "https://github.com/KhMansura/freelance_client.git",
    image: "/projects/frellancehub.png",
    stack: ["React", "MongoDB", "Express", "Node.js", "Firebase", "Framer Motion", "Recharts"]
  },
  // {
  //   slug: "sweets-slice",
  //   name: "SweetsSlice",
  //   description: "An elegant e-commerce showcase for a dessert shop featuring a smooth, modern UI and product categorization.",
  //   challenges: "Optimizing high-quality image rendering for faster page loads and setting up Next.js dynamic routes for individual product views.",
  //   futurePlans: "Adding a 'Build Your Own Cake' customizer and integrating an automated order management system for the owner.",
  //   live: "https://sweets-slice.vercel.app/",
  //   github: "https://github.com/KhMansura/sweets-slice",
  //   image: "/projects/Sweet-slice.png",
  //   stack: ["Next.js", "Tailwind CSS", "MongoDB"]
  // },
{
    slug: "toy-topia",
    name: "ToyTopia",
    description: "A playful, interactive toy marketplace focused on seamless user experiences, persistent authentication, and dynamic profile management.",
    challenges: "Implementing persistent user sessions that remain stable across page reloads and creating a synchronized profile update system where user changes reflect instantly across the Navbar and Dashboard without requiring a manual refresh.",
    futurePlans: "Integrating a persistent Shopping Cart with MongoDB to save user selections across devices and adding a real-time review system for toy listings.",
    live: "https://toytopia-a09-kh.netlify.app",
    github: "https://github.com/KhMansura/Toy-Topia",
    image: "/projects/toyTopiaHomepng.png", 
    stack: ["React", "Firebase", "Tailwind CSS", "React Router", "Swiper.js"]
  },
{
    slug: "hero-app-store",
    name: "HERO.IO",
    description: "A sophisticated productivity app marketplace featuring local installation tracking, real-time search filtering, and interactive rating visualizations.",
    challenges: "Developing a persistent 'Installation Management' system using LocalStorage to track user-installed apps across sessions, and implementing an optimized case-insensitive search and sorting algorithm for large datasets.",
    futurePlans: "Migrating from LocalStorage to a cloud-based MongoDB sync for cross-device app management and integrating a community-based review system with image uploads.",
    live: "https://hero-app-store-kh.netlify.app/",
    github: "https://github.com/KhMansura/hero-app-a08",
    image: "/projects/app-store.png",
    stack: ["React", "Tailwind CSS", "Recharts", "React Router", "LocalStorage"]
  },
];