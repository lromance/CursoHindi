export const questions = [
  {
    id: 1,
    type: 'mcq',
    question: "¿Cuándo se usa el pronombre reflexivo 'Apna'?",
    options: [
      { text: "Siempre que hablamos de posesión", isCorrect: false },
      { text: "Cuando el poseedor es el mismo sujeto de la oración", isCorrect: true },
      { text: "Solo con la palabra 'Yo'", isCorrect: false },
      { text: "Nunca, es arcaico", isCorrect: false }
    ]
  },
  {
    id: 2,
    type: 'mcq',
    question: "Traduce: 'Yo hago mi trabajo'.",
    options: [
      { text: "Main mera kaam karta hoon", isCorrect: false },
      { text: "Main apna kaam karta hoon", isCorrect: true },
      { text: "Main uska kaam karta hoon", isCorrect: false },
      { text: "Main apne kaam karta hoon", isCorrect: false }
    ],
    explanation: "Sujeto (Main) y poseedor (mi) son el mismo -> Apna."
  },
  {
    id: 3,
    type: 'mcq',
    question: "Completa: 'Vah ___ ghar ja raha hai.' (Él va a su [propia] casa)",
    options: [
      { text: "uska", isCorrect: false },
      { text: "apna", isCorrect: false },
      { text: "apne", isCorrect: true },
      { text: "apni", isCorrect: false }
    ],
    explanation: "'Ghar' es masculino, pero seguido de la postposición 'ja raha hai' (implica movimiento/lugar), a menudo se usa la forma oblicua 'Apne ghar' (a su casa)."
  },
  {
    id: 4,
    type: 'mcq',
    question: "Si digo 'Ram uski kitaab padhta hai', significa:",
    options: [
      { text: "Ram lee su propia libro", isCorrect: false },
      { text: "Ram lee el libro de él/ella (otra persona)", isCorrect: true },
      { text: "Ram lee nuestro libro", isCorrect: false },
      { text: "Ram no lee", isCorrect: false }
    ]
  },
  {
    id: 5,
    type: 'mcq',
    question: "Elige la forma correcta: 'Nosotros amamos nuestro país'.",
    options: [
      { text: "Ham hamara desh...", isCorrect: false },
      { text: "Ham apna desh...", isCorrect: false },
      { text: "Ham apne desh...", isCorrect: true },
      { text: "Ham apni desh...", isCorrect: false }
    ],
    explanation: "Objeto directo 'desh' (país) a menudo toma 'ko' implícito o explícito, usando la forma oblicua 'apne', o simplemente 'apna desh' si es nominativo. Aquí 'apne' es más común en construcciones de amor/respeto hacia algo."
  },
  {
    id: 6,
    type: 'mcq',
    question: "Genitivo: 'La casa de Ram'.",
    options: [
      { text: "Ram ki ghar", isCorrect: false },
      { text: "Ram ke ghar", isCorrect: false },
      { text: "Ram ka ghar", isCorrect: true },
      { text: "Ram ko ghar", isCorrect: false }
    ]
  },
  {
    id: 7,
    type: 'mcq',
    question: "Genitivo: 'El libro de Sita'.",
    options: [
      { text: "Sita ka kitaab", isCorrect: false },
      { text: "Sita ki kitaab", isCorrect: true },
      { text: "Sita ke kitaab", isCorrect: false },
      { text: "Sita ko kitaab", isCorrect: false }
    ]
  },
  {
    id: 8,
    type: 'mcq',
    question: "Concordancia de 'Apna': 'Ella lee su libro (fem)'.",
    options: [
      { text: "Vah apna kitaab padhti hai", isCorrect: false },
      { text: "Vah apni kitaab padhti hai", isCorrect: true },
      { text: "Vah apne kitaab padhti hai", isCorrect: false },
      { text: "Vah uski kitaab padhti hai", isCorrect: false }
    ]
  },
  {
    id: 9,
    type: 'mcq',
    question: "Identifica el error: 'Main uski maa ko dekhta hoon' (Viendo a mi propia madre).",
    options: [
      { text: "Debería ser 'apni maa'", isCorrect: true },
      { text: "Debería ser 'mera maa'", isCorrect: false },
      { text: "Debería ser 'apna maa'", isCorrect: false },
      { text: "No hay error", isCorrect: false }
    ]
  },
  {
    id: 10,
    type: 'mcq',
    question: "'Mohan ke pita' significa:",
    options: [
      { text: "La madre de Mohan", isCorrect: false },
      { text: "El padre de Mohan", isCorrect: true },
      { text: "El hermano de Mohan", isCorrect: false },
      { text: "La hermana de Mohan", isCorrect: false }
    ]
  },
  {
    id: 11,
    type: 'mcq',
    question: "¿Por qué se usa 'ke' en 'Mohan ke pita' si padre es singular?",
    options: [
      { text: "Es plural gramatical", isCorrect: false },
      { text: "Es honorífico (respeto)", isCorrect: true },
      { text: "Es un error", isCorrect: false },
      { text: "Es femenino", isCorrect: false }
    ]
  },
  {
    id: 12,
    type: 'mcq',
    question: "Traduce: 'Lava tus manos'. (Tum)",
    options: [
      { text: "Tumhara haath dhoo", isCorrect: false },
      { text: "Apne haath dhoo", isCorrect: true },
      { text: "Tera haath dhoo", isCorrect: false },
      { text: "Apna haath dhoo", isCorrect: false }
    ],
    explanation: "Manos es plural (haath), sujeto eres tú -> Apne."
  },
  {
    id: 13,
    type: 'mcq',
    question: "Genitivo: 'La puerta de la habitación'.",
    options: [
      { text: "Kamre ka darvaaza", isCorrect: true },
      { text: "Kamra ka darvaaza", isCorrect: false },
      { text: "Kamre ki darvaaza", isCorrect: false },
      { text: "Kamra ki darvaaza", isCorrect: false }
    ],
    explanation: "Kamra cambia a oblicuo 'Kamre' porque le sigue la postposición 'ka'."
  },
  {
    id: 14,
    type: 'mcq',
    question: "Completa: 'Rahul ___ dost' (Los amigos de Rahul).",
    options: [
      { text: "ka", isCorrect: false },
      { text: "ki", isCorrect: false },
      { text: "ke", isCorrect: true },
      { text: "ko", isCorrect: false }
    ]
  },
  {
    id: 15,
    type: 'mcq',
    question: "'Apna' cambia a 'Apni' cuando:",
    options: [
      { text: "El poseedor es mujer", isCorrect: false },
      { text: "El objeto poseído es femenino", isCorrect: true },
      { text: "El verbo es pasado", isCorrect: false },
      { text: "Siempre", isCorrect: false }
    ]
  }
];