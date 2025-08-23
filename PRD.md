# PRD - Ingeniero Miguel SAS

Sitio web corporativo para empresa metalúrgica con más de 50 años de experiencia en fabricación de piezas de hierro, servicios de torno y maquinaria industrial.

**Experience Qualities**:
1. **Profesional**: La experiencia debe transmitir confianza, solidez y competencia técnica propia de una empresa con 50+ años de trayectoria
2. **Accesible**: Navegación intuitiva que permita a clientes industriales encontrar productos y servicios rápidamente
3. **Confiable**: Diseño robusto que refleje la calidad y durabilidad de los productos metálicos que fabrican

**Complexity Level**: Light Application (multiple features with basic state)
- Incluye catálogo de productos con filtros, navegación multi-sección, formularios de contacto y funcionalidades de WhatsApp integradas

## Essential Features

### Navegación Principal
- **Functionality**: Sistema de navegación responsive con 5 secciones principales
- **Purpose**: Organizar el contenido de manera lógica para diferentes tipos de visitantes (clientes actuales, prospectos, partners)
- **Trigger**: Click en elementos del menú principal o scroll automático
- **Progression**: Header fijo → Click sección → Smooth scroll → Contenido destacado → CTA visible
- **Success criteria**: Tiempo de navegación < 3 clicks para cualquier información, mobile-friendly

### Catálogo de Productos con Filtros
- **Functionality**: Visualización de productos con sistema de filtros por Material, Industria y Tipo de pieza
- **Purpose**: Permitir a clientes industriales encontrar productos específicos para sus necesidades
- **Trigger**: Acceso a sección "Catálogo" desde navegación principal
- **Progression**: Catálogo → Aplicar filtros → Ver productos → Click "Cotizar" → WhatsApp con mensaje pre-formateado
- **Success criteria**: Filtros funcionan en combinación, productos se muestran correctamente, integración WhatsApp operativa

### Integración WhatsApp para Cotizaciones
- **Functionality**: Botones de cotización que abren WhatsApp con mensajes personalizados por producto
- **Purpose**: Convertir interés en leads calificados de manera inmediata
- **Trigger**: Click en "Cotizar con un experto" en cualquier producto
- **Progression**: Click botón → Abrir WhatsApp → Mensaje pre-rellenado con nombre del producto → Cliente completa consulta
- **Success criteria**: 100% de productos tienen botón funcional, mensaje incluye nombre correcto del producto

### Línea de Tiempo Histórica
- **Functionality**: Visualización cronológica de 50+ años de historia empresarial
- **Purpose**: Establecer credibilidad y experiencia ante clientes potenciales
- **Trigger**: Navegación a sección "Historia y experiencia"
- **Progression**: Scroll entrada → Animación timeline → Hitos aparecen progresivamente → Testimonios/logros destacados
- **Success criteria**: Timeline responsive, contenido organizado por décadas, animaciones suaves

### Sistema de Contacto Multi-canal
- **Functionality**: Información de contacto completa con mapa, redes sociales y WhatsApp prominente
- **Purpose**: Facilitar múltiples vías de comunicación según preferencia del cliente
- **Trigger**: Acceso a sección "Contacto" o footer
- **Progression**: Ver contacto → Seleccionar canal preferido → Click acción → Contacto directo
- **Success criteria**: Todos los canales funcionan, mapa interactivo, WhatsApp siempre visible

## Edge Case Handling
- **Productos sin imagen**: Mostrar placeholder con ícono de herramienta industrial
- **Filtros sin resultados**: Mensaje claro con sugerencia de modificar criterios
- **WhatsApp no disponible**: Fallback a formulario de contacto tradicional
- **Conexión lenta**: Loading states y lazy loading para imágenes
- **Navegadores antiguos**: Graceful degradation manteniendo funcionalidad core

## Design Direction
El diseño debe evocar robustez industrial, precisión técnica y confiabilidad establecida, con una estética moderna que respete la tradición metalúrgica. Interface minimalista que priorice la información de productos y facilite la generación de leads comerciales.

## Color Selection
Complementary (opposite colors) - Utilizando rojo corporativo como primary con elementos de contraste en escala de grises y acentos metálicos para evocar la industria del hierro y acero.

- **Primary Color**: Rojo industrial (oklch(0.55 0.22 25)) - transmite fuerza, confianza y presencia establecida en el mercado
- **Secondary Colors**: Blanco puro (oklch(1 0 0)) para limpieza y Gris acero (oklch(0.4 0.02 270)) para elementos técnicos
- **Accent Color**: Naranja metálico (oklch(0.65 0.15 45)) para CTAs y elementos importantes que requieren atención inmediata
- **Foreground/Background Pairings**: 
  - Background blanco (oklch(1 0 0)): Texto principal gris oscuro (oklch(0.2 0.01 270)) - Ratio 16.75:1 ✓
  - Primary rojo (oklch(0.55 0.22 25)): Texto blanco (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent naranja (oklch(0.65 0.15 45)): Texto blanco (oklch(1 0 0)) - Ratio 4.8:1 ✓
  - Card gris claro (oklch(0.97 0.005 270)): Texto gris oscuro (oklch(0.2 0.01 270)) - Ratio 15.8:1 ✓

## Font Selection
Tipografía que combine legibilidad técnica con carácter industrial moderno, utilizando Inter para transmitir precisión y confiabilidad profesional.

- **Typographic Hierarchy**: 
  - H1 (Título principal): Inter Bold/48px/tight letter spacing - Para impacto en hero sections
  - H2 (Secciones): Inter Semibold/32px/normal - Para títulos de sección principales
  - H3 (Subsecciones): Inter Medium/24px/normal - Para categorías de productos
  - Body (Texto general): Inter Regular/16px/relaxed line height - Para descripciones y contenido
  - Caption (Metadatos): Inter Regular/14px/tight - Para especificaciones técnicas

## Animations
Animaciones sutiles que refuercen la sensación de precisión industrial, con movimientos que emulen la suavidad de maquinaria bien calibrada, evitando distracciones del contenido comercial principal.

- **Purposeful Meaning**: Movimientos que sugieran precisión mecánica y construcción sólida, con transiciones que reflejen la calidad de manufactura
- **Hierarchy of Movement**: Prioridad en CTAs de cotización, seguido por navegación de productos, finalmente elementos decorativos de timeline

## Component Selection
- **Components**: 
  - Cards para productos con hover states suaves
  - Navbar sticky con dropdown responsive 
  - Buttons con estados hover que simulen metal pulido
  - Badges para categorías de filtros
  - Separator para dividir secciones industriales
  - Scroll-area para timeline histórica
- **Customizations**: Timeline component personalizado para historia empresarial, filtros de productos custom con checkboxes múltiples
- **States**: Botones con hover elevation, inputs con focus rings rojos, productos con estados loading para imágenes
- **Icon Selection**: Phosphor icons industriales (Gear, Wrench, Factory, Truck) para representar manufactura y logística
- **Spacing**: Sistema de 8px base con generoso espacio entre secciones (32px-64px) para respiración visual industrial
- **Mobile**: Hamburger menu para navegación, cards apiladas verticalmente, filtros en drawer colapsable, WhatsApp button fijo bottom-right