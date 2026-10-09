# Johannes — Desarrollo Web & Soluciones Digitales

Brochure web y portafolio comercial para Johannes, desarrollado con React 18, TypeScript, Vite y Tailwind CSS 3. La experiencia mantiene una presentación editorial ligera y orientada a facilitar el contacto con clientes.

## Tecnología

- React 18 + TypeScript + Vite
- Tailwind CSS 3 y variables CSS propias en `src/index.css`
- Iconografía Lucide React
- Sin librerías externas de animación

## Identidad visual

- **Tipografías:** Cormorant Garamond para titulares editoriales y Plus Jakarta Sans para texto de lectura.
- **Paleta:** marfil `#F1EDE3`, tinta `#111210`, oliva `#646653` y terracota `#A66D55`, con tonos secundarios definidos en `src/index.css` y `tailwind.config.js`.
- **Isotipo:** el componente `src/components/brand/LogoMark.tsx` colorea el PNG `public/brand/johannes-j-transparent.png` mediante una máscara CSS. `LogoFull` aplica la misma técnica al wordmark PNG transparente.

## Sistema de aparición Reveal

`Reveal` observa sus elementos con `IntersectionObserver`, anima una sola vez al entrar en pantalla y muestra el contenido directamente si el navegador no soporta el observer o si el usuario prefiere movimiento reducido.

```tsx
import { Reveal } from './components/ui/Reveal';
import { RevealGroup } from './components/ui/RevealGroup';

<Reveal variant="left" distance={32}>
  <h2>Título de sección</h2>
</Reveal>

<RevealGroup stagger={90} className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {items.map((item) => (
    <Reveal key={item.id} variant="up">
      <article>{item.title}</article>
    </Reveal>
  ))}
</RevealGroup>
```

Variantes disponibles: `up`, `down`, `left`, `right`, `zoom`, `fade` y `line`. Los componentes aceptan `delay`, `duration`, `distance`, `as` y `className`. `RevealGroup` limita el retraso incremental a 600 ms. Las animaciones usan solo opacidad y transformaciones CSS; `line` revela su contenido mediante `scaleX`.

## Estructura

- `src/components/sections/`: Hero, propuesta de valor, servicios, proyectos, proceso, perfil, mantenimiento, inversión, hosting y contacto.
- `src/components/layout/`: navegación y footer.
- `src/components/ui/`: componentes reutilizables de interfaz, incluidos `Reveal` y `RevealGroup`.
- `src/hooks/`: hooks reutilizables, incluido `useInView`.
- `src/data/`: contenido de servicios, proyectos, proceso e inversión.
- `public/brand/` y `public/projects/`: recursos gráficos de marca y portafolio.

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run preview
```

Vite inicia el servidor de desarrollo en `http://localhost:3000` según la configuración actual del proyecto.

Para comprobar movimiento reducido, activa “Reducir movimiento” en el sistema operativo o emula `prefers-reduced-motion: reduce` en las herramientas de desarrollo del navegador.

## Recursos y despliegue

Los archivos `public/brand/johannes-editorial-ref1.png` y `public/brand/johannes-editorial-ref2.png` son imágenes de referencia y no se usan desde el código de la aplicación. Se conservan intactos.

`public/projects/angels-study-center.png` ocupa aproximadamente 1,06 MB. Se recomienda evaluar su compresión o conversión a WebP, comprobando calidad visual y compatibilidad antes de sustituir el recurso.

Para desplegar en Vercel, usa `npm run build` como comando de compilación y `dist` como directorio de salida.
