export const questions = [
  // 1. MCQ - Script Recognition (Vowels)
  {
    id: 1,
    type: 'mcq',
    question: "Identifica la vocal Devanagari 'ऊ':",
    options: [
      { text: "उ", isCorrect: false },
      { text: "ऊ", isCorrect: true },
      { text: "ए", isCorrect: false },
      { text: "औ", isCorrect: false }
    ],
    hint: "Es una vocal larga."
  },
  // 2. FILL_IN - Transliteration (Consonant)
  {
    id: 2,
    type: 'fill-in',
    question: "Translitera la consonante Devanagari: ख",
    correctAnswer: "kha",
    hint: "Es la 'k' aspirada.",
    explanation: "ख = kha"
  },
  // 3. MATCH - Numbers (Devanagari to Digit)
  {
    id: 3,
    type: 'match',
    question: "Empareja los números en Devanagari con su valor numérico:",
    items: {
      "एक": "1",
      "पाँच": "5",
      "दस": "10",
      "आठ": "8"
    }
  },
  // 4. ORDER - Simple Sentence (Greeting)
  {
    id: 4,
    type: 'order',
    question: "Ordena las palabras para formar un saludo común:",
    items: ["नमस्ते", "राम"], // Words to be ordered
    correctAnswer: "नमस्ते राम"
  },
  // 5. DIALOGUE - Basic Greeting
  {
    id: 5,
    type: 'dialogue',
    question: "Completa el diálogo: A: नमस्ते B: ___",
    correctAnswer: "नमस्ते",
    hint: "Responde un saludo formal.",
    explanation: "La respuesta común a नमस्ते es नमस्ते."
  },
  // 6. MCQ - Grammar Concept (Matra Function)
  {
    id: 6,
    type: 'mcq',
    question: "¿Cuál es el propósito principal de una 'matra'?",
    options: [
      { text: "Indicar el género de una palabra", isCorrect: false },
      { text: "Modificar la vocal inherente de una consonante", isCorrect: true },
      { text: "Marcar una consonante aspirada", isCorrect: false },
      { text: "Separar palabras en una oración", isCorrect: false }
    ],
    explanation: "Las matras son signos diacríticos que cambian la vocalización de una consonante."
  },
  // 7. FILL_IN - Devanagari (Matra 'I')
  {
    id: 7,
    type: 'fill-in',
    question: "Escribe 'ki' (sonido 'k' seguido de 'i' corta) usando la matra correcta:",
    correctAnswer: "कि",
    hint: "Piensa en cómo se añade la vocal 'i' corta a una consonante.",
    explanation: "कि"
  },
  // 8. MCQ - Phonetics (Aspiration)
  {
    id: 8,
    type: 'mcq',
    question: "La diferencia entre 'क' y 'ख' se debe a:",
    options: [
      { text: "El uso de halant", isCorrect: false },
      { text: "La aspiración", isCorrect: true },
      { text: "La vocal inherente", isCorrect: false },
      { text: "La shirorekha", isCorrect: false }
    ],
    hint: "Piensa en el soplo de aire."
  },
  // 9. ORDER - Numbers 1-3
  {
    id: 9,
    type: 'order',
    question: "Ordena los números de menor a mayor:",
    items: ["एक", "दो", "तीन"],
    correctAnswer: "एक दो तीन"
  },
  // 10. MCQ - Cultural (Ji usage)
  {
    id: 10,
    type: 'mcq',
    question: "Si dices 'जी हाँ', ¿qué estás expresando?",
    options: [
      { text: "No, con respeto", isCorrect: false },
      { text: "Sí, con respeto", isCorrect: true },
      { text: "Quizás", isCorrect: false },
      { text: "Gracias", isCorrect: false }
    ]
  },
  // 11. FILL_IN - Vocabulary (Thanks)
  {
    id: 11,
    type: 'fill-in',
    question: "Escribe 'Gracias' en hindi (transliteración):",
    correctAnswer: "dhanyavaad",
    explanation: "धन्यवाद = Dhanyavaad"
  },
  // 12. MCQ - Grammar Concept (Halant Function)
  {
    id: 12,
    type: 'mcq',
    question: "¿Qué signo cancela la vocal inherente 'a' de una consonante?",
    options: [
      { text: "Shirorekha", isCorrect: false },
      { text: "Matra", isCorrect: false },
      { text: "Halant", isCorrect: true },
      { text: "Vocal plena", isCorrect: false }
    ],
    explanation: "El halant (्) se usa para obtener el sonido puro de la consonante."
  },
  // 13. MATCH - Consonant Groups
  {
    id: 13,
    type: 'match',
    question: "Empareja la consonante con su grupo:",
    items: {
      "क": "Velar",
      "छ": "Palatal",
      "ग": "Velar",
      "झ": "Palatal"
    }
  },
  // 14. FILL_IN - Numbers (Devanagari)
  {
    id: 14,
    type: 'fill-in',
    question: "Escribe el número 4 en Devanagari (dígito):",
    correctAnswer: "४",
    explanation: "El dígito para cuatro es ४."
  },
  // 15. MCQ - Pronoun Usage (Formal 'You')
  {
    id: 15,
    type: 'mcq',
    question: "Si no estás seguro de cómo dirigirte a alguien, ¿qué pronombre usarías para 'Usted'?",
    options: [
      { text: "तू", isCorrect: false },
      { text: "तुम", isCorrect: false },
      { text: "आप", isCorrect: true },
      { text: "मैं", isCorrect: false }
    ],
    explanation: "'आप' es siempre la opción segura y respetuosa."
  },
  // 16. ORDER - Numbers 4-6
  {
    id: 16,
    type: 'order',
    question: "Ordena los números de menor a mayor:",
    items: ["चार", "पाँच", "छह"],
    correctAnswer: "चार पाँच छह"
  },
  // 17. FILL_IN - Vocabulary (Polite Request)
  {
    id: 17,
    type: 'fill-in',
    question: "Escribe 'Por favor' en hindi (transliteración):",
    correctAnswer: "krupaya",
    explanation: "कृपया = Krupaya"
  },
  // 18. MCQ - Script Concept (Vowel Inherency)
  {
    id: 18,
    type: 'mcq',
    question: "Cada consonante Devanagari se considera una sílaba completa porque incluye:",
    options: [
      { text: "Una matra por defecto", isCorrect: false },
      { text: "La shirorekha", isCorrect: false },
      { text: "Una vocal inherente 'a'", isCorrect: true },
      { text: "Un halant", isCorrect: false }
    ]
  },
  // 19. DIALOGUE - Farewell
  {
    id: 19,
    type: 'dialogue',
    question: "Completa el diálogo: A: धन्यवाद B: फिर ___",
    correctAnswer: "मिलेंगे",
    hint: "Es una parte de una despedida común en hindi.",
    explanation: "La despedida completa es 'फिर मिलेंगे' (Phir milenge)."
  },
  // 20. MCQ - Identify Consonant
  {
    id: 20,
    type: 'mcq',
    question: "¿Qué carácter es 'Gha'?",
    options: [
      { text: "ग", isCorrect: false },
      { text: "घ", isCorrect: true },
      { text: "ङ", isCorrect: false },
      { text: "ख", isCorrect: false }
    ],
    hint: "Es una consonante aspirada."
  }
];