export const questions = [
  {
    id: 1,
    type: 'mcq',
    question: "¿Cómo se dice 'Tengo un libro' (posesión de objeto)?",
    options: [
      { text: "Mujhe ek kitaab hai", isCorrect: false },
      { text: "Mere paas ek kitaab hai", isCorrect: true },
      { text: "Mera ek kitaab hai", isCorrect: false },
      { text: "Main ek kitaab hai", isCorrect: false }
    ],
    explanation: "Para objetos tangibles/movibles se usa la construcción 'Ke paas'."
  },
  {
    id: 2,
    type: 'mcq',
    question: "Completa: '___ paas paise hain?' (¿Tienes dinero?)",
    options: [
      { text: "Tum", isCorrect: false },
      { text: "Tumhara", isCorrect: false },
      { text: "Tumhare", isCorrect: true },
      { text: "Tumhe", isCorrect: false }
    ]
  },
  {
    id: 3,
    type: 'mcq',
    question: "Diferencia entre 'Mera' y 'Mere paas':",
    options: [
      { text: "'Mera' es para posesión temporal, 'Mere paas' permanente", isCorrect: false },
      { text: "'Mera' es relación/propiedad, 'Mere paas' es posesión física ('tener')", isCorrect: true },
      { text: "No hay diferencia", isCorrect: false },
      { text: "'Mere paas' es solo para familia", isCorrect: false }
    ]
  },
  {
    id: 4,
    type: 'mcq',
    question: "Traduce: 'Él tiene un coche'.",
    options: [
      { text: "Uske paas ek car hai", isCorrect: true },
      { text: "Usko ek car hai", isCorrect: false },
      { text: "Vah paas ek car hai", isCorrect: false },
      { text: "Uska ek car hai", isCorrect: false }
    ]
  },
  {
    id: 5,
    type: 'mcq',
    question: "Para decir 'No tengo tiempo', usamos:",
    options: [
      { text: "Mera samay nahin hai", isCorrect: false },
      { text: "Mere paas samay nahin hai", isCorrect: true },
      { text: "Mujhe samay nahin hai", isCorrect: false },
      { text: "Main samay nahin hai", isCorrect: false }
    ]
  },
  {
    id: 6,
    type: 'mcq',
    question: "¿Cuál es la forma oblicua de 'Hum' (Nosotros) con 'ke paas'?",
    options: [
      { text: "Hum ke paas", isCorrect: false },
      { text: "Hamare paas", isCorrect: true },
      { text: "Hame paas", isCorrect: false },
      { text: "Hamara paas", isCorrect: false }
    ]
  },
  {
    id: 7,
    type: 'mcq',
    question: "Si hablo de mi cabeza (parte del cuerpo), uso:",
    options: [
      { text: "Mere paas sir", isCorrect: false },
      { text: "Mera sir", isCorrect: true },
      { text: "Mujhe sir", isCorrect: false },
      { text: "Main sir", isCorrect: false }
    ],
    explanation: "Las partes del cuerpo usan genitivos directos (mera/meri), no 'ke paas'."
  },
  {
    id: 8,
    type: 'mcq',
    question: "Completa: 'Ram ___ paas ek kuta hai.'",
    options: [
      { text: "ka", isCorrect: false },
      { text: "ke", isCorrect: true },
      { text: "ki", isCorrect: false },
      { text: "ko", isCorrect: false }
    ]
  },
  {
    id: 9,
    type: 'mcq',
    question: "Traduce: '¿Cuántos hermanos tienes?'",
    options: [
      { text: "Tumhare paas kitne bhai hain?", isCorrect: true },
      { text: "Tumhare kitne bhai hain?", isCorrect: false },
      { text: "Tumhe kitne bhai hain?", isCorrect: false },
      { text: "Tumhara kitne bhai hain?", isCorrect: false }
    ],
    explanation: "Para preguntar 'cuántos tienes' en general se suele usar 'ke paas', aunque para familia a veces se omite o se usa 'ke'."
  },
  {
    id: 10,
    type: 'mcq',
    question: "'Aapke paas' significa:",
    options: [
      { text: "Ud. es", isCorrect: false },
      { text: "Ud. tiene (consigo)", isCorrect: true },
      { text: "Para Ud.", isCorrect: false },
      { text: "De Ud.", isCorrect: false }
    ]
  },
  {
    id: 11,
    type: 'mcq',
    question: "Identifica el error: 'Main ke paas pen hai.'",
    options: [
      { text: "Debería ser 'Mere paas'", isCorrect: true },
      { text: "Debería ser 'Mera paas'", isCorrect: false },
      { text: "Debería ser 'Mujhe paas'", isCorrect: false },
      { text: "No hay error", isCorrect: false }
    ]
  },
  {
    id: 12,
    type: 'mcq',
    question: "¿Qué expresamos con 'Ke paas'?",
    options: [
      { text: "Posesión de objetos tangibles/movibles", isCorrect: true },
      { text: "Relaciones familiares exclusivamente", isCorrect: false },
      { text: "Gustos y disgustos", isCorrect: false },
      { text: "Nacionalidad", isCorrect: false }
    ]
  },
  {
    id: 13,
    type: 'mcq',
    question: "Completa: '___ paas ghadi hai.' (Ellos tienen un reloj - Lejos)",
    options: [
      { text: "Unke", isCorrect: true },
      { text: "Inke", isCorrect: false },
      { text: "Unka", isCorrect: false },
      { text: "Ve", isCorrect: false }
    ]
  },
  {
    id: 14,
    type: 'mcq',
    question: "Traduce: 'Mi perro' (Relación permanente/Mascota).",
    options: [
      { text: "Mere paas kutta", isCorrect: false },
      { text: "Mera kutta", isCorrect: true },
      { text: "Mujhe kutta", isCorrect: false },
      { text: "Main kutta", isCorrect: false }
    ]
  },
  {
    id: 15,
    type: 'mcq',
    question: "'Iske paas' se refiere a:",
    options: [
      { text: "Él/Ella/Esto (Cerca)", isCorrect: true },
      { text: "Él/Ella/Aquello (Lejos)", isCorrect: false },
      { text: "Nosotros", isCorrect: false },
      { text: "Usted", isCorrect: false }
    ]
  }
];