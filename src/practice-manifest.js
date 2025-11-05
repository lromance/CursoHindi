import { lazy } from 'react';

// Para añadir una nueva práctica, simplemente añade un nuevo objeto a este array.
// 1. Añade tu componente .jsx a la carpeta /src/practices
// 2. Añade aquí la información: id, título, descripción y la ruta a tu componente.

export const practiceManifest = [
  {
    id: 'u1-2',
    title: 'Unidades 1 y 2: Fundamentos y Presentaciones',
    description: 'Una serie de 30 preguntas para repasar el alfabeto, los saludos, el verbo होना y el vocabulario básico.',
    component: lazy(() => import('./practices/Practica_Interactiva_1_2.jsx')),
  },
  // {
  //   id: 'u3',
  //   title: 'Unidad 3: Casos y Conexiones',
  //   description: 'Ejercicios sobre el caso oblicuo y los posesivos.',
  //   component: lazy(() => import('./practices/Practica_3.jsx')),
  // },
];