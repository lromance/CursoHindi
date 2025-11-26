export const questions = [
  {
    id: 1,
    type: 'mcq',
    question: "¿Qué es la 'shirorekha' en Devanagari?",
    options: [
      { text: "Un signo vocálico", isCorrect: false },
      { text: "La línea horizontal superior de la que 'cuelgan' las letras", isCorrect: true },
      { text: "Un grupo de consonantes", isCorrect: false },
      { text: "El sonido de la 'a' inherente", isCorrect: false }
    ],
    explanation: "La shirorekha es la línea superior que conecta las letras en una palabra."
  },
  {
    id: 2,
    type: 'mcq',
    question: "La vocal inherente en cada consonante Devanagari es:",
    options: [
      { text: "i", isCorrect: false },
      { text: "u", isCorrect: false },
      { text: "a (schwa)", isCorrect: true },
      { text: "o", isCorrect: false }
    ],
    explanation: "Cada consonante, como 'क', se pronuncia 'ka' debido a la vocal 'a' inherente."
  },
  {
    id: 3,
    type: 'mcq',
    question: "¿Cuál es la función principal del 'halant' (्)?",
    options: [
      { text: "Indicar una vocal larga", isCorrect: false },
      { text: "Unir dos consonantes para formar una ligadura", isCorrect: false },
      { text: "Cancelar la vocal inherente 'a' de una consonante", isCorrect: true },
      { text: "Marcar el final de una palabra", isCorrect: false }
    ],
    explanation: "El halant (्) convierte 'क' (ka) en 'क्' (k)."
  },
  {
    id: 4,
    type: 'mcq',
    question: "Cuando queremos usar una vocal diferente de la 'a' inherente, usamos:",
    options: [
      { text: "Una nueva consonante", isCorrect: false },
      { text: "Una matra (signo vocálico)", isCorrect: true },
      { text: "Un halant", isCorrect: false },
      { text: "Una shirorekha", isCorrect: false }
    ],
    explanation: "Las matras se adjuntan a las consonantes para cambiar su sonido vocálico."
  },
  {
    id: 5,
    type: 'mcq',
    question: "La 'a' inherente en hindi se pronuncia de forma similar a:",
    options: [
      { text: "La 'a' en 'casa'", isCorrect: false },
      { text: "La 'a' en la palabra inglesa 'about'", isCorrect: true },
      { text: "La 'e' en 'elefante'", isCorrect: false },
      { text: "La 'o' en 'sol'", isCorrect: false }
    ],
    explanation: "Es un sonido corto y neutro (schwa)."
  },
  {
    id: 6,
    type: 'mcq',
    question: "¿En qué posición se traza la shirorekha?",
    options: [
      { text: "Antes de escribir cada carácter individual", isCorrect: false },
      { text: "Después de haber escrito la palabra completa", isCorrect: true },
      { text: "Debajo de cada consonante", isCorrect: false },
      { text: "Al final de cada frase", isCorrect: false }
    ]
  },
  {
    id: 7,
    type: 'mcq',
    question: "¿Qué indica la presencia de un 'halant' debajo de una consonante?",
    options: [
      { text: "Que la consonante es aspirada", isCorrect: false },
      { text: "Que la consonante no tiene vocal inherente", isCorrect: true },
      { text: "Que la consonante forma parte de una vocal compuesta", isCorrect: false },
      { text: "Que la consonante es la primera de una palabra", isCorrect: false }
    ]
  },
  {
    id: 8,
    type: 'mcq',
    question: "En el Devanagari, 'क' se lee como:",
    options: [
      { text: "k (solo el sonido consonántico)", isCorrect: false },
      { text: "ka (con la vocal inherente 'a')", isCorrect: true },
      { text: "ki", isCorrect: false },
      { text: "ko", isCorrect: false }
    ]
  },
  {
    id: 9,
    type: 'mcq',
    question: "¿Cuál es la matra para la vocal 'ā' (larga)?",
    options: [
      { text: "ि", isCorrect: false },
      { text: "ी", isCorrect: false },
      { text: "ा", isCorrect: true },
      { text: "ु", isCorrect: false }
    ],
    explanation: "La matra 'ा' se coloca a la derecha de la consonante."
  },
  {
    id: 10,
    type: 'mcq',
    question: "¿Qué concepto es crucial para formar grupos de consonantes o ligaduras?",
    options: [
      { text: "Matra", isCorrect: false },
      { text: "Vocal inherente", isCorrect: false },
      { text: "Halant", isCorrect: true },
      { text: "Shirorekha", isCorrect: false }
    ],
    explanation: "El halant permite 'desvocalizar' una consonante para unirla a la siguiente."
  },
  {
    id: 11,
    type: 'mcq',
    question: "La diferencia entre 'क' (k) y 'ख' (kh) es un ejemplo de:",
    options: [
      { text: "Diferencia de matra", isCorrect: false },
      { text: "Diferencia de aspiración", isCorrect: true },
      { text: "Diferencia de vocal inherente", isCorrect: false },
      { text: "Diferencia de shirorekha", isCorrect: false }
    ]
  },
  {
    id: 12,
    type: 'mcq',
    question: "El sonido de la 'a' inherente se considera:",
    options: [
      { text: "Una vocal fuerte y clara", isCorrect: false },
      { text: "El sonido vocálico más relajado y por defecto del hindi", isCorrect: true },
      { text: "Una vocal que siempre se escribe con una matra", isCorrect: false },
      { text: "Una vocal que cambia según la consonante", isCorrect: false }
    ]
  },
  {
    id: 13,
    type: 'mcq',
    question: "¿Cuál de estas matras representa una 'i' corta?",
    options: [
      { text: "ि", isCorrect: true },
      { text: "ी", isCorrect: false },
      { text: "ो", isCorrect: false },
      { text: "ौ", isCorrect: false }
    ],
    explanation: "La matra 'ि' se coloca antes de la consonante."
  },
  {
    id: 14,
    type: 'mcq',
    question: "La palabra <span class='hindi'>नमस्ते</span> (namaste) se forma utilizando:",
    options: [
      { text: "Solo vocales plenas", isCorrect: false },
      { text: "Halant para fusionar consonantes", isCorrect: true },
      { text: "Únicamente consonantes aspiradas", isCorrect: false },
      { text: "Una shirorekha que se escribe antes de la palabra", isCorrect: false }
    ],
    hint: "Revisa la formación de ligaduras."
  },
  {
    id: 15,
    type: 'mcq',
    question: "Si una consonante no tiene ninguna matra visible, ¿qué vocal se asume?",
    options: [
      { text: "i", isCorrect: false },
      { text: "u", isCorrect: false },
      { text: "La 'a' inherente", isCorrect: true },
      { text: "o", isCorrect: false }
    ]
  }
];