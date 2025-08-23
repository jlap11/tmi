import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Envelope, 
  MapPin,
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  ArrowUp
} from '@phosphor-icons/react'

const navigation = {
  main: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Catálogo', href: '#catalogo' },
    { name: 'Historia', href: '#historia' },
    { name: 'Contacto', href: '#contacto' },
  ],
  products: [
    { name: 'Tornillos Industriales', href: '#catalogo' },
    { name: 'Engranajes', href: '#catalogo' },
    { name: 'Ejes de Transmisión', href: '#catalogo' },
    { name: 'Piezas Personalizadas', href: '#catalogo' },
  ],
  industries: [
    { name: 'Litografía', href: '#catalogo' },
    { name: 'Metalmecánica', href: '#catalogo' },
    { name: 'Laboratorio', href: '#catalogo' },
    { name: 'Alimenticia', href: '#catalogo' },
  ]
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios industriales. Muchas gracias.")
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">TMI</h3>
                    <p className="text-xs text-secondary-foreground/70">NIT: 19335776-4</p>
                  </div>
                </div>
                <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                  Más de 50 años de experiencia en fabricación de piezas industriales 
                  de alta precisión con equipos de medición especializados. Calidad garantizada para las industrias más exigentes.
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="font-semibold">Síguenos</h4>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => window.open('https://www.facebook.com/tmi', '_blank')}
                  >
                    <FacebookLogo className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => window.open('https://www.instagram.com/tmi', '_blank')}
                  >
                    <InstagramLogo className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="h-8 w-8 bg-green-600 border-green-600 text-white hover:bg-green-700"
                    onClick={openWhatsApp}
                  >
                    <WhatsappLogo className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h4 className="font-semibold">Navegación</h4>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-6">
              <h4 className="font-semibold">Productos</h4>
              <ul className="space-y-3">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <h5 className="font-semibold text-sm mb-3">Servicios</h5>
                <ul className="space-y-2">
                  {navigation.industries.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-xs text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-semibold">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">+57 311 526 4128</p>
                    <p className="text-xs text-secondary-foreground/70">Lun - Vie: 7AM - 5PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Envelope className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Tecnicoindustrialmiguel25@gmail.com</p>
                    <p className="text-xs text-secondary-foreground/70">Respuesta en 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Bogotá, Colombia</p>
                    <p className="text-xs text-secondary-foreground/70">Zona Industrial</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-4">
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  <WhatsappLogo className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-secondary-foreground/70">
              <p>&copy; 2024 TMI - Técnico Mecánico Industrial. Todos los derechos reservados.</p>
              <div className="flex gap-4">
                <button className="hover:text-secondary-foreground transition-colors">
                  Política de Privacidad
                </button>
                <button className="hover:text-secondary-foreground transition-colors">
                  Términos de Servicio
                </button>
              </div>
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="self-start sm:self-auto"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Volver arriba
            </Button>
          </div>
        </div>
      </div>

      {/* Privacy Notice - Simple banner */}
      <div className="border-t border-secondary-foreground/20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-xs text-secondary-foreground/70">
              Este sitio utiliza cookies para mejorar la experiencia del usuario. 
              Al continuar navegando, aceptas nuestro uso de cookies.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-7 text-xs">
                Aceptar
              </Button>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                Más info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}