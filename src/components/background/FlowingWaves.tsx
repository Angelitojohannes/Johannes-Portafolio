import React from 'react';

interface FlowingWavesProps {
  variant?:
    | 'hero'
    | 'section'
    | 'subtle'
    | 'proposal'
    | 'services'
    | 'projects'
    | 'process'
    | 'about'
    | 'maintenance'
    | 'pricing'
    | 'hosting'
    | 'contact'
    | 'footer';
  className?: string;
}

/**
 * FlowingWaves / ArchitecturalGuides
 * Basado en las composiciones de referencia de Canva:
 * - Líneas de guía verticales y horizontales de 1px con opacidad sutil
 * - Curvas editoriales orgánicas y de baja opacidad
 * - Intersecciones y guías abiertas en la portada
 * - Acentos cromáticos definidos por sección
 */
export const FlowingWaves: React.FC<FlowingWavesProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const isHero = variant === 'hero';
  const atmosphereVariant = variant === 'section'
    ? 'process'
    : variant === 'subtle'
      ? 'proposal'
      : variant;

  return (
    <div
      className={`editorial-atmosphere editorial-atmosphere--${atmosphereVariant} absolute inset-0 z-0 select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="editorial-atmosphere__curves"
        viewBox="0 0 1200 360"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M 0 210 C 130 150 220 110 330 145 C 440 180 485 258 610 250 C 735 242 775 142 905 130 C 1035 118 1100 175 1200 200">
          <animate
            attributeName="d"
            values="M 0 210 C 130 150 220 110 330 145 C 440 180 485 258 610 250 C 735 242 775 142 905 130 C 1035 118 1100 175 1200 200;M 0 196 C 130 126 220 92 330 130 C 440 168 485 230 610 224 C 735 218 775 112 905 104 C 1035 96 1100 150 1200 180;M 0 224 C 130 174 220 142 330 174 C 440 206 485 282 610 276 C 735 270 775 176 905 162 C 1035 148 1100 198 1200 222;M 0 210 C 130 150 220 110 330 145 C 440 180 485 258 610 250 C 735 242 775 142 905 130 C 1035 118 1100 175 1200 200"
            dur="18s"
            begin="-4s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.33;0.66;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </path>
        <path d="M 0 255 C 90 215 170 185 260 195 C 350 205 420 275 530 288 C 640 301 735 245 820 215 C 905 185 1060 190 1200 235">
          <animate
            attributeName="d"
            values="M 0 255 C 90 215 170 185 260 195 C 350 205 420 275 530 288 C 640 301 735 245 820 215 C 905 185 1060 190 1200 235;M 0 236 C 90 188 170 160 260 176 C 350 192 420 250 530 264 C 640 278 735 224 820 194 C 905 164 1060 168 1200 216;M 0 274 C 90 242 170 210 260 214 C 350 218 420 300 530 312 C 640 324 735 266 820 238 C 905 210 1060 212 1200 254;M 0 255 C 90 215 170 185 260 195 C 350 205 420 275 530 288 C 640 301 735 245 820 215 C 905 185 1060 190 1200 235"
            dur="23s"
            begin="-9s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.33;0.66;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </path>
        <path d="M 0 300 C 125 270 190 230 300 250 C 410 270 470 320 585 326 C 700 332 780 280 890 270 C 1000 260 1090 305 1200 285">
          <animate
            attributeName="d"
            values="M 0 300 C 125 270 190 230 300 250 C 410 270 470 320 585 326 C 700 332 780 280 890 270 C 1000 260 1090 305 1200 285;M 0 282 C 125 244 190 208 300 230 C 410 252 470 296 585 304 C 700 312 780 256 890 248 C 1000 240 1090 284 1200 266;M 0 318 C 125 292 190 254 300 270 C 410 286 470 340 585 346 C 700 352 780 304 890 292 C 1000 280 1090 326 1200 304;M 0 300 C 125 270 190 230 300 250 C 410 270 470 320 585 326 C 700 332 780 280 890 270 C 1000 260 1090 305 1200 285"
            dur="28s"
            begin="-15s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.33;0.66;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </path>
      </svg>

      {isHero && (
        <>
        <div className="absolute left-6 sm:left-12 lg:left-20 top-0 bottom-0 w-px bg-tinta/[0.12]" />
        <div className="hidden xl:block absolute right-24 top-0 bottom-0 w-px bg-tinta/[0.08]" />
        <div className="absolute left-8 right-8 top-32 h-px bg-tinta/[0.1]" />
        <div className="absolute left-8 right-8 bottom-16 h-px bg-tinta/[0.1]" />
        </>
      )}
    </div>
  );
};
