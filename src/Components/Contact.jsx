// "use client";
// import { motion } from "framer-motion";

// export default function Contact() {
//   return (
//     <section id="contact" className="py-16 bg-dark">
//       <div className="max-w-6xl mx-auto px-4">
//         <motion.h2
//           className="text-neon-light text-3xl font-semibold text-neonCyan"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Contact
//         </motion.h2>

//         <div className="mt-6 grid md:grid-cols-2 gap-8">
//           {/* Contact Info */}
//           <motion.div
//             className="text-white/80 space-y-2"
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <p>
//               <strong>Email:</strong>{" "}
//               <a
//                 href="mailto:iam.khmansura@yandex.com"
//                 className="hover:text-neonCyan underline"
//               >
//                 iam.khmansura@yandex.com
//               </a>
//             </p>
//             <p>
//               <strong>LinkedIn:</strong>{" "}
//               <a
//                 href="https://www.linkedin.com/in/kh-mansura/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-neonCyan underline"
//               >
//                 linkedin.com/in/kh-mansura
//               </a>
//             </p>
//             <p>
//               <strong>GitHub:</strong>{" "}
//               <a
//                 href="https://github.com/KhMansura"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-neonCyan underline"
//               >
//                 github.com/KhMansura
//               </a>
//             </p>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             action="mailto:iam.khmansura@yandex.com"
//             method="POST"
//             encType="text/plain"
//             className="space-y-3"
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             <motion.input
//               name="name"
//               whileFocus={{ scale: 1.05, boxShadow: "0 0 10px #00F5D4" }}
//               className="w-full px-3 py-2 rounded bg-black/40 border border-white/10 text-white"
//               placeholder="Your Name"
//             />
//             <motion.input
//               name="email"
//               whileFocus={{ scale: 1.05, boxShadow: "0 0 10px #00F5D4" }}
//               className="w-full px-3 py-2 rounded bg-black/40 border border-white/10 text-white"
//               placeholder="Your Email"
//             />
//             <motion.textarea
//               name="message"
//               whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #7C3AED" }}
//               className="w-full px-3 py-2 rounded bg-black/40 border border-white/10 text-white"
//               rows="4"
//               placeholder="Message"
//             />
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.1, boxShadow: "0 0 20px #FF3D71" }}
//               whileTap={{ scale: 0.95 }}
//               className="px-4 py-2 rounded bg-neonPurple text-black font-semibold shadow-neon hover:bg-purple-400 transition"
//             >
//               Send Message
//             </motion.button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-12 tracking-tighter uppercase">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* Email Card */}
            <motion.a 
              href="mailto:iam.khmansura@yandex.com"
              whileHover={{ y: -5 }}
              className="block p-6 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[24px] group hover:border-white/30 transition-all"
            >
              <Mail className="text-gray-500 mb-4 group-hover:text-white transition-colors" size={24} />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
              <p className="text-sm font-medium break-all">iam.khmansura@yandex.com</p>
            </motion.a>

            {/* Phone Card (Requirement #10) */}
            <motion.a 
              href="tel:+8801XXXXXXXXX" // Add your actual phone number here
              whileHover={{ y: -5 }}
              className="block p-6 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[24px] group hover:border-white/30 transition-all"
            >
              <Phone className="text-gray-500 mb-4 group-hover:text-white transition-colors" size={24} />
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Me</p>
              <p className="text-sm font-medium">+880 1XXX XXXXXX</p>
            </motion.a>

            {/* Socials Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a href="https://github.com/KhMansura" target="_blank" className="p-6 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[24px] flex justify-center hover:bg-white hover:text-black transition-all">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/kh-mansura/" target="_blank" className="p-6 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[24px] flex justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form (Requirement #10) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 p-8 bg-[#111111]/50 backdrop-blur-md border border-white/10 rounded-[32px]"
          >
            <form action="mailto:iam.khmansura@yandex.com" method="POST" encType="text/plain" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Name</label>
                  <input type="text" name="name" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Your Email</label>
                  <input type="email" name="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                <textarea name="message" rows="5" required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-white/30 transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-white text-black font-black uppercase tracking-tighter rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}