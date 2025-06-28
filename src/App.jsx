import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <ScrollToTop/>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
