export const questions = [
  // 1. Oblicuo Singular (MCQ)
  {
    id: 1,
    type: 'mcq',
    question: "Elige la forma correcta: 'En la habitación' (Kamra - masc. -aa)",
    options: [
      { text: "Kamra mein", isCorrect: false },
      { text: "Kamre mein", isCorrect: true },
      { text: "Kamri mein", isCorrect: false },
      { text: "Kamro mein", isCorrect: false }
    ]
  },
  // 2. Postposiciones (Match)
  {
    id: 2,
    type: 'match',
    question: "Empareja la postposición:",
    items: {
      "Mein": "En/Dentro",
      "Par": "Sobre",
      "Se": "Desde/Con",
      "Ko": "A/Para"
    }
  },
  // 3. Dena/Lena (MCQ)
  {
    id: 3,
    type: 'mcq',
    question: "Si dices 'Main Ram ___ kitab deta hoon' (Doy el libro A Ram), ¿qué partícula usas?",
    options: [
      { text: "se", isCorrect: false },
      { text: "ko", isCorrect: true },
      { text: "par", isCorrect: false },
      { text: "mein", isCorrect: false }
    ]
  },
  // 4. Presente Continuo (Order)
  {
    id: 4,
    type: 'order',
    question: "Ordena: 'Yo estoy yendo a casa'",
    items: ["hoon", "raha", "ghar", "Main", "ja"],
    correctAnswer: "Main ghar ja raha hoon"
  },
  // 5. Lena (MCQ)
  {
    id: 5,
    type: 'mcq',
    question: "Si dices 'Main Ram ___ kitab leta hoon' (Tomo el libro DE Ram), ¿qué partícula usas?",
    options: [
      { text: "se", isCorrect: true },
      { text: "ko", isCorrect: false },
      { text: "par", isCorrect: false },
      { text: "mein", isCorrect: false }
    ]
  },
  // 6. Oblicuo Pronombre (Fill-in)
  {
    id: 6,
    type: 'fill-in',
    question: "___ paani chahiye. (Necesito agua - A mí)",
    correctAnswer: "mujhe",
    hint: "Forma 'ko' de Main",
    translation: ""
  },
  // 7. Presente Continuo Fem (MCQ)
  {
    id: 7,
    type: 'mcq',
    question: "Traduce: 'Sita está leyendo'.",
    options: [
      { text: "Sita padh raha hai", isCorrect: false },
      { text: "Sita padh rahi hai", isCorrect: true },
      { text: "Sita padh rahe hai", isCorrect: false },
      { text: "Sita padhti hai", isCorrect: false }
    ]
  },
  // 8. Postposición (Fill-in)
  {
    id: 8,
    type: 'fill-in',
    question: "Kitaab mez ___ hai. (El libro está SOBRE la mesa)",
    correctAnswer: "par",
    hint: "Sobre/En",
    translation: ""
  },
  // 9. Oblicuo Vah (MCQ)
  {
    id: 9,
    type: 'mcq',
    question: "Forma oblicua de 'Vah' (Ese/Aquel):",
    options: [
      { text: "Is", isCorrect: false },
      { text: "Us", isCorrect: true },
      { text: "Un", isCorrect: false },
      { text: "In", isCorrect: false }
    ]
  },
  // 10. Diálogo (Dialogue)
  {
    id: 10,
    type: 'dialogue',
    question: "- Tum kahan ja ___ ho?\n- Main bazaar ja raha hoon.",
    correctAnswer: "rahe",
    hint: "Partícula continuo masc. pl.",
    translation: "(- ¿A dónde estás yendo? / - Voy al mercado.)"
  },
  // 11. Ke liye (MCQ)
  {
    id: 11,
    type: 'mcq',
    question: "Traduce: 'Para mi padre'.",
    options: [
      { text: "Mere pita ke liye", isCorrect: true },
      { text: "Mera pita ke liye", isCorrect: false },
      { text: "Mere pita se", isCorrect: false },
      { text: "Mera pita ko", isCorrect: false }
    ],
    explanation: "'Mera' cambia a 'Mere' porque 'Pita' está en caso oblicuo (aunque la palabra pita no cambia, el adjetivo sí) debido a 'ke liye'."
  },
  // 12. Continuous Question (Order)
  {
    id: 12,
    type: 'order',
    question: "Ordena: '¿Qué estás haciendo?' (Tum)",
    items: ["hoon", "rahe", "kya", "kar", "Tum"],
    correctAnswer: "Tum kya kar rahe ho?"
  },
  // 13. Oblique Noun (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "¿'Ghar' cambia en 'Ghar mein'?",
    options: [
      { text: "Sí, Ghare", isCorrect: false },
      { text: "No, no cambia", isCorrect: true }
    ]
  },
  // 14. Object Marker Ko (MCQ)
  {
    id: 14,
    type: 'mcq',
    question: "En 'Main Ram ko dekhta hoon', 'ko' indica:",
    options: [
      { text: "Origen", isCorrect: false },
      { text: "Objeto específico/persona", isCorrect: true },
      { text: "Lugar", isCorrect: false },
      { text: "Tiempo", isCorrect: false }
    ]
  },
  // 15. Oblique Ye (Fill-in)
  {
    id: 15,
    type: 'fill-in',
    question: "___ kitabon mein. (En estos libros - Ye -> In)",
    correctAnswer: "in",
    hint: "Oblicuo de 'Ye'",
    translation: ""
  },
  // 16. Continuous Plural (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "Ham hindi bol ___ hain. (Estamos hablando)",
    options: [
      { text: "raha", isCorrect: false },
      { text: "rahi", isCorrect: false },
      { text: "rahe", isCorrect: true },
      { text: "ta", isCorrect: false }
    ]
  },
  // 17. Ke Saath (MCQ)
  {
    id: 17,
    type: 'mcq',
    question: "Traduce: 'Con Ram'.",
    options: [
      { text: "Ram ke saath", isCorrect: true },
      { text: "Ram ki saath", isCorrect: false },
      { text: "Ram se saath", isCorrect: false },
      { text: "Ram ko saath", isCorrect: false }
    ]
  },
  // 18. Negative Continuous (Order)
  {
    id: 18,
    type: 'order',
    question: "Ordena: 'No estoy durmiendo'",
    items: ["hoon", "so", "raha", "nahin", "Main"],
    correctAnswer: "Main so nahin raha hoon"
  },
  // 19. Tumhe (MCQ)
  {
    id: 19,
    type: 'mcq',
    question: "'Tumhe' es la forma contraída de:",
    options: [
      { text: "Tumko", isCorrect: true },
      { text: "Tumse", isCorrect: false },
      { text: "Tumpar", isCorrect: false },
      { text: "Tumne", isCorrect: false }
    ]
  },
  // 20. Mixed (Fill-in)
  {
    id: 20,
    type: 'fill-in',
    question: "Vah dukan ___ ja raha hai. (Él va a la tienda)",
    correctAnswer: "ko",
    hint: "A (dirección/destino)",
    translation: "(Nota: A veces se omite 'ko' con lugares, pero úsalo aquí)"
  }
];