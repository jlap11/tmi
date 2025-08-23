import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { 
  Phone, 
  Envelope, 
  MapPin, 
  Clock, 
  WhatsappLogo,
  FacebookLogo,
  InstagramLogo,
  PaperPlaneTilt
} from '@phosphor-icons/react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construir mensaje para WhatsApp con los datos del formulario
    const text = [
      'Consulta desde el sitio web',
      `Nombre: ${formData.name}`,
      formData.company ? `Empresa: ${formData.company}` : null,
      `Email: ${formData.email}`,
      formData.phone ? `Tel: ${formData.phone}` : null,
      '',
      'Detalle:',
      formData.message
    ]
      .filter(Boolean)
      .join('\n')

    const waUrl = `https://wa.me/573115264128?text=${encodeURIComponent(text)}`

    // Abrir WhatsApp con el mensaje
    window.open(waUrl, '_blank')

    // Notificar al usuario
    toast.success('Abriendo WhatsApp con tu mensaje...')
    
    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus servicios industriales. Muchas gracias.")
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
  }

  const openGoogleMaps = () => {
    // Coordenadas de ejemplo para Bogotá
    window.open('https://www.google.com/maps/search/Bogotá+Colombia/@4.7109886,-74.072092,12z', '_blank')
  }

  return (
    <section id="contacto" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Contáctanos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Estamos listos para <span className="text-primary">tu próximo proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a materializar 
            tus ideas con la calidad y precisión que nos caracteriza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Teléfono Principal</p>
                    <p className="text-muted-foreground">+57 311 526 4128</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Envelope className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Email Comercial</p>
                    <p className="text-muted-foreground">Tecnicoindustrialmiguel25@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">Bogotá, Colombia</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-primary"
                      onClick={openGoogleMaps}
                    >
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Horario de Atención</p>
                    <p className="text-muted-foreground">Lun - Vie: 7:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Sáb: 8:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
              <CardContent className="p-6 text-center">
                <WhatsappLogo className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">¿Necesitas respuesta inmediata?</h3>
                <p className="text-green-100 mb-4 text-sm">
                  Chatea con nosotros por WhatsApp y obtén atención personalizada
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-white text-green-600 hover:bg-green-50 w-full"
                >
                  <WhatsappLogo className="h-4 w-4 mr-2" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Síguenos en Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://www.facebook.com/tmi', '_blank')}
                  >
                    <FacebookLogo className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => window.open('https://www.instagram.com/tmi', '_blank')}
                  >
                    <InstagramLogo className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Mantente al día con nuestros proyectos y novedades
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PaperPlaneTilt className="h-5 w-5 text-primary" />
                  Envíanos tu Consulta
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y te responderemos en las próximas 24 horas
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+57 300 123 4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe tu proyecto o consulta en detalle..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      <PaperPlaneTilt className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={openWhatsApp}
                      className="flex-1"
                    >
                      <WhatsappLogo className="h-4 w-4 mr-2" />
                      Enviar por WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Google Maps Embed */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Nuestra Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-4">Mapa interactivo</p>
                    <Button onClick={openGoogleMaps} variant="outline">
                      Abrir en Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}