/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Paleta Editorial Johannes */
        marfil: {
          DEFAULT: "#F1EDE3", // Fondo principal claro
          warm: "#FAF8F2",    // Tono ligeramente más oscuro para tarjetas o contrastes suaves
        },
        tinta: {
          DEFAULT: "#111210", // Negro tinta (Texto principal y fondos oscuros)
          soft: "#1C1C19",    // Tinta suavizado para superficies
        },
        oliva: {
          DEFAULT: "#646653", // Oliva tinta para texto legible sobre marfil
          muted: "#747664",   // Oliva apagado para acentos
          accent: "#747664",
        },
        piedra: {
          DEFAULT: "#B7B1A5", // Gris piedra (Bordes finos y elementos secundarios)
          light: "#D6D1C6",   // Líneas divisoras sutiles
        },
        editorial: {
          terracotta: "#B47A61",
          olive: "#858875",
          sand: "#D9C9AE",
          sage: "#B3BBA7",
        },
        terracota: {
          DEFAULT: "#A66D55", // Acento discreto para botones o destacados
          hover: "#8F5C47",   // Estado hover
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '0',
        tight: '0',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.18em',
        editorial: '0.28em',
      },
    },
  },
  plugins: [],
}