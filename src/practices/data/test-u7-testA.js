export const questions = [
  {
    id: 1,
    type: 'mcq',
    question: "¿Cuál es la forma oblicua singular de 'Ladka' (Chico)?",
    options: [
      { text: "Ladka", isCorrect: false },
      { text: "Ladki", isCorrect: false },
      { text: "Ladke", isCorrect: true },
      { text: "Ladkon", isCorrect: false }
    ],
    explanation: "Los sustantivos masculinos terminados en -aa cambian a -e en oblicuo singular."
  },
  {
    id: 2,
    type: 'mcq',
    question: "Traduce: 'En la habitación' (Kamra -> Oblicuo).",
    options: [
      { text: "Kamra mein", isCorrect: false },
      { text: "Kamre mein", isCorrect: true },
      { text: "Kamri mein", isCorrect: false },
      { text: "Kamron mein", isCorrect: false }
    ]
  },
  {
    id: 3,
    type: 'mcq',
    question: "¿Cambia la palabra 'Ghar' (Casa) en su forma oblicua singular?",
    options: [
      { text: "Sí, a Ghare", isCorrect: false },
      { text: "Sí, a Gharo", isCorrect: false },
      { text: "No, permanece 'Ghar'", isCorrect: true },
      { text: "Sí, a Ghari", isCorrect: false }
    ],
    explanation: "Los sustantivos masculinos que NO terminan en -aa no cambian en oblicuo singular."
  },
  {
    id: 4,
    type: 'mcq',
    question: "La forma oblicua de 'Main' (Yo) ante una postposición (excepto ne/ko) es:",
    options: [
      { text: "Main", isCorrect: false },
      { text: "Mera", isCorrect: false },
      { text: "Mujh", isCorrect: true },
      { text: "Mere", isCorrect: false }
    ],
    explanation: "Ejemplo: Mujh par (sobre mí), Mujh se (de mí)."
  },
  {
    id: 5,
    type: 'mcq',
    question: "Completa: '___ par' (Sobre la mesa - Mez es femenino sin -i).",
    options: [
      { text: "Mez", isCorrect: true },
      { text: "Meze", isCorrect: false },
      { text: "Mezi", isCorrect: false },
      { text: "Mezo", isCorrect: false }
    ],
    explanation: "Los sustantivos femeninos singulares no cambian en caso oblicuo."
  },
  {
    id: 6,
    type: 'mcq',
    question: "Traduce: 'Al perro' (Kutta -> Oblicuo + ko).",
    options: [
      { text: "Kutta ko", isCorrect: false },
      { text: "Kutti ko", isCorrect: false },
      { text: "Kutte ko", isCorrect: true },
      { text: "Kutton ko", isCorrect: false }
    ]
  },
  {
    id: 7,
    type: 'mcq',
    question: "¿Cuál es la forma oblicua de 'Vah' (Él/Ella/Ese)?",
    options: [
      { text: "Vah", isCorrect: false },
      { text: "Us", isCorrect: true },
      { text: "Un", isCorrect: false },
      { text: "Is", isCorrect: false }
    ]
  },
  {
    id: 8,
    type: 'mcq',
    question: "Traduce: 'En este libro' (Yah -> Is, Kitaab -> Kitaab).",
    options: [
      { text: "Yah kitaab mein", isCorrect: false },
      { text: "Is kitaab mein", isCorrect: true },
      { text: "Us kitaab mein", isCorrect: false },
      { text: "In kitaab mein", isCorrect: false }
    ]
  },
  {
    id: 9,
    type: 'mcq',
    question: "Forma oblicua de 'Tum' (Tú):",
    options: [
      { text: "Tum", isCorrect: false },
      { text: "Tujh", isCorrect: false },
      { text: "Tumhare", isCorrect: true },
      { text: "Tera", isCorrect: false }
    ],
    explanation: "Se usa 'Tumhare' (ej: Tumhare liye - para ti) o a veces 'Tum' directo dependiendo de la postposición, pero 'Tumhare' es la base oblicua posesiva común."
  },
  {
    id: 10,
    type: 'mcq',
    question: "Traduce: 'Conmigo' (usando 'saath').",
    options: [
      { text: "Main saath", isCorrect: false },
      { text: "Mera saath", isCorrect: false },
      { text: "Mere saath", isCorrect: true },
      { text: "Mujh saath", isCorrect: false }
    ]
  },
  {
    id: 11,
    type: 'mcq',
    question: "Oblicuo de 'Kaun' (Quién) en singular:",
    options: [
      { text: "Kaun", isCorrect: false },
      { text: "Kis", isCorrect: true },
      { text: "Kin", isCorrect: false },
      { text: "Kisko", isCorrect: false }
    ]
  },
  {
    id: 12,
    type: 'mcq',
    question: "Completa: '___ ghar mein' (En el hogar de Ram).",
    options: [
      { text: "Ram", isCorrect: true },
      { text: "Rame", isCorrect: false },
      { text: "Rami", isCorrect: false },
      { text: "Ramo", isCorrect: false }
    ],
    explanation: "Los nombres propios masculinos sin -aa final no cambian."
  },
  {
    id: 13,
    type: 'mcq',
    question: "Forma oblicua de 'Ye' (Estos):",
    options: [
      { text: "Ye", isCorrect: false },
      { text: "Is", isCorrect: false },
      { text: "In", isCorrect: true },
      { text: "Un", isCorrect: false }
    ]
  },
  {
    id: 14,
    type: 'mcq',
    question: "Traduce: 'Para el niño' (Bachcha -> Oblicuo + ke liye).",
    options: [
      { text: "Bachcha ke liye", isCorrect: false },
      { text: "Bachche ke liye", isCorrect: true },
      { text: "Bachchi ke liye", isCorrect: false },
      { text: "Bachchon ke liye", isCorrect: false }
    ]
  },
  {
    id: 15,
    type: 'mcq',
    question: "¿Cuándo se usa el caso oblicuo?",
    options: [
      { text: "Siempre al inicio de la frase", isCorrect: false },
      { text: "Cuando la palabra va seguida de una postposición", isCorrect: true },
      { text: "Cuando el verbo es pasado", isCorrect: false },
      { text: "Para objetos directos solamente", isCorrect: false }
    ]
  }
];