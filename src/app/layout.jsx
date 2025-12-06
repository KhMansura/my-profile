import Footer from "@/Components/Footer"
import "../styles/globals.css"
import Navbar from "@/Components/Navbar"


export const metadata = {
  title: "Khandaker Mansura | Portfolio",
  description: "Junior MERN Stack Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
