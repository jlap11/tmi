# TMI - Técnico Mecánico Industrial

Sitio web SPA construido con React, Vite, TypeScript y Tailwind CSS.

## Desarrollo
- Instalar dependencias:
	- npm install
- Levantar entorno local:
	- npm run dev
- Compilación de producción:
	- npm run build
- Previsualización local del build:
	- npm run preview

## Despliegue en Vercel
- Repositorio: conecta este repo en Vercel.
- Framework preset: Vite.
- Comando de build: `vite build` (o `npm run vercel-build`).
- Directorio de salida: `dist`.
- Enrutamiento SPA: incluido en `vercel.json` para que todas las rutas sirvan `index.html`.
- Caché de assets: `vercel.json` define cache headers para `/assets/*`.

## Estructura
- Entrada: `src/main.tsx` monta `App.tsx` en `#root`.
- Secciones: `src/components/*Section.tsx` (ej. `HeroSection`, `AboutSection`, `CatalogSection`).
- UI reutilizable: `src/components/ui/*` (botones, tarjetas, diálogos, formularios, etc.).
- Hooks: `src/hooks/` (ej. `use-mobile.ts`).
- Utilidades: `src/lib/utils.ts`.
- Estilos: `src/styles/theme.css`, `src/index.css`, `src/main.css` y `tailwind.config.js`.
- Archivos públicos: `public/`.

## Licencia
MIT
