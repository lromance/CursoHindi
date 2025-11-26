export const questions = [
  // 1. Oblicuo Singular -aa (MCQ)
  {
    id: 1,
    type: 'mcq',
    question: "Elige la forma correcta: 'En el cuarto' (Kamra)",
    options: [
      { text: "Kamra mein", isCorrect: false },
      { text: "Kamre mein", isCorrect: true },
      { text: "Kamri mein", isCorrect: false },
      { text: "Kamron mein", isCorrect: false }
    ]
  },
  // 2. Postposición Se (Match)
  {
    id: 2,
    type: 'match',
    question: "Empareja el uso de 'Se':",
    items: {
      "Ghar se": "Desde casa (Origen)",
      "Bus se": "En autobús (Medio)",
      "Mujh se": "De mí (Fuente)",
      "Ram se": "Con Ram (Instrumental/Fuente)"
    }
  },
  // 3. Presente Continuo (Order)
  {
    id: 3,
    type: 'order',
    question: "Ordena la frase: 'Yo estoy comiendo'",
    items: ["hoon", "raha", "kha", "Main"],
    correctAnswer: "Main kha raha hoon"
  },
  // 4. Pronombres Oblicuos (MCQ)
  {
    id: 4,
    type: 'mcq',
    question: "Oblicuo de 'Main' con 'par':",
    options: [
      { text: "Main par", isCorrect: false },
      { text: "Mera par", isCorrect: false },
      { text: "Mujh par", isCorrect: true },
      { text: "Mere par", isCorrect: false }
    ]
  },
  // 5. Postposición Ko (Fill-in)
  {
    id: 5,
    type: 'fill-in',
    question: "Ram ___ bulao. (Llama a Ram)",
    correctAnswer: "ko",
    hint: "Marcador de objeto",
    translation: ""
  },
  // 6. Concordancia Continuo (MCQ)
  {
    id: 6,
    type: 'mcq',
    question: "Sita (fem) ___ rahi hai.",
    options: [
      { text: "bol", isCorrect: true },
      { text: "bolna", isCorrect: false },
      { text: "bolta", isCorrect: false },
      { text: "bole", isCorrect: false }
    ]
  },
  // 7. Dena/Lena (Match)
  {
    id: 7,
    type: 'match',
    question: "Empareja el verbo:",
    items: {
      "Dena": "Dar",
      "Lena": "Tomar",
      "Mujhe do": "Dame",
      "Mujh se lo": "Toma de mí"
    }
  },
  // 8. Oblicuo Vah (Fill-in)
  {
    id: 8,
    type: 'fill-in',
    question: "___ ghar mein. (En su casa - de él, lejos. Vah -> Us)",
    correctAnswer: "uske",
    hint: "Oblicuo de 'Vah' + ke (por 'ke ghar mein' implícito o posesivo)",
    translation: "(Aquí buscamos 'Uske ghar mein' o 'Us ghar mein' si es demostrativo. Asumamos demostrativo: 'En esa casa')"
  },
  // Correction for 8: Vah ghar mein -> Us ghar mein. Vah ka ghar -> Uska ghar -> Uske ghar mein.
  // Let's simplify hint: "En esa casa" (Demostrativo)
  {
    id: 8,
    type: 'fill-in',
    question: "___ ghar mein. (En ESA casa)",
    correctAnswer: "us",
    hint: "Oblicuo de 'Vah'",
    translation: ""
  },
  // 9. Ke liye (MCQ)
  {
    id: 9,
    type: 'mcq',
    question: "Traduce: 'Para ti'.",
    options: [
      { text: "Tumhara liye", isCorrect: false },
      { text: "Tumhare liye", isCorrect: true },
      { text: "Tum liye", isCorrect: false },
      { text: "Tera liye", isCorrect: false }
    ]
  },
  // 10. Diálogo Continuo (Dialogue)
  {
    id: 10,
    type: 'dialogue',
    question: "- Aap kya kar ___ hain?\n- Main padh raha hoon.",
    correctAnswer: "rahe",
    hint: "Continuo formal",
    translation: "(- ¿Qué está haciendo Ud.? / - Estoy leyendo.)"
  },
  // 11. Postposición Lugar (MCQ)
  {
    id: 11,
    type: 'mcq',
    question: "'Mez par' significa:",
    options: [
      { text: "Debajo de la mesa", isCorrect: false },
      { text: "Sobre la mesa", isCorrect: true },
      { text: "En la mesa (dentro)", isCorrect: false },
      { text: "Al lado de la mesa", isCorrect: false }
    ]
  },
  // 12. Ordenar Negación (Order)
  {
    id: 12,
    type: 'order',
    question: "Ordena: 'No estás escuchando'",
    items: ["rahe", "nahin", "sun", "ho", "Tum"],
    correctAnswer: "Tum sun nahin rahe ho"
  },
  // 13. Oblicuo Femenino (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "¿Cambia 'Larki' en 'Larki ko'?",
    options: [
      { text: "Sí, a Larke", isCorrect: false },
      { text: "Sí, a Larkiya", isCorrect: false },
      { text: "No, queda Larki", isCorrect: true },
      { text: "Sí, a Larkiyon", isCorrect: false }
    ],
    explanation: "Femenino singular no cambia en oblicuo."
  },
  // 14. Ke saath (Fill-in)
  {
    id: 14,
    type: 'fill-in',
    question: "Mere ___ ao. (Ven conmigo)",
    correctAnswer: "saath",
    hint: "Con (compañía)",
    translation: ""
  },
  // 15. Ko Dativo (MCQ)
  {
    id: 15,
    type: 'mcq',
    question: "Traduce: 'Dame el libro' (A mí da el libro).",
    options: [
      { text: "Main kitab do", isCorrect: false },
      { text: "Mera kitab do", isCorrect: false },
      { text: "Mujhe kitab do", isCorrect: true },
      { text: "Mujh kitab do", isCorrect: false }
    ]
  },
  // 16. Continuous Plural (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "Ve ja ___ hain.",
    options: [
      { text: "raha", isCorrect: false },
      { text: "rahi", isCorrect: false },
      { text: "rahe", isCorrect: true },
      { text: "ta", isCorrect: false }
    ]
  },
  // 17. Oblicuo Ye (MCQ)
  {
    id: 17,
    type: 'mcq',
    question: "Forma oblicua de 'Ye' (Estos):",
    options: [
      { text: "Is", isCorrect: false },
      { text: "Un", isCorrect: false },
      { text: "In", isCorrect: true },
      { text: "Ye", isCorrect: false }
    ]
  },
  // 18. Objeto Indirecto (Order)
  {
    id: 18,
    type: 'order',
    question: "Ordena: 'Da agua a Ram'",
    items: ["do", "paani", "ko", "Ram"],
    correctAnswer: "Ram ko paani do"
  },
  // 19. Postposiciones (Fill-in)
  {
    id: 19,
    type: 'fill-in',
    question: "Ghar ___ kaun hai? (¿Quién está EN casa?)",
    correctAnswer: "mein",
    hint: "En/Dentro",
    translation: ""
  },
  // 20. Oblicuo Aap (MCQ)
  {
    id: 20,
    type: 'mcq',
    question: "Forma oblicua de 'Aap' con 'ko':",
    options: [
      { text: "Aapko", isCorrect: true },
      { text: "Aapke", isCorrect: false },
      { text: "Aapse", isCorrect: false },
      { text: "Tumko", isCorrect: false }
    ]
  }
];