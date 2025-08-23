import { useState, useEffect } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CatalogSection from '@/components/CatalogSection'
import HistorySection from '@/components/HistorySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'quienes-somos', 'catalogo', 'historia', 'contacto']
      const scrollPosition = window.scrollY + 100

      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <CatalogSection />
        <HistorySection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
      
      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  )
}

export default App