export const questions = [
  {
    id: 1,
    type: 'mcq',
    question: "¿Cómo se dice 'Madre' en hindi?",
    options: [
      { text: "पिता (pita)", isCorrect: false },
      { text: "माँ (mā̃)", isCorrect: true },
      { text: "बहन (bahan)", isCorrect: false },
      { text: "बेटी (beti)", isCorrect: false }
    ]
  },
  {
    id: 2,
    type: 'mcq',
    question: "El término 'Bhai' (भाई) significa:",
    options: [
      { text: "Hermana", isCorrect: false },
      { text: "Padre", isCorrect: false },
      { text: "Hermano", isCorrect: true },
      { text: "Amigo", isCorrect: false }
    ]
  },
  {
    id: 3,
    type: 'mcq',
    question: "¿Qué significa 'Pita' (पिता)?",
    options: [
      { text: "Madre", isCorrect: false },
      { text: "Tío", isCorrect: false },
      { text: "Abuelo", isCorrect: false },
      { text: "Padre", isCorrect: true }
    ]
  },
  {
    id: 4,
    type: 'mcq',
    question: "Traduce 'Hermana' al hindi:",
    options: [
      { text: "बहन (bahan)", isCorrect: true },
      { text: "भाई (bhai)", isCorrect: false },
      { text: "दादी (dadi)", isCorrect: false },
      { text: "माँ (maa)", isCorrect: false }
    ]
  },
  {
    id: 5,
    type: 'mcq',
    question: "'Beta' (बेटा) significa:",
    options: [
      { text: "Hija", isCorrect: false },
      { text: "Hijo", isCorrect: true },
      { text: "Nieto", isCorrect: false },
      { text: "Hermano", isCorrect: false }
    ]
  },
  {
    id: 6,
    type: 'mcq',
    question: "¿Cómo se dice 'Hija'?",
    options: [
      { text: "बेटा (beta)", isCorrect: false },
      { text: "बेटी (beti)", isCorrect: true },
      { text: "बहू (bahu)", isCorrect: false },
      { text: "माँ (maa)", isCorrect: false }
    ]
  },
  {
    id: 7,
    type: 'mcq',
    question: "¿Qué significa 'Dada' (दादा)?",
    options: [
      { text: "Hermano mayor", isCorrect: false },
      { text: "Abuelo paterno", isCorrect: true },
      { text: "Abuela paterna", isCorrect: false },
      { text: "Padre", isCorrect: false }
    ]
  },
  {
    id: 8,
    type: 'mcq',
    question: "Si 'Dada' es abuelo, ¿qué es 'Dadi' (दादी)?",
    options: [
      { text: "Abuela paterna", isCorrect: true },
      { text: "Madre", isCorrect: false },
      { text: "Tía", isCorrect: false },
      { text: "Hermana", isCorrect: false }
    ]
  },
  {
    id: 9,
    type: 'mcq',
    question: "Identifica la frase correcta: 'Éste es mi hermano' (cerca)",
    options: [
      { text: "वह मेरा भाई है (Vah mera bhai hai)", isCorrect: false },
      { text: "यह मेरा भाई है (Yah mera bhai hai)", isCorrect: true },
      { text: "वे मेरा भाई है (Ve mera bhai hai)", isCorrect: false },
      { text: "मैं मेरा भाई है (Main mera bhai hai)", isCorrect: false }
    ]
  },
  {
    id: 10,
    type: 'mcq',
    question: "Traduce: 'Aquella es mi hermana' (lejos)",
    options: [
      { text: "यह मेरी बहन है (Yah meri bahan hai)", isCorrect: false },
      { text: "वह मेरी बहन है (Vah meri bahan hai)", isCorrect: true },
      { text: "ये मेरी बहन है (Ye meri bahan hai)", isCorrect: false },
      { text: "तुम मेरी बहन है (Tum meri bahan hai)", isCorrect: false }
    ]
  },
  {
    id: 11,
    type: 'mcq',
    question: "¿Qué palabra se usa para 'Padres' (madre y padre juntos)?",
    options: [
      { text: "भाई-बहन (Bhai-bahan)", isCorrect: false },
      { text: "दादा-दादी (Dada-dadi)", isCorrect: false },
      { text: "माता-पिता (Mata-pita)", isCorrect: true },
      { text: "बेटा-बेटी (Beta-beti)", isCorrect: false }
    ]
  },
  {
    id: 12,
    type: 'mcq',
    question: "'Pota' (पोता) significa:",
    options: [
      { text: "Hijo", isCorrect: false },
      { text: "Nieto", isCorrect: true },
      { text: "Abuelo", isCorrect: false },
      { text: "Sobrino", isCorrect: false }
    ]
  },
  {
    id: 13,
    type: 'mcq',
    question: "¿Cuál es el plural proximal correcto para 'Estos son mis padres'?",
    options: [
      { text: "वह मेरे माता-पिता हैं (Vah...)", isCorrect: false },
      { text: "वे मेरे माता-पिता हैं (Ve...)", isCorrect: false },
      { text: "ये मेरे माता-पिता हैं (Ye mere mata-pita hain)", isCorrect: true },
      { text: "यह मेरे माता-पिता हैं (Yah...)", isCorrect: false }
    ]
  },
  {
    id: 14,
    type: 'mcq',
    question: "¿Qué significa 'Mera' en 'Mera naam'?",
    options: [
      { text: "Tu", isCorrect: false },
      { text: "Su", isCorrect: false },
      { text: "Mi", isCorrect: true },
      { text: "Nuestro", isCorrect: false }
    ]
  },
  {
    id: 15,
    type: 'mcq',
    question: "En 'Meri maa', ¿por qué se usa 'Meri' y no 'Mera'?",
    options: [
      { text: "Porque 'Maa' es femenino", isCorrect: true },
      { text: "Porque 'Maa' es plural", isCorrect: false },
      { text: "No hay diferencia", isCorrect: false },
      { text: "Depende del hablante", isCorrect: false }
    ],
    explanation: "El posesivo concuerda con el objeto poseído (Maa - Femenino), no con el poseedor."
  }
];