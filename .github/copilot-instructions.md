# Copilot Instructions for ingeniero-miguel-sas

## Arquitectura y Componentes Clave
- Este proyecto es una SPA React con Vite, usando TypeScript y Tailwind CSS.
- El punto de entrada es `src/main.tsx`, que monta `App.tsx`.
- Los componentes principales están en `src/components/`, organizados por sección (ej. `HeroSection.tsx`, `Footer.tsx`).
- Los componentes reutilizables de UI están en `src/components/ui/` (ej. `button.tsx`, `card.tsx`).
- Los hooks personalizados están en `src/hooks/`.
- Utilidades compartidas en `src/lib/utils.ts`.
- Estilos globales y de tema en `src/styles/` y `theme.json`.

## Flujos de Desarrollo
- **Desarrollo local:**
  - Ejecuta `npm install` para instalar dependencias.
  - Usa `npm run dev` para iniciar el servidor Vite.
- **Build:**
  - Usa `npm run build` para generar la versión de producción en `dist/`.
- **No hay tests automatizados configurados actualmente.**

## Convenciones y Patrones
- Los componentes React usan funciones y tipado estricto con TypeScript.
- Los estilos se gestionan con Tailwind y archivos CSS.
- Los componentes de UI siguen el patrón de "props-forwarding" y composición.
- Los archivos de sección (`AboutSection.tsx`, etc.) importan componentes de UI y gestionan su propio layout.
- Los hooks se nombran como `use-*` y encapsulan lógica específica (ej. `use-mobile.ts`).

## Integraciones y Dependencias
- Tailwind configurado en `tailwind.config.js`.
- Vite configurado en `vite.config.ts`.
- No hay dependencias externas para backend/API; todo es frontend.
- Archivos públicos en `public/` (ej. `robots.txt`, `sitemap.xml`).

## Ejemplos de Patrones
- Para crear un nuevo componente de sección, sigue la estructura de `src/components/HeroSection.tsx`.
- Para UI reutilizable, extiende los componentes de `src/components/ui/`.
- Para lógica compartida, usa/utiliza `src/lib/utils.ts`.

## Recomendaciones para Agentes
- Mantén la estructura modular y reutilizable.
- Prefiere composición sobre herencia en componentes.
- Documenta los props y tipos en los componentes nuevos.
- Si agregas nuevas dependencias, actualiza `package.json` y documenta en este archivo.

---
¿Falta alguna convención, flujo o integración importante? Por favor, indícalo para mejorar estas instrucciones.
