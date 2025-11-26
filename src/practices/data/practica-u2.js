export const questions = [
  // 1. Pronombres (MCQ)
  {
    id: 1,
    type: 'mcq',
    question: "¿Cuál es el pronombre formal para 'Usted'?",
    options: [
      { text: "तुम (tum)", isCorrect: false },
      { text: "आप (aap)", isCorrect: true },
      { text: "तू (tu)", isCorrect: false },
      { text: "वह (vah)", isCorrect: false }
    ]
  },
  // 2. Verbo 'Hoon' (Fill-in)
  {
    id: 2,
    type: 'fill-in',
    question: "Main Amit ___.",
    correctAnswer: "hoon",
    translation: "(Soy Amit)",
    hint: "Verbo ser para 'Main'",
    // Note: Simple matching might struggle with transliteration vs hindi, sticking to latin for input unless specified
    explanation: "La conjugación para 'Main' es 'hoon' (हूँ)."
  },
  // 3. Familia (Match)
  {
    id: 3,
    type: 'match',
    question: "Empareja los miembros de la familia:",
    items: {
      "Madre": "Maa",
      "Padre": "Pita",
      "Hermano": "Bhai",
      "Hermana": "Bahan"
    },
    hint: "Relaciona el español con el hindi."
  },
  // 4. Ordenar frase (Order)
  {
    id: 4,
    type: 'order',
    question: "Ordena la frase: 'Yo soy Ram'",
    items: ["hoon", "Ram", "Main"], // Wait, question says Rahul, items say Ram. Let's fix items.
    correctAnswer: "Main Ram hoon", // Keeping Ram as it's shorter/simpler
    explanation: "Sujeto (Main) + Objeto/Nombre (Ram) + Verbo (hoon)."
  },
  // 5. Proximal/Distal (MCQ)
  {
    id: 5,
    type: 'mcq',
    question: "¿Qué significa 'Vah' (वह)?",
    options: [
      { text: "Esto (cerca)", isCorrect: false },
      { text: "Aquello/Él/Ella (lejos)", isCorrect: true },
      { text: "Nosotros", isCorrect: false },
      { text: "Vosotros", isCorrect: false }
    ]
  },
  // 6. Dialogo (Dialogue)
  {
    id: 6,
    type: 'dialogue',
    question: "- Namaste, aapka ___ kya hai?\n- Mera naam Sita hai.",
    correctAnswer: "naam",
    hint: "Palabra para 'nombre'",
    translation: "(- Hola, ¿cuál es su ___? / - Mi nombre es Sita.)",
  },
  // 7. Verbo 'Hai' vs 'Hain' (MCQ)
  {
    id: 7,
    type: 'mcq',
    question: "Completa: 'Ye mere pita ___.' (Estos son mis padres - plural de respeto)",
    options: [
      { text: "hai", isCorrect: false },
      { text: "hain", isCorrect: true },
      { text: "hoon", isCorrect: false },
      { text: "ho", isCorrect: false }
    ]
  },
  // 8. Vocabulario Familia (Fill-in)
  {
    id: 8,
    type: 'fill-in',
    question: "El padre de tu padre es tu ___ (en Hindi).",
    correctAnswer: "dada",
    hint: "Abuelo paterno",
    translation: "Escribe la palabra en transliteración."
  },
  // 9. Negación (Order)
  {
    id: 9,
    type: 'order',
    question: "Ordena la frase negativa: 'Yo no estoy bien'",
    items: ["hoon", "nahin", "theek", "Main"],
    correctAnswer: "Main theek nahin hoon",
    explanation: "'Nahin' va antes del verbo 'hoon'."
  },
  // 10. Pronombre Plural (MCQ)
  {
    id: 10,
    type: 'mcq',
    question: "¿Cuál es el pronombre para 'Nosotros'?",
    options: [
      { text: "Ham", isCorrect: true },
      { text: "Tum", isCorrect: false },
      { text: "Aap", isCorrect: false },
      { text: "Ve", isCorrect: false }
    ]
  },
  // 11. Identidad (Match)
  {
    id: 11,
    type: 'match',
    question: "Relaciona el pronombre con su verbo:",
    items: {
      "Main": "Hoon",
      "Tum": "Ho",
      "Aap": "Hain",
      "Yah": "Hai"
    }
  },
  // 12. Frase (Fill-in)
  {
    id: 12,
    type: 'fill-in',
    question: "Mera ___ Raj hai.",
    correctAnswer: "naam",
    hint: "Mi 'nombre' es Raj"
  },
  // 13. Cortesía (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "¿Qué expresión significa 'Gracias'?",
    options: [
      { text: "Namaste", isCorrect: false },
      { text: "Dhanyavaad", isCorrect: true },
      { text: "Krupaya", isCorrect: false },
      { text: "Maaf kijiye", isCorrect: false }
    ]
  },
  // 14. Ordenar Pregunta (Order)
  {
    id: 14,
    type: 'order',
    question: "Ordena la pregunta: '¿Quién eres tú?' (Informal)",
    items: ["ho?", "kaun", "Tum"],
    correctAnswer: "Tum kaun ho?"
  },
  // 15. Género (MCQ)
  {
    id: 15,
    type: 'mcq',
    question: "¿'Beti' significa hijo o hija?",
    options: [
      { text: "Hijo", isCorrect: false },
      { text: "Hija", isCorrect: true }
    ]
  },
  // 16. Plural (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "¿'Ve' se usa para 'Ellos' (cerca) o 'Ellos' (lejos)?",
    options: [
      { text: "Cerca", isCorrect: false },
      { text: "Lejos", isCorrect: true }
    ]
  },
  // 17. Verbo (Fill-in)
  {
    id: 17,
    type: 'fill-in',
    question: "Tum kahan ___? (¿Dónde estás?)",
    correctAnswer: "ho",
    hint: "Verbo para 'Tum'"
  },
  // 18. Saludo (Dialogue)
  {
    id: 18,
    type: 'dialogue',
    question: "- ___ milenge.\n- Alvida / Namaste.",
    correctAnswer: "Phir",
    hint: "Hasta luego",
    translation: "Completa la despedida."
  },
  // 19. Pronombre Posesivo (MCQ)
  {
    id: 19,
    type: 'mcq',
    question: "'Mera' cambia a 'Meri' cuando:",
    options: [
      { text: "El poseedor es mujer", isCorrect: false },
      { text: "El objeto poseído es femenino", isCorrect: true },
      { text: "Es plural", isCorrect: false }
    ]
  },
  // 20. Mix (Order)
  {
    id: 20,
    type: 'order',
    question: "Ordena: 'Este es mi hermano'",
    items: ["hai", "bhai", "mera", "Yah"],
    correctAnswer: "Yah mera bhai hai"
  }
];