export const questions = [
  // 1. Interrogativo 'Kya' (Fill-in)
  {
    id: 1,
    type: 'fill-in',
    question: "Aapka naam ___ hai?",
    correctAnswer: "kya",
    hint: "Qué (interrogativo)",
    translation: "¿Cómo se llama usted?"
  },
  // 2. Origen (Match)
  {
    id: 2,
    type: 'match',
    question: "Empareja el país con su nacionalidad/idioma:",
    items: {
      "Bharat": "Bharatiya",
      "Cheen": "Cheeni",
      "Japan": "Japani",
      "Rus": "Roosi"
    }
  },
  // 3. Ordenar frase (Order)
  {
    id: 3,
    type: 'order',
    question: "Ordena la frase: '¿De dónde eres?'",
    items: ["se", "ho?", "Tum", "kahan"],
    correctAnswer: "Tum kahan se ho?"
  },
  // 4. Profesiones (MCQ)
  {
    id: 4,
    type: 'mcq',
    question: "¿Qué significa 'Shikshak'?",
    options: [
      { text: "Estudiante", isCorrect: false },
      { text: "Profesor", isCorrect: true },
      { text: "Médico", isCorrect: false },
      { text: "Escritor", isCorrect: false }
    ]
  },
  // 5. Números (Match)
  {
    id: 5,
    type: 'match',
    question: "Empareja los números:",
    items: {
      "11": "Gyaarah",
      "15": "Pandrah",
      "18": "Athaarah",
      "20": "Bees"
    }
  },
  // 6. Negación (Order)
  {
    id: 6,
    type: 'order',
    question: "Ordena la frase negativa: 'Yo no soy médico'",
    items: ["hoon", "nahin", "doctor", "Main"],
    correctAnswer: "Main doctor nahin hoon"
  },
  // 7. Interrogativo 'Kahan' (MCQ)
  {
    id: 7,
    type: 'mcq',
    question: "¿Qué pregunta es correcta para '¿Dónde está el baño?'",
    options: [
      { text: "Shauchalay kya hai?", isCorrect: false },
      { text: "Shauchalay kahan hai?", isCorrect: true },
      { text: "Shauchalay kaun hai?", isCorrect: false },
      { text: "Shauchalay kab hai?", isCorrect: false }
    ]
  },
  // 8. Profesión Femenina (MCQ)
  {
    id: 8,
    type: 'mcq',
    question: "¿Cómo se dice 'Profesora'?",
    options: [
      { text: "Shikshak", isCorrect: false },
      { text: "Shikshika", isCorrect: true },
      { text: "Chatra", isCorrect: false },
      { text: "Lekhika", isCorrect: false }
    ]
  },
  // 9. Diálogo (Dialogue)
  {
    id: 9,
    type: 'dialogue',
    question: "- Aap ___ hain?\n- Main theek hoon, dhanyavaad.",
    correctAnswer: "kaise",
    hint: "Cómo (interrogativo)",
    translation: "(- ¿___ está usted? / - Estoy bien, gracias.)"
  },
  // 10. 'Se' Origen (Fill-in)
  {
    id: 10,
    type: 'fill-in',
    question: "Main Spain ___ hoon.",
    correctAnswer: "se",
    hint: "Partícula de origen (de/desde)",
    translation: "Soy de España."
  },
  // 11. Traducción Inversa (MCQ)
  {
    id: 11,
    type: 'mcq',
    question: "¿Qué significa 'Tum kya karte ho?'",
    options: [
      { text: "¿Cómo te llamas?", isCorrect: false },
      { text: "¿Qué haces? (Profesión)", isCorrect: true },
      { text: "¿Dónde vives?", isCorrect: false },
      { text: "¿Quién eres?", isCorrect: false }
    ]
  },
  // 12. Números 11-14 (Match)
  {
    id: 12,
    type: 'match',
    question: "Empareja los números:",
    items: {
      "11": "Gyaarah",
      "12": "Baarah",
      "13": "Teraah",
      "14": "Chaudah"
    }
  },
  // 13. Interrogativo 'Kaun' (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "Si llaman a la puerta, preguntas: '___ hai?'",
    options: [
      { text: "Kya", isCorrect: false },
      { text: "Kaun", isCorrect: true },
      { text: "Kahan", isCorrect: false },
      { text: "Kab", isCorrect: false }
    ]
  },
  // 14. Ordenar Pregunta (Order)
  {
    id: 14,
    type: 'order',
    question: "Ordena: '¿Por qué estás aquí?'",
    items: ["kyon", "ho?", "yahan", "Tum"],
    correctAnswer: "Tum yahan kyon ho?"
  },
  // 15. Profesión (Fill-in)
  {
    id: 15,
    type: 'fill-in',
    question: "Main ek ___ hoon. (Soy un estudiante)",
    correctAnswer: "chatra",
    hint: "Palabra para estudiante",
    translation: "Usa transliteración simple."
  },
  // 16. Negación Interrogativa (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "¿Cómo preguntas '¿No eres indio?'",
    options: [
      { text: "Kya tum Bharatiya nahin ho?", isCorrect: true },
      { text: "Tum Bharatiya nahin kya ho?", isCorrect: false },
      { text: "Kya nahin tum Bharatiya ho?", isCorrect: false },
      { text: "Tum kya Bharatiya ho?", isCorrect: false }
    ]
  },
  // 17. 'Kitna' (MCQ)
  {
    id: 17,
    type: 'mcq',
    question: "Para preguntar la hora o cantidad, usamos:",
    options: [
      { text: "Kitna / Kitne", isCorrect: true },
      { text: "Kahan", isCorrect: false },
      { text: "Kaun", isCorrect: false },
      { text: "Kya", isCorrect: false }
    ]
  },
  // 18. País (MCQ)
  {
    id: 18,
    type: 'mcq',
    question: "¿'Amrika' significa?",
    options: [
      { text: "África", isCorrect: false },
      { text: "América (EEUU)", isCorrect: true },
      { text: "Amigo", isCorrect: false },
      { text: "Inglaterra", isCorrect: false }
    ]
  },
  // 19. Frase Completa (Order)
  {
    id: 19,
    type: 'order',
    question: "Ordena: 'Yo soy de la India'",
    items: ["hoon", "se", "Main", "Bharat"],
    correctAnswer: "Main Bharat se hoon"
  },
  // 20. Verbo (Fill-in)
  {
    id: 20,
    type: 'fill-in',
    question: "Aap kahan rehte ___?",
    correctAnswer: "hain",
    hint: "Verbo auxiliar para 'Aap'",
    translation: "(¿Dónde vive usted?)"
  }
];