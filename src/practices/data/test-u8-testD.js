export const questions = [
  // 1. Oblicuo Pronombre (MCQ)
  {
    id: 1,
    type: 'mcq',
    question: "Elige la forma correcta: 'Conmigo'",
    options: [
      { text: "Mere saath", isCorrect: true },
      { text: "Mera saath", isCorrect: false },
      { text: "Mujh saath", isCorrect: false },
      { text: "Main saath", isCorrect: false }
    ]
  },
  // 2. Postposiciones (Match)
  {
    id: 2,
    type: 'match',
    question: "Empareja la postposición:",
    items: {
      "Ke liye": "Para",
      "Ke saath": "Con",
      "Se": "Desde/De",
      "Ko": "A (Dativo)"
    }
  },
  // 3. Presente Continuo (Order)
  {
    id: 3,
    type: 'order',
    question: "Ordena: 'Ella está escribiendo'",
    items: ["hai", "rahi", "likh", "Vah"],
    correctAnswer: "Vah likh rahi hai"
  },
  // 4. Vocabulario Ciudad (MCQ)
  {
    id: 4,
    type: 'mcq',
    question: "¿Qué es 'Mandir'?",
    options: [
      { text: "Escuela", isCorrect: false },
      { text: "Templo", isCorrect: true },
      { text: "Tienda", isCorrect: false },
      { text: "Mercado", isCorrect: false }
    ]
  },
  // 5. Dena/Lena (Fill-in)
  {
    id: 5,
    type: 'fill-in',
    question: "Mujhe kitab ___. (Dame el libro)",
    correctAnswer: "do",
    hint: "Verbo 'dar' imperativo",
    translation: ""
  },
  // 6. Oblicuo Plural (MCQ)
  {
    id: 6,
    type: 'mcq',
    question: "Traduce: 'Para nosotros'.",
    options: [
      { text: "Hamare liye", isCorrect: true },
      { text: "Ham liye", isCorrect: false },
      { text: "Hame liye", isCorrect: false },
      { text: "Hamara liye", isCorrect: false }
    ]
  },
  // 7. Continuous Question (Dialogue)
  {
    id: 7,
    type: 'dialogue',
    question: "- Tum kya ___ rahe ho?\n- Main khel raha hoon.",
    correctAnswer: "kar",
    hint: "Hacer",
    translation: "(- ¿Qué estás ___? / - Estoy jugando.)"
  },
  // 8. Clima (Match)
  {
    id: 8,
    type: 'match',
    question: "Empareja el clima:",
    items: {
      "Garmi": "Calor",
      "Thand": "Frío",
      "Barish": "Lluvia",
      "Havaa": "Viento"
    }
  },
  // 9. Oblicuo Vah (MCQ)
  {
    id: 9,
    type: 'mcq',
    question: "Traduce: 'De él' (Distante - Vah -> Us se).",
    options: [
      { text: "Us se", isCorrect: true },
      { text: "Is se", isCorrect: false },
      { text: "Un se", isCorrect: false },
      { text: "Vah se", isCorrect: false }
    ]
  },
  // 10. Ropa (Fill-in)
  {
    id: 10,
    type: 'fill-in',
    question: "Main ___ pehen raha hoon. (Estoy vistiendo pantalones)",
    correctAnswer: "patloon",
    hint: "Pantalones",
    translation: ""
  },
  // 11. Ke Paas (Order)
  {
    id: 11,
    type: 'order',
    question: "Ordena: 'La escuela está cerca de la casa'",
    items: ["hai", "paas", "ke", "ghar", "School"],
    correctAnswer: "School ghar ke paas hai"
  },
  // 12. Continuous Negation (MCQ)
  {
    id: 12,
    type: 'mcq',
    question: "Traduce: 'No estoy yendo'.",
    options: [
      { text: "Main nahin ja raha hoon", isCorrect: true },
      { text: "Main ja raha nahin hoon", isCorrect: false },
      { text: "Main ja nahin raha hoon", isCorrect: false },
      { text: "Nahin main ja raha hoon", isCorrect: false }
    ],
    explanation: "'Nahin' suele ir antes del verbo principal 'ja'."
  },
  // 13. Oblicuo Kaun (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "'Kiske saath' significa:",
    options: [
      { text: "¿Con quién?", isCorrect: true },
      { text: "¿Para quién?", isCorrect: false },
      { text: "¿De quién?", isCorrect: false },
      { text: "¿A quién?", isCorrect: false }
    ]
  },
  // 14. Vocabulario Temporal (Match)
  {
    id: 14,
    type: 'match',
    question: "Empareja:",
    items: {
      "Abhi": "Ahora",
      "Jaldi": "Pronto/Rápido",
      "Dheere": "Despacio",
      "Baad mein": "Después"
    }
  },
  // 15. Continuous Plural (Fill-in)
  {
    id: 15,
    type: 'fill-in',
    question: "Ye bachche khel ___ hain. (Estos niños están jugando)",
    correctAnswer: "rahe",
    hint: "Continuo plural",
    translation: ""
  },
  // 16. Oblicuo Aap (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "Traduce: 'Con usted'.",
    options: [
      { text: "Aapke saath", isCorrect: true },
      { text: "Aap saath", isCorrect: false },
      { text: "Apna saath", isCorrect: false },
      { text: "Tumhare saath", isCorrect: false }
    ]
  },
  // 17. Verbo Lena (MCQ)
  {
    id: 17,
    type: 'mcq',
    question: "¿'Paise lo' significa?",
    options: [
      { text: "Da dinero", isCorrect: false },
      { text: "Toma dinero", isCorrect: true },
      { text: "Mira dinero", isCorrect: false },
      { text: "Gasta dinero", isCorrect: false }
    ]
  },
  // 18. Ko Dativo (Order)
  {
    id: 18,
    type: 'order',
    question: "Ordena: 'Dámelo a mí'",
    items: ["do", "mujhe", "Yah"],
    correctAnswer: "Yah mujhe do"
  },
  // 19. Postposición Lugar (MCQ)
  {
    id: 19,
    type: 'mcq',
    question: "En 'Ghar ke saamne', 'ke saamne' significa:",
    options: [
      { text: "Detrás de", isCorrect: false },
      { text: "Enfrente de", isCorrect: true },
      { text: "Encima de", isCorrect: false },
      { text: "Debajo de", isCorrect: false }
    ]
  },
  // 20. Mixed (Fill-in)
  {
    id: 20,
    type: 'fill-in',
    question: "Main tumse baat kar ___ hoon. (Estoy hablando contigo - Masc)",
    correctAnswer: "raha",
    hint: "Continuo masc. sing.",
    translation: ""
  }
];