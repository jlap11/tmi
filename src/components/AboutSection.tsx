import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, CheckCircle, Users, Trophy, Handshake, Target } from '@phosphor-icons/react'

const values = [
  {
    icon: CheckCircle,
    title: "Calidad Garantizada",
    description: "Cada pieza cumple con los más altos estándares de calidad industrial"
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Personal altamente calificado con décadas de experiencia en metalurgia"
  },
  {
    icon: Trophy,
    title: "Excelencia Técnica",
    description: "Utilizamos tecnología de vanguardia para resultados precisos"
  },
  {
    icon: Handshake,
    title: "Compromiso Total",
    description: "Cumplimiento de plazos y especificaciones técnicas garantizado"
  }
]

const testimonials = [
  {
    name: "Carlos Rodríguez",
    company: "Metalúrgica del Centro",
    text: "Llevamos 15 años trabajando con TMI. Su calidad y puntualidad son excepcionales.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    company: "Constructora Bolivar",
    text: "Los componentes que fabrican son de la más alta calidad. Han sido clave en nuestros proyectos.",
    rating: 5
  },
  {
    name: "Luis Fernández",
    company: "Industria Alimenticia Norte",
    text: "Excelente servicio técnico y productos duraderos. Los recomendamos completamente.",
    rating: 5
  }
]

const achievements = [
  "Más de 500 clientes satisfechos en toda Colombia",
  "Equipos de alta medición para precisión garantizada",
  "Aliados estratégicos de las principales industrias",
  "Reconocimiento por excelencia en manufactura"
]

export default function AboutSection() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría conocer más sobre la experiencia y servicios de TMI. Muchas gracias.")
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
  }

  return (
    <section id="quienes-somos" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="inline-flex items-center gap-2">
            <Target className="h-4 w-4" />
            Nuestra Historia
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Más de <span className="text-primary">50 años</span> forjando el futuro industrial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde 1973, TMI (Técnico Mecánico Industrial) ha sido pionero en la fabricación de piezas 
            industriales de alta precisión, construyendo relaciones duraderas con nuestros aliados.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Somos una empresa familiar que ha crecido junto con la industria colombiana. 
              Fundada por el Técnico Mecánico Industrial Miguel, nuestra empresa nació con la visión de 
              proporcionar soluciones de manufactura de alta calidad que impulsen el 
              crecimiento industrial del país.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A lo largo de cinco décadas, hemos perfeccionado nuestros procesos de mecanizado{' '}
              <span 
                className="text-primary font-medium cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors" 
                title="Control Numérico por Computadora"
              >
                CNC
              </span>{' '}
              y convencionales, modernizado nuestros equipos de alta medición y mantenido siempre el 
              compromiso con la excelencia que nos caracteriza desde el primer día.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Nuestros Logros</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="industrial-hover">
                <CardContent className="p-6">
                  <value.icon className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Lo que dicen nuestros clientes</h3>
            <p className="text-muted-foreground">
              La confianza de nuestros clientes es nuestro mayor patrimonio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="industrial-hover">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="border-t pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para trabajar con nosotros?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Únete a los cientos de empresas que confían en nuestra experiencia 
                y calidad para sus proyectos industriales más importantes.
              </p>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Solicitar Cotización
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}