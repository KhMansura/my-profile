"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-neon-light text-3xl font-semibold text-neonCyan"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>

        <div className="mt-6 grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="text-white/80 space-y-2"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:iam.khmansura@yandex.com"
                className="hover:text-neonCyan underline"
              >
                iam.khmansura@yandex.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/kh-mansura/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neonCyan underline"
              >
                linkedin.com/in/kh-mansura
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/KhMansura"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neonCyan underline"
              >
                github.com/KhMansura
              </a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="mailto:iam.khmansura@yandex.com"
            method="POST"
            encType="text/plain"
            className="space-y-3"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.input
              name="name"
              whileFocus={{ scale: 1.05, boxShadow: "0 0 10px #00F5D4" }}
              className="w-full px-3 py-2 rounded bg-black/40 border border-white/10 text-white"
              placeholder="Your Name"
            />
            <motion.input
              name="email"
              whileFocus={{ scale: 1.05, boxShadow: "0 0 10px #00F5D4" }}
              className="w-full px-3 py-2 rounded bg-black/40 border border-white/10 text-white"
              placeholder="Your Email"
            />
            <motion.textarea
              name="message"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 10px #7C3AED" }}
              className="w-full px-3 py-2 rounded bg-black/40 border border-white/10 text-white"
              rows="4"
              placeholder="Message"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #FF3D71" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded bg-neonPurple text-black font-semibold shadow-neon hover:bg-purple-400 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
