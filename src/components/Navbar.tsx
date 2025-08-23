import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Phone, MapPin } from '@phosphor-icons/react'
import { Menu } from 'lucide-react'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Quiénes Somos', href: '#quienes-somos' },
  { name: 'Catálogo', href: '#catalogo' },
  { name: 'Historia', href: '#historia' },
  { name: 'Contacto', href: '#contacto' },
]

interface NavbarProps {
  readonly activeSection?: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios y productos industriales. Muchas gracias.")
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'navbar-blur shadow-md' : 'bg-background'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-primary">TMI</h1>
            <p className="text-xs text-muted-foreground">NIT: 19335776-4</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.href.slice(1) 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-foreground'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+57 311 526 4128</span>
          </div>
          <Button onClick={openWhatsApp} className="bg-accent hover:bg-accent/90">
            Cotizar Ahora
          </Button>
        </div>

        {/* Mobile menu button */}
        <Sheet open={mobileMenuOpen} onOpenChange={(open) => {
          setMobileMenuOpen(open)
          if (open) {
            document.body.setAttribute('data-menu-open', 'true')
          } else {
            document.body.removeAttribute('data-menu-open')
          }
        }}>
      <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="!w-screen !max-w-none">
            <div className="flex flex-col space-y-6 mt-6 px-4 sm:px-6">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-base font-bold text-primary">TMI</h1>
                  <p className="text-xs text-muted-foreground">NIT: 19335776-4</p>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left text-base font-medium transition-colors hover:text-primary ${
                      activeSection === item.href.slice(1) ? 'text-primary' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+57 311 526 4128</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Bogotá, Colombia</span>
                </div>
                <Button 
                  onClick={openWhatsApp} 
                  className="w-full bg-accent hover:bg-accent/90"
                >
                  Cotizar por WhatsApp
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}