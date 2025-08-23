import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Funnel, Package, WhatsappLogo } from '@phosphor-icons/react'

interface Product {
  id: string
  name: string
  description: string
  material: string
  industry: string[]
  type: string
  image?: string
  specifications?: string[]
}

const products: Product[] = [
  {
    id: "tornillo-hex-m12",
    name: "Tornillo Hexagonal M12",
    description: "Tornillo hexagonal de alta resistencia para aplicaciones industriales pesadas",
    material: "Acero",
  industry: ["Metalmecánica"],
    type: "Tornillos",
    specifications: ["Longitud: 25-100mm", "Rosca métrica", "Grado 8.8"]
  },
  {
    id: "engranaje-diferencial",
    name: "Engranaje Diferencial",
  description: "Engranaje de precisión para sistemas de transmisión industrial",
    material: "Acero",
  industry: ["Metalmecánica"],
    type: "Engranajes",
    specifications: ["Módulo: 2.5", "Dientes: 24", "Tratamiento térmico"]
  },
  {
    id: "eje-transmision",
    name: "Eje de Transmisión",
    description: "Eje mecanizado para maquinaria industrial y equipos pesados",
    material: "Acero",
  industry: ["Metalmecánica"],
    type: "Ejes",
    specifications: ["Diámetro: 50-200mm", "Longitud personalizada", "Balanceado"]
  },
  {
    id: "tornillo-inox-especial",
    name: "Tornillo Inoxidable Especial",
    description: "Tornillo resistente a la corrosión para industria alimentaria",
    material: "Inoxidable",
    industry: ["Alimenticia"],
    type: "Tornillos",
    specifications: ["AISI 316", "Acabado sanitario", "Cabeza especial"]
  },
  {
    id: "molde-inyeccion",
    name: "Molde de Inyección",
    description: "Molde personalizado para inyección de plásticos industriales",
    material: "Acero",
    industry: ["Litografía"],
    type: "Moldes de inyección",
    specifications: ["Tolerancia ±0.02mm", "Acabado espejo", "Sistema de refrigeración"]
  },
  {
    id: "troquel-precision",
    name: "Troquel de Precisión",
    description: "Troquel para estampado y corte de materiales en litografía",
    material: "Acero",
    industry: ["Litografía", "Metalmecánica"],
    type: "Troqueles",
    specifications: ["Templado y revenido", "Superficie rectificada", "Resistencia 45 HRC"]
  },
  {
    id: "componente-laboratorio",
    name: "Componente de Laboratorio",
    description: "Pieza personalizada para equipos de laboratorio y análisis",
    material: "Inoxidable",
    industry: ["Laboratorio"],
    type: "Personalizadas",
    specifications: ["AISI 304", "Acabado sanitario", "Resistente a químicos"]
  },
  {
    id: "corona-diferencial",
    name: "Corona Diferencial",
    description: "Corona dentada para diferenciales de vehículos comerciales",
    material: "Acero",
  industry: ["Metalmecánica"],
    type: "Engranajes",
    specifications: ["68 dientes", "Módulo 3.0", "Tratamiento superficial"]
  }
]

const industries = ["Litografía", "Metalmecánica", "Laboratorio", "Alimenticia"]
const types = ["Tornillos", "Engranajes", "Ejes", "Personalizadas", "Troqueles", "Moldes de inyección"]

