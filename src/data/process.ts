import { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Conocemos tu negocio, objetivos y necesidades.',
    detail: 'Analizamos qué problema resuelve tu proyecto, a quién va dirigido y qué acción concreta deben realizar los usuarios.',
  },
  {
    number: '02',
    title: 'Planificación',
    description: 'Definimos estructura, contenido, funcionalidades y alcance.',
    detail: 'Organizamos el mapa del sitio, los flujos clave y los requerimientos técnicos para garantizar claridad desde el primer día.',
  },
  {
    number: '03',
    title: 'Diseño',
    description: 'Construimos la propuesta visual y experiencia del usuario.',
    detail: 'Diseñamos una interfaz estética, funcional y alineada a tu identidad, cuidando tipografía, jerarquía y accesibilidad.',
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Transformamos el diseño en una solución web funcional y responsive.',
    detail: 'Escribimos código limpio, moderno y estructurado para que cargue con fluidez en cualquier teléfono, tablet o computador.',
  },
  {
    number: '05',
    title: 'Despliegue',
    description: 'Publicamos y configuramos el proyecto para que esté disponible en Internet.',
    detail: 'Conectamos el dominio, configuramos el alojamiento (Vercel u otro) y verificamos que todo funcione impecablemente.',
  },
  {
    number: '06',
    title: 'Evolución',
    description: 'Podemos continuar con mantenimiento, mejoras y nuevas funcionalidades.',
    detail: 'Acompañamiento continuo: tu sitio no queda abandonado tras el lanzamiento; lo mantenemos activo y actualizado.',
  },
];
