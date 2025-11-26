export const questions = [
  {
    id: 1,
    type: 'mcq',
    question: "¿Qué palabra interrogativa significa 'Qué'?",
    options: [
      { text: "कौन (Kaun)", isCorrect: false },
      { text: "क्या (Kya)", isCorrect: true },
      { text: "कहाँ (Kahan)", isCorrect: false },
      { text: "कब (Kab)", isCorrect: false }
    ],
    explanation: "'क्या' (Kya) significa 'Qué' y también se usa para preguntas de sí/no."
  },
  {
    id: 2,
    type: 'mcq',
    question: "¿Cómo se pregunta 'Dónde' en hindi?",
    options: [
      { text: "कैसे (Kaise)", isCorrect: false },
      { text: "क्यों (Kyon)", isCorrect: false },
      { text: "कहाँ (Kahaan)", isCorrect: true },
      { text: "कितना (Kitna)", isCorrect: false }
    ]
  },
  {
    id: 3,
    type: 'mcq',
    question: "Traduce: '¿Quién es usted?'",
    options: [
      { text: "Aap kya hain?", isCorrect: false },
      { text: "Aap kaise hain?", isCorrect: false },
      { text: "Aap kaun hain?", isCorrect: true },
      { text: "Aap kahan hain?", isCorrect: false }
    ],
    explanation: "'कौन' (Kaun) significa 'Quién'."
  },
  {
    id: 4,
    type: 'mcq',
    question: "¿Qué significa 'Kyon' (क्यों)?",
    options: [
      { text: "Cuándo", isCorrect: false },
      { text: "Por qué", isCorrect: true },
      { text: "Cómo", isCorrect: false },
      { text: "Quién", isCorrect: false }
    ]
  },
  {
    id: 5,
    type: 'mcq',
    question: "Para preguntar por el tiempo (Cuándo), usamos:",
    options: [
      { text: "कब (Kab)", isCorrect: true },
      { text: "कहाँ (Kahan)", isCorrect: false },
      { text: "क्या (Kya)", isCorrect: false },
      { text: "कैसे (Kaise)", isCorrect: false }
    ]
  },
  {
    id: 6,
    type: 'mcq',
    question: "¿Qué interrogativo se usa para preguntar por el estado o modo ('Cómo')?",
    options: [
      { text: "कौन (Kaun)", isCorrect: false },
      { text: "कैसे (Kaise)", isCorrect: true },
      { text: "क्या (Kya)", isCorrect: false },
      { text: "क्यों (Kyon)", isCorrect: false }
    ],
    explanation: "Ejemplo: Aap kaise hain? (¿Cómo está usted?)"
  },
  {
    id: 7,
    type: 'mcq',
    question: "¿Qué significa 'Kitna' (कितना)?",
    options: [
      { text: "Quién", isCorrect: false },
      { text: "Dónde", isCorrect: false },
      { text: "Cuánto", isCorrect: true },
      { text: "Cuál", isCorrect: false }
    ]
  },
  {
    id: 8,
    type: 'mcq',
    question: "Completa: 'Aap ___ rehte hain?' (¿Dónde vive usted?)",
    options: [
      { text: "kya", isCorrect: false },
      { text: "kahaan", isCorrect: true },
      { text: "kaun", isCorrect: false },
      { text: "kab", isCorrect: false }
    ]
  },
  {
    id: 9,
    type: 'mcq',
    question: "Si preguntas '¿Qué es esto?', dices:",
    options: [
      { text: "Yah kya hai?", isCorrect: true },
      { text: "Yah kaun hai?", isCorrect: false },
      { text: "Yah kahan hai?", isCorrect: false },
      { text: "Yah kaise hai?", isCorrect: false }
    ]
  },
  {
    id: 10,
    type: 'mcq',
    question: "'Kaun sa' se traduce generalmente como:",
    options: [
      { text: "Quién", isCorrect: false },
      { text: "Cuál", isCorrect: true },
      { text: "Cómo", isCorrect: false },
      { text: "Cuánto", isCorrect: false }
    ]
  },
  {
    id: 11,
    type: 'mcq',
    question: "¿Las palabras interrogativas en hindi cambian por género?",
    options: [
      { text: "Sí, siempre", isCorrect: false },
      { text: "Solo 'Kaun'", isCorrect: false },
      { text: "No, generalmente son invariables (excepto 'Kitna/Kaunsa' que son adjetivos)", isCorrect: true },
      { text: "Depende del verbo", isCorrect: false }
    ]
  },
  {
    id: 12,
    type: 'mcq',
    question: "Traduce: '¿Por qué vino usted?'",
    options: [
      { text: "Aap kab aaye?", isCorrect: false },
      { text: "Aap kahan aaye?", isCorrect: false },
      { text: "Aap kyon aaye?", isCorrect: true },
      { text: "Aap kya aaye?", isCorrect: false }
    ]
  },
  {
    id: 13,
    type: 'mcq',
    question: "Para preguntar el precio ('¿Cuánto es?'), decimos:",
    options: [
      { text: "Yah kya hai?", isCorrect: false },
      { text: "Yah kitna hai?", isCorrect: true },
      { text: "Yah kaun hai?", isCorrect: false },
      { text: "Yah kab hai?", isCorrect: false }
    ]
  },
  {
    id: 14,
    type: 'mcq',
    question: "¿Cuál es la diferencia entre 'Kya' al inicio y en medio de la frase?",
    options: [
      { text: "No hay diferencia", isCorrect: false },
      { text: "Al inicio es pregunta sí/no, en medio pregunta 'qué'", isCorrect: true },
      { text: "Al inicio es 'qué', en medio es sí/no", isCorrect: false },
      { text: "Al inicio es formal, en medio informal", isCorrect: false }
    ]
  },
  {
    id: 15,
    type: 'mcq',
    question: "Completa: 'Tum ___ ho?' (¿Quién eres?)",
    options: [
      { text: "kaun", isCorrect: true },
      { text: "kya", isCorrect: false },
      { text: "kahan", isCorrect: false },
      { text: "kab", isCorrect: false }
    ]
  }
];