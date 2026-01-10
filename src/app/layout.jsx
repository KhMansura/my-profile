import Footer from "@/Components/Footer"
import "../styles/globals.css"
import Navbar from "@/Components/Navbar"
import SnowBackground from "@/Components/SnowBackground"
import ScrollIndicator from "@/Components/ScrollIndicator";
import ScrollToTop from "@/Components/ScrollToTop";


export const metadata = {
  title: "Khandaker Mansura | Portfolio",
  description: "Junior MERN Stack Developer Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white">
        <SnowBackground />
        <ScrollIndicator />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
