export const questions = [
  // 1. Posesivo Mera (Fill-in)
  {
    id: 1,
    type: 'fill-in',
    question: "Yah ___ ghar hai. (Este es mi hogar)",
    correctAnswer: "mera",
    hint: "Posesivo para 'Yo' (masc)",
    translation: ""
  },
  // 2. Demostrativo (MCQ)
  {
    id: 2,
    type: 'mcq',
    question: "¿Cómo señalas algo que está lejos?",
    options: [
      { text: "Yah", isCorrect: false },
      { text: "Vah", isCorrect: true },
      { text: "Ye", isCorrect: false },
      { text: "Iska", isCorrect: false }
    ]
  },
  // 3. Vocabulario Aula (Match)
  {
    id: 3,
    type: 'match',
    question: "Empareja el objeto con su nombre:",
    items: {
      "Kitaab": "Libro",
      "Qalam": "Bolígrafo",
      "Mez": "Mesa",
      "Kursi": "Silla"
    }
  },
  // 4. Ordenar Frase (Order)
  {
    id: 4,
    type: 'order',
    question: "Ordena: 'Esta es mi libro'",
    items: ["Yah", "meri", "kitaab", "hai"],
    correctAnswer: "Yah meri kitaab hai"
  },
  // 5. Interrogativo Kiska (MCQ)
  {
    id: 5,
    type: 'mcq',
    question: "¿Qué significa 'Kiska'?",
    options: [
      { text: "De quién", isCorrect: true },
      { text: "Quién", isCorrect: false },
      { text: "Qué", isCorrect: false },
      { text: "Cuál", isCorrect: false }
    ]
  },
  // 6. Vocabulario Casa (Match)
  {
    id: 6,
    type: 'match',
    question: "Empareja las partes de la casa:",
    items: {
      "Ghar": "Casa",
      "Kamra": "Habitación",
      "Rasoi": "Cocina",
      "Darvaaza": "Puerta"
    }
  },
  // 7. Posesivo Apka (Fill-in)
  {
    id: 7,
    type: 'fill-in',
    question: "___ naam kya hai? (¿Cuál es su nombre? - Formal)",
    correctAnswer: "aapka",
    hint: "Posesivo de 'Aap'",
    translation: ""
  },
  // 8. Plural Posesivo (MCQ)
  {
    id: 8,
    type: 'mcq',
    question: "Para 'Nosotros' (Ham) y objeto femenino:",
    options: [
      { text: "Hamara", isCorrect: false },
      { text: "Hamari", isCorrect: true },
      { text: "Hamare", isCorrect: false },
      { text: "Hama", isCorrect: false }
    ]
  },
  // 9. Diálogo (Dialogue)
  {
    id: 9,
    type: 'dialogue',
    question: "- Yah ___ hai?\n- Yah mera pen hai.",
    correctAnswer: "kiska",
    hint: "De quién",
    translation: "(- ¿___ es esto? / - Es mi bolígrafo.)"
  },
  // 10. Ye/Ve (MCQ)
  {
    id: 10,
    type: 'mcq',
    question: "'Ve' se usa para:",
    options: [
      { text: "Plural cerca", isCorrect: false },
      { text: "Plural lejos", isCorrect: true },
      { text: "Singular cerca", isCorrect: false },
      { text: "Singular lejos", isCorrect: false }
    ]
  },
  // 11. Concordancia Plural (Fill-in)
  {
    id: 11,
    type: 'fill-in',
    question: "Ye ___ dost hain. (Estos son mis amigos)",
    correctAnswer: "mere",
    hint: "Plural de 'mera'",
    translation: ""
  },
  // 12. Ordenar Pregunta (Order)
  {
    id: 12,
    type: 'order',
    question: "Ordena: '¿De quién es esa casa?'",
    items: ["Vah", "kiska", "ghar", "hai?"],
    correctAnswer: "Vah kiska ghar hai?"
  },
  // 13. Vocabulario (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "'Khidki' significa:",
    options: [
      { text: "Puerta", isCorrect: false },
      { text: "Ventana", isCorrect: true },
      { text: "Pared", isCorrect: false },
      { text: "Suelo", isCorrect: false }
    ]
  },
  // 14. Posesivo 3ra Persona (Match)
  {
    id: 14,
    type: 'match',
    question: "Empareja los posesivos:",
    items: {
      "Uska": "De él/ella (lejos)",
      "Iska": "De él/ella (cerca)",
      "Unka": "De ellos (lejos)",
      "Inka": "De ellos (cerca)"
    }
  },
  // 15. Traducción (MCQ)
  {
    id: 15,
    type: 'mcq',
    question: "Traduce: 'Tu silla' (Informal - Tum).",
    options: [
      { text: "Tumhara kursi", isCorrect: false },
      { text: "Tumhari kursi", isCorrect: true },
      { text: "Tumhare kursi", isCorrect: false },
      { text: "Tera kursi", isCorrect: false }
    ]
  },
  // 16. Posesivo Intimo (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "El posesivo de 'Tu' (íntimo) es:",
    options: [
      { text: "Tera", isCorrect: true },
      { text: "Tumhara", isCorrect: false },
      { text: "Apka", isCorrect: false },
      { text: "Iska", isCorrect: false }
    ]
  },
  // 17. Objeto Aula (Fill-in)
  {
    id: 17,
    type: 'fill-in',
    question: "Yah school ka ___ hai. (Este es el director de la escuela)",
    correctAnswer: "prinsipal",
    hint: "Director",
    translation: ""
  },
  // 18. Plural Fem (MCQ)
  {
    id: 18,
    type: 'mcq',
    question: "Si el objeto es 'Kitaaben' (libros), el posesivo es:",
    options: [
      { text: "Meri", isCorrect: true },
      { text: "Mera", isCorrect: false },
      { text: "Mere", isCorrect: false },
      { text: "Meriyan", isCorrect: false }
    ],
    explanation: "Los posesivos femeninos no cambian en plural (Meri kitab -> Meri kitaben)."
  },
  // 19. Vocabulario Bistar (MCQ)
  {
    id: 19,
    type: 'mcq',
    question: "¿Qué significa 'Bistar'?",
    options: [
      { text: "Cama", isCorrect: true },
      { text: "Baño", isCorrect: false },
      { text: "Cocina", isCorrect: false },
      { text: "Mesa", isCorrect: false }
    ]
  },
  // 20. Frase Final (Order)
  {
    id: 20,
    type: 'order',
    question: "Ordena: 'Nuestra clase es grande'",
    items: ["Hamari", "kaksha", "badi", "hai"],
    correctAnswer: "Hamari kaksha badi hai"
  }
];