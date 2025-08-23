import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Gear, Wrench, Factory, Truck, CheckCircle } from '@phosphor-icons/react'

const services = [
  {
    icon: Gear,
    title: "Fabricación de Piezas",
    description: "Tornillos, engranajes, ejes y piezas personalizadas en acero inoxidable"
  },
  {
    icon: Wrench,
    title: "Servicios CNC y Convencionales",
    description: "Mecanizado de precisión con equipos de alta medición"
  },
  {
    icon: Factory,
  title: "Servicios Especializados",
    description: "Litografía, metalmecánica, laboratorio, alimenticia y moldes"
  },
  {
    icon: Truck,
    title: "Entrega Garantizada",
    description: "Logística eficiente y tiempos de entrega cumplidos"
  }
]

const industries = [
  "Litografía", "Metalmecánica", "Laboratorio", "Alimenticia"
]

export default function HeroSection() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios de fabricación de piezas industriales. Muchas gracias.")
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 metal-texture opacity-5"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Hero Content */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-accent" />
              Más de 50 años de experiencia industrial
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Fabricación de{' '}
                <span className="text-primary">Piezas Industriales</span>{' '}
                de Alta Precisión
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialistas en fabricación de piezas de acero, servicios{' '}
                <span 
                  className="text-primary font-medium cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors" 
                  title="Control Numérico por Computadora"
                >
                  CNC
                </span>{' '}
                y convencionales. Equipos de alta medición para industrias especializadas como 
                litografía, metalmecánica, laboratorio y alimenticia con calidad garantizada.
              </p>
            </div>

            {/* Industries Served */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Servicios que ofrecemos
              </p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <Badge key={industry} variant="outline" className="text-xs">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={openWhatsApp}
                className="bg-accent hover:bg-accent/90 text-accent-foreground industrial-hover"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Cotizar por WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={scrollToContact}
                className="industrial-hover"
              >
                Ver Información de Contacto
              </Button>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-12 lg:col-span-5 lg:mt-0">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 industrial-gradient">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {services.map((service, index) => (
                    <Card key={index} className="industrial-hover">
                      <CardContent className="flex flex-col items-center justify-center p-4 text-center h-full">
                        <service.icon className="h-8 w-8 text-primary mb-2" />
                        <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
                        <p className="text-xs text-muted-foreground leading-tight">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-primary/20 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Proyectos completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Industrias especializadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Tiempo de respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}