module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0B12",
        neonCyan: "#00F5D4",
        neonPurple: "#7C3AED",
        neonPink: "#FF3D71",
      },
      boxShadow: {
        neon: "0 0 20px #00F5D4, 0 0 40px #7C3AED",
      },
    },
  },
  plugins: [require("daisyui")],
}