export const questions = [
  // 1. Adjetivo Concordancia (MCQ)
  {
    id: 1,
    type: 'mcq',
    question: "Elige la forma correcta: 'Libros nuevos' (Kitaab es fem. pl.)",
    options: [
      { text: "Naya kitaaben", isCorrect: false },
      { text: "Naye kitaaben", isCorrect: false },
      { text: "Nayi kitaaben", isCorrect: true },
      { text: "Nayi kitaab", isCorrect: false }
    ]
  },
  // 2. Presente Habitual (Fill-in)
  {
    id: 2,
    type: 'fill-in',
    question: "Main hindi bolta ___. ",
    correctAnswer: "hoon",
    hint: "Verbo auxiliar para 'Main'",
    translation: "(Yo hablo hindi)"
  },
  // 3. Colores (Match)
  {
    id: 3,
    type: 'match',
    question: "Empareja el color con su significado:",
    items: {
      "Laal": "Rojo",
      "Neela": "Azul",
      "Hara": "Verde",
      "Peela": "Amarillo"
    }
  },
  // 4. Ordenar Frase (Order)
  {
    id: 4,
    type: 'order',
    question: "Ordena la frase: 'Yo como una manzana'",
    items: ["hoon", "khaata", "seb", "Main", "ek"],
    correctAnswer: "Main ek seb khaata hoon"
  },
  // 5. Opuestos (MCQ)
  {
    id: 5,
    type: 'mcq',
    question: "¿Cuál es el opuesto de 'Bada' (Grande)?",
    options: [
      { text: "Chhota", isCorrect: true },
      { text: "Lamba", isCorrect: false },
      { text: "Mota", isCorrect: false },
      { text: "Naya", isCorrect: false }
    ]
  },
  // 6. Días de la semana (Match)
  {
    id: 6,
    type: 'match',
    question: "Empareja los días:",
    items: {
      "Somvaar": "Lunes",
      "Budhvaar": "Miércoles",
      "Shukravaar": "Viernes",
      "Ravivaar": "Domingo"
    }
  },
  // 7. Verbo Terminación (MCQ)
  {
    id: 7,
    type: 'mcq',
    question: "Para 'Ham' (Nosotros), el verbo termina en:",
    options: [
      { text: "-ta", isCorrect: false },
      { text: "-ti", isCorrect: false },
      { text: "-te", isCorrect: true },
      { text: "-na", isCorrect: false }
    ]
  },
  // 8. Números (Fill-in)
  {
    id: 8,
    type: 'fill-in',
    question: "El número 50 en hindi es ___. ",
    correctAnswer: "pachaas",
    hint: "Escribe la transliteración",
    translation: ""
  },
  // 9. Diálogo (Dialogue)
  {
    id: 9,
    type: 'dialogue',
    question: "- Tum ___ uthte ho?\n- Main subah uthta hoon.",
    correctAnswer: "kab",
    hint: "Cuándo",
    translation: "(- ¿___ te levantas? / - Me levanto por la mañana.)"
  },
  // 10. 'Ya' vs 'Aur' (MCQ)
  {
    id: 10,
    type: 'mcq',
    question: "Para decir 'Té y galletas', usas:",
    options: [
      { text: "Chay ya biscuit", isCorrect: false },
      { text: "Chay aur biscuit", isCorrect: true },
      { text: "Chay par biscuit", isCorrect: false },
      { text: "Chay se biscuit", isCorrect: false }
    ]
  },
  // 11. Verbos de Habla (Match)
  {
    id: 11,
    type: 'match',
    question: "Relaciona el verbo con su uso:",
    items: {
      "Bolna": "Hablar (capacidad)",
      "Baat karna": "Conversar",
      "Kahna": "Decir",
      "Batana": "Contar/Informar"
    }
  },
  // 12. Ordenar Negación (Order)
  {
    id: 12,
    type: 'order',
    question: "Ordena: 'Ella no va'",
    items: ["hai", "nahin", "jaati", "Vah"],
    correctAnswer: "Vah nahin jaati hai"
  },
  // 13. Adjetivo 'Lamba' (MCQ)
  {
    id: 13,
    type: 'mcq',
    question: "Traduce: 'Chico alto'.",
    options: [
      { text: "Lamba ladka", isCorrect: true },
      { text: "Lambi ladka", isCorrect: false },
      { text: "Lambe ladka", isCorrect: false },
      { text: "Mota ladka", isCorrect: false }
    ]
  },
  // 14. Números 20-30 (Match)
  {
    id: 14,
    type: 'match',
    question: "Empareja los números:",
    items: {
      "21": "Ikkis",
      "25": "Pachchis",
      "30": "Tis",
      "40": "Chaalis"
    }
  },
  // 15. Concordancia (Fill-in)
  {
    id: 15,
    type: 'fill-in',
    question: "Ye kitaaben ___ hain. (Estas libros son buenos - plural)",
    correctAnswer: "achchhi",
    hint: "Forma plural de 'achchha' para femenino",
    translation: ""
  },
  // 16. Verbo 'Karna' (MCQ)
  {
    id: 16,
    type: 'mcq',
    question: "¿Qué significa 'Kaam karna'?",
    options: [
      { text: "Jugar", isCorrect: false },
      { text: "Trabajar (hacer trabajo)", isCorrect: true },
      { text: "Dormir", isCorrect: false },
      { text: "Comer", isCorrect: false }
    ]
  },
  // 17. Pronombre Plural (MCQ)
  {
    id: 17,
    type: 'mcq',
    question: "Si el sujeto es 'Ve' (Ellos), el verbo termina en:",
    options: [
      { text: "-ta hai", isCorrect: false },
      { text: "-te hain", isCorrect: true },
      { text: "-ti hai", isCorrect: false },
      { text: "-ta hoon", isCorrect: false }
    ]
  },
  // 18. Color Invariable (MCQ)
  {
    id: 18,
    type: 'mcq',
    question: "¿Qué color NO cambia de forma?",
    options: [
      { text: "Kaala", isCorrect: false },
      { text: "Neela", isCorrect: false },
      { text: "Safed", isCorrect: true },
      { text: "Hara", isCorrect: false }
    ]
  },
  // 19. 'Jaldi' (Fill-in)
  {
    id: 19,
    type: 'fill-in',
    question: "Main subah ___ uthta hoon. (Me levanto temprano)",
    correctAnswer: "jaldi",
    hint: "Palabra para 'temprano'",
    translation: ""
  },
  // 20. Frase Completa (Order)
  {
    id: 20,
    type: 'order',
    question: "Ordena: 'Tú lees un libro'",
    items: ["hoon", "padhte", "ek", "Tum", "kitaab"],
    correctAnswer: "Tum ek kitaab padhte ho"
  }
];