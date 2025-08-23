import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Trophy, Users, Factory, Rocket, Star } from '@phosphor-icons/react'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: React.ElementType
  category: 'foundation' | 'growth' | 'expansion' | 'innovation' | 'recognition'
}

const timeline: TimelineEvent[] = [
  {
    year: "1973",
    title: "Fundación de la Empresa",
    description: "El Técnico Mecánico Industrial Miguel establece el taller con una visión clara: fabricar piezas de la más alta calidad para la industria colombiana.",
    icon: Factory,
    category: "foundation"
  },
  {
    year: "1980",
    title: "Primer Contrato Industrial",
    description: "Obtuvimos nuestro primer gran contrato con una empresa automotriz, marcando el inicio de nuestra expansión.",
    icon: Trophy,
    category: "growth"
  },
  {
    year: "1985",
    title: "Modernización del Equipamiento",
    description: "Inversión en nueva maquinaria CNC y equipos de alta medición que nos permitió ampliar nuestras capacidades de manufactura de precisión.",
    icon: Rocket,
    category: "innovation"
  },
  {
    year: "1992",
    title: "Expansión a Nuevos Sectores",
    description: "Incursionamos en las industrias de litografía, metalmecánica, laboratorio y alimenticia, diversificando nuestro portafolio especializado.",
    icon: Users,
    category: "expansion"
  },
  {
    year: "1998",
    title: "Implementación de Controles de Calidad",
    description: "Establecimos protocolos rigurosos de control de calidad con equipos de alta medición, consolidando nuestro compromiso con la excelencia.",
    icon: Star,
    category: "recognition"
  },
  {
    year: "2005",
    title: "Segunda Generación",
    description: "La familia se incorpora al negocio, aportando nuevas ideas y tecnologías manteniendo los valores fundacionales.",
    icon: Users,
    category: "growth"
  },
  {
    year: "2010",
    title: "Modernización CNC y Convencional",
    description: "Implementamos sistemas CNC de última generación junto con equipos convencionales especializados para troqueles y moldes de inyección.",
    icon: Rocket,
    category: "innovation"
  },
  {
    year: "2015",
    title: "Reconocimiento Sectorial",
    description: "Fuimos reconocidos como 'Proveedor del Año' por la Asociación de Técnicos Mecánicos Industriales de Colombia.",
    icon: Trophy,
    category: "recognition"
  },
  {
    year: "2020",
    title: "Adaptación Digital",
    description: "Durante la pandemia, implementamos procesos digitales y mantenimiento remoto, asegurando la continuidad del servicio.",
    icon: Rocket,
    category: "innovation"
  },
  {
    year: "2024",
    title: "Hacia el Futuro",
    description: "Continuamos innovando y creciendo, manteniéndonos como líderes en manufactura industrial con presencia digital.",
    icon: Star,
    category: "expansion"
  }
]

const categoryColors = {
  foundation: "bg-primary text-primary-foreground",
  growth: "bg-accent text-accent-foreground", 
  expansion: "bg-secondary text-secondary-foreground",
  innovation: "bg-chart-4 text-white",
  recognition: "bg-chart-5 text-white"
}

const categoryLabels = {
  foundation: "Fundación",
  growth: "Crecimiento",
  expansion: "Expansión", 
  innovation: "Innovación",
  recognition: "Reconocimiento"
}

export default function HistorySection() {
  return (
    <section id="historia" className="py-16 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Nuestra Trayectoria
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-primary">50+ años</span> construyendo historia industrial
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde nuestros humildes inicios hasta convertirnos en referente del sector, 
            cada década ha sido un paso hacia la excelencia en manufactura industrial.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Badge 
              key={key} 
              className={categoryColors[key as keyof typeof categoryColors]}
            >
              {label}
            </Badge>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
          
          {/* Timeline line - Mobile version */}
          <div className="lg:hidden absolute left-8 top-0 h-full w-0.5 bg-border"></div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div 
                key={event.year} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Desktop layout */}
                <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                  <div className={`${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'} w-full`}>
                    <Card className="industrial-hover">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 mb-4">
                            {index % 2 === 0 ? (
                              <>
                                <div>
                                  <Badge className={categoryColors[event.category]}>
                                    {categoryLabels[event.category]}
                                  </Badge>
                                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                                </div>
                                <div className="flex-shrink-0">
                                  <event.icon className="h-8 w-8 text-primary" />
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="flex-shrink-0">
                                  <event.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div>
                                  <Badge className={categoryColors[event.category]}>
                                    {categoryLabels[event.category]}
                                  </Badge>
                                  <h3 className="text-xl font-bold mt-2">{event.title}</h3>
                                </div>
                              </>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="lg:hidden flex items-start gap-4 w-full">
                  {/* Mobile timeline dot */}
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-primary">
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Mobile content */}
                  <div className="flex-1 pb-8">
                    <Card className="industrial-hover">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Badge className={categoryColors[event.category]}>
                              {categoryLabels[event.category]}
                            </Badge>
                            <span className="text-2xl font-bold text-primary">{event.year}</span>
                          </div>
                          <h3 className="text-lg font-bold">{event.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Desktop year badge */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground border-4 border-background">
                    <span className="text-sm font-bold">{event.year}</span>
                  </div>
                </div>

                {/* Desktop empty space for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Nuestros Números Hablan</h3>
            <p className="text-primary-foreground/90">
              Cinco décadas de crecimiento constante y excelencia sostenida
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-primary-foreground/90">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm text-primary-foreground/90">Proyectos entregados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">200+</div>
              <div className="text-sm text-primary-foreground/90">Clientes activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">99%</div>
              <div className="text-sm text-primary-foreground/90">Satisfacción del cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}