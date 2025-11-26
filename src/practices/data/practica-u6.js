export const questions = [
  // 1. Ke Paas (MCQ)
  {
    id: 1,
    type: 'mcq',
    question: "¿Cómo dices 'Tengo un bolígrafo'?",
    options: [
      { text: "Mera pen hai", isCorrect: false },
      { text: "Mere paas pen hai", isCorrect: true },
      { text: "Mujhe pen hai", isCorrect: false },
      { text: "Main pen hai", isCorrect: false }
    ]
  },
  // 2. Body Parts (Match)
  {
    id: 2,
    type: 'match',
    question: "Empareja la parte del cuerpo:",
    items: {
      "Sir": "Cabeza",
      "Aankh": "Ojo",
      "Haath": "Mano",
      "Pet": "Estómago"
    }
  },
  // 3. Apna (Fill-in)
  {
    id: 3,
    type: 'fill-in',
    question: "Main ___ kaam kar raha hoon. (Hago mi [propio] trabajo)",
    correctAnswer: "apna",
    hint: "Pronombre reflexivo",
    translation: ""
  },
  // 4. Genitive (Order)
  {
    id: 4,
    type: 'order',
    question: "Ordena: 'La casa de Ram'",
    items: ["ghar", "Ram", "ka"],
    correctAnswer: "Ram ka ghar"
  },
  // 5. Animals (MCQ)
  {
    id: 5,
    type: 'mcq',
    question: "¿Qué significa 'Kutta'?",
    options: [
      { text: "Gato", isCorrect: false },
      { text: "Perro", isCorrect: true },
      { text: "Ratón", isCorrect: false },
      { text: "Caballo", isCorrect: false }
    ]
  },
  // 6. Possession Question (Dialogue)
  {
    id: 6,
    type: 'dialogue',
    question: "- Kya tumhare paas paise hain?\n- Haan, ___ paas paise hain.",
    correctAnswer: "mere",
    hint: "Tengo (Mí)",
    translation: "(- ¿Tienes dinero? / - Sí, tengo dinero.)"
  },
  // 7. Gender Body Parts (MCQ)
  {
    id: 7,
    type: 'mcq',
    question: "¿'Naak' (Nariz) es masculino o femenino?",
    options: [
      { text: "Masculino", isCorrect: false },
      { text: "Femenino", isCorrect: true }
    ]
  },
  // 8. Plural Ke Paas (Fill-in)
  {
    id: 8,
    type: 'fill-in',
    question: "Hamare ___ ek bada ghar hai. (Tenemos una casa grande)",
    correctAnswer: "paas",
    hint: "Parte de la construcción de posesión",
    translation: ""
  },
  // 9. Animal Match (Match)
  {
    id: 9,
    type: 'match',
    question: "Empareja el animal:",
    items: {
      "Billi": "Gato/a",
      "Haathi": "Elefante",
      "Sher": "León",
      "Moor": "Pavo real"
    }
  },
  // 10. Incorrect Apna (MCQ)
  {
    id: 10,
    type: 'mcq',
    question: "Elige la frase CORRECTA para 'Él ama a su (propia) madre'.",
    options: [
      { text: "Vah uski maa se pyaar karta hai", isCorrect: false },
      { text: "Vah apni maa se pyaar karta hai", isCorrect: true },
      { text: "Vah mera maa se pyaar karta hai", isCorrect: false },
      { text: "Vah apne maa se pyaar karta hai", isCorrect: false }
    ]
  },
  // 11. Order Sentence (Order)
  {
    id: 11,
    type: 'order',
    question: "Ordena: 'Me duele la cabeza'",
    items: ["hai", "dard", "sir", "Mera"],
    correctAnswer: "Mera sir dard hai"
  },
  // 12. Genitive Plural (MCQ)
  {
    id: 12,
    type: 'mcq',
    question: "Traduce: 'Los juguetes de los niños' (Khilone - juguetes).",
    options: [
      { text: "Bachchon ka khilone", isCorrect: false },
      { text: "Bachchon ke khilone", isCorrect: true },
      { text: "Bachchon ki khilone", isCorrect: false },
      { text: "Bachchon ko khilone", isCorrect: false }
    ]
  },
  // 13. Body Part (Fill-in)
  {
    id: 13,
    type: 'fill-in',
    question: "Mera ___ (corazón) dhadak raha hai.",
    correctAnswer: "dil",
    hint: "Palabra para corazón",
    translation: ""
  },
  // 14. Posesión Usted (MCQ)
  {
    id: 14,
    type: 'mcq',
    question: "¿Cómo dices 'Ud. tiene' (objeto)?",
    options: [
      { text: "Aap paas", isCorrect: false },
      { text: "Aapke paas", isCorrect: true },
      { text: "Apna paas", isCorrect: false },
      { text: "Tumhare paas", isCorrect: false }
    ]
  },
  // 15. Animal Gender (MCQ)
  {
    id: 15,
    type: 'mcq',
    question: "¿'Gaay' (Vaca) es...?",
    options: [
      { text: "Femenino", isCorrect: true },
      { text: "Masculino", isCorrect: false }
    ]
  },
  // 16. Diálogo Doctor (Dialogue)
  {
    id: 16,
    type: 'dialogue',
    question: "- Doctor, mujhe ___ dard hai.\n- Kahan? Pet mein?",
    correctAnswer: "pet",
    hint: "Estómago",
    translation: "(- Doctor, me duele el ___. / - ¿Dónde? ¿En el estómago?)"
  },
  // 17. Tongue (MCQ)
  {
    id: 17,
    type: 'mcq',
    question: "¿Qué significa 'Jiibh'?",
    options: [
      { text: "Dientes", isCorrect: false },
      { text: "Lengua", isCorrect: true },
      { text: "Labios", isCorrect: false },
      { text: "Garganta", isCorrect: false }
    ]
  },
  // 18. Ke Paas Negative (Order)
  {
    id: 18,
    type: 'order',
    question: "Ordena: 'No tengo dinero'",
    items: ["nahin", "paise", "paas", "Mere", "hain"],
    correctAnswer: "Mere paas paise nahin hain"
  },
  // 19. Genitive Object (MCQ)
  {
    id: 19,
    type: 'mcq',
    question: "Traduce: 'La cola del perro'. (Poonch - cola, fem)",
    options: [
      { text: "Kutta ka poonch", isCorrect: false },
      { text: "Kutta ki poonch", isCorrect: false },
      { text: "Kutte ki poonch", isCorrect: true },
      { text: "Kutte ka poonch", isCorrect: false }
    ],
    explanation: "Kutta cambia a oblicuo 'Kutte' por la postposición 'ki'. 'Ki' se usa porque 'Poonch' es femenino."
  },
  // 20. Rabbit (Fill-in)
  {
    id: 20,
    type: 'fill-in',
    question: "Yeh ek ___ (conejo/ratón) hai. (Usa la palabra para Ratón)",
    correctAnswer: "chuha",
    hint: "Ratón",
    translation: ""
  }
];