export default function CatalogSection() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const industryMatch = selectedIndustries.length === 0 || product.industry.some(ind => selectedIndustries.includes(ind))
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type)
      
    return industryMatch && typeMatch
    })
  }, [selectedIndustries, selectedTypes])

  const handleIndustryChange = (industry: string, checked: boolean) => {
    setSelectedIndustries(prev => 
      checked ? [...prev, industry] : prev.filter(i => i !== industry)
    )
  }

  const handleTypeChange = (type: string, checked: boolean) => {
    setSelectedTypes(prev => 
      checked ? [...prev, type] : prev.filter(t => t !== type)
    )
  }

  const clearFilters = () => {
    setSelectedIndustries([])
    setSelectedTypes([])
  }

  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hola, estoy interesado en el producto "${productName}". Me gustaría obtener más información, disponibilidad y tiempos de entrega. Muchas gracias.`)
    window.open(`https://wa.me/573115264128?text=${message}`, '_blank')
  }

  const FilterContent = () => (
    <div className="space-y-6">
      
      

      {/* Services Filter */}
      <div className="space-y-3">
        <h4 className="font-semibold">Servicio</h4>
        {industries.map(industry => (
          <div key={industry} className="flex items-center space-x-2">
            <Checkbox
              id={`industry-${industry}`}
              checked={selectedIndustries.includes(industry)}
              onCheckedChange={(checked) => handleIndustryChange(industry, checked as boolean)}
            />
            <label htmlFor={`industry-${industry}`} className="text-sm font-medium leading-none">
              {industry}
            </label>
          </div>
        ))}
      </div>

      <Separator />

      {/* Types Filter */}
      <div className="space-y-3">
        <h4 className="font-semibold">Tipo de Pieza</h4>
        {types.map(type => (
          <div key={type} className="flex items-center space-x-2">
            <Checkbox
              id={`type-${type}`}
              checked={selectedTypes.includes(type)}
              onCheckedChange={(checked) => handleTypeChange(type, checked as boolean)}
            />
            <label htmlFor={`type-${type}`} className="text-sm font-medium leading-none">
              {type}
            </label>
          </div>
        ))}
      </div>

  {/* Clear Filters */}
  {(selectedIndustries.length > 0 || selectedTypes.length > 0) && (
        <>
          <Separator />
          <Button variant="outline" onClick={clearFilters} className="w-full">
            Limpiar Filtros
          </Button>
        </>
      )}
    </div>
  )

  return (
    <section id="catalogo" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-12">
          <Badge variant="secondary" className="inline-flex items-center gap-2">
            <Package className="h-4 w-4" />
            Nuestros Productos
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Catálogo de <span className="text-primary">Productos Industriales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos industriales fabricados con 
            los más altos estándares de calidad y precisión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Funnel className="h-5 w-5" />
                Filtros
              </h3>
              <FilterContent />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mobile Filter Button & Results Count */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando {filteredProducts.length} de {products.length} productos
              </div>
              
              <Sheet
                open={mobileFiltersOpen}
                onOpenChange={(open) => {
                  setMobileFiltersOpen(open)
                  if (open) {
                    document.body.setAttribute('data-filters-open', 'true')
                  } else {
                    document.body.removeAttribute('data-filters-open')
                  }
                }}
              >
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="sm">
                    <Funnel className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="!w-screen !max-w-none">
                  <SheetHeader>
                    <SheetTitle>Filtros</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 px-4 sm:px-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Active Filters */}
            {(selectedIndustries.length > 0 || selectedTypes.length > 0) && (
              <div className="flex flex-wrap gap-2">
                {selectedIndustries.map(industry => (
                  <Badge key={industry} variant="secondary" className="text-xs">
                    {industry}
                    <button
                      onClick={() => handleIndustryChange(industry, false)}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                {selectedTypes.map(type => (
                  <Badge key={type} variant="secondary" className="text-xs">
                    {type}
                    <button
                      onClick={() => handleTypeChange(type, false)}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="industrial-hover">
                    <CardHeader>
                      {/* Product Image Placeholder */}
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-muted/60 flex items-center justify-center mb-4">
                        <Package className="h-12 w-12 text-muted-foreground" />
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {product.material}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                        
                        {/* Industries */}
                        <div className="flex flex-wrap gap-1">
                          {product.industry.map(ind => (
                            <Badge key={ind} variant="secondary" className="text-xs">
                              {ind}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Specifications */}
                      {product.specifications && (
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm">Especificaciones:</h5>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {product.specifications.map((spec) => (
                              <li key={spec} className="flex items-start gap-2">
                                <span className="text-accent">•</span>
                                {spec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* CTA Button */}
                      <Button 
                        onClick={() => openWhatsApp(product.name)}
                        className="w-full bg-accent hover:bg-accent/90"
                      >
                        <WhatsappLogo className="h-4 w-4 mr-2" />
                        Cotizar con un experto
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground mb-4">
                  Intenta ajustar los filtros para ver más resultados
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Limpiar todos los filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}