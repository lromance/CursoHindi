import React, { useState } from 'react';
import './Practica.css';

// --- Datos de la Práctica (Unidades 1 y 2) ---
const practiceData = [
  // --- Preguntas Existentes (1-12) ---
  {
    id: 1,
    type: 'dialogue',
    prompt: "Completa el saludo básico:",
    dialogue: [
      { speaker: 'A', line: 'नमस्ते!' },
      { speaker: 'B', line: '___!' }
    ],
    correctAnswer: 'नमस्ते',
    hint: "El saludo y la respuesta suelen ser la misma palabra."
  },
  {
    id: 2,
    type: 'fill-in',
    prompt: "Completa la frase con el verbo 'ser' (होना) correcto:",
    devanagari: "मैं विद्यार्थी ___।",
    translation: "(Yo soy estudiante)",
    correctAnswer: 'हूँ',
    hint: "El verbo para 'मैं' (yo) siempre es 'हूँ'."
  },
  {
    id: 3,
    type: 'mcq',
    prompt: "¿Qué número es 'आठ'?",
    options: [
      { text: '5 (पाँच)', isCorrect: false },
      { text: '8 (आठ)', isCorrect: true },
      { text: '9 (नौ)', isCorrect: false },
      { text: '3 (तीन)', isCorrect: false },
    ],
    correctAnswer: '8 (आठ)' // Para la revisión
  },
  {
    id: 4,
    type: 'fill-in',
    prompt: "Completa con el posesivo 'mi' (मेरा / मेरी). Recuerda que 'किताब' (libro) es femenino.",
    devanagari: "यह ___ किताब है।",
    translation: "(Este es mi libro)",
    correctAnswer: 'मेरी',
    hint: "El adjetivo posesivo debe concordar con el género de 'किताब' (femenino)."
  },
  {
    id: 5,
    type: 'mcq',
    prompt: "¿Qué significa 'पिता'?",
    options: [
      { text: 'Madre', isCorrect: false },
      { text: 'Hermano', isCorrect: false },
      { text: 'Padre', isCorrect: true },
      { text: 'Hermana', isCorrect: false },
    ],
    correctAnswer: 'Padre'
  },
  {
    id: 6,
    type: 'fill-in',
    prompt: "Completa la pregunta con 'qué' (क्या) o 'quién' (कौन):",
    devanagari: "आप ___ हैं?",
    translation: "(¿Quién es usted?)",
    correctAnswer: 'कौन',
    hint: "Usamos 'क्या' para objetos/profesiones y 'कौन' para identidad/personas."
  },
  {
    id: 7,
    type: 'mcq',
    prompt: "¿Cuál es la versión ASPIRADA de 'क' (ka)?",
    options: [
      { text: 'ग (ga)', isCorrect: false },
      { text: 'ख (kha)', isCorrect: true },
      { text: 'घ (gha)', isCorrect: false },
      { text: 'च (ca)', isCorrect: false },
    ],
    correctAnswer: 'ख (kha)'
  },
  {
    id: 8,
    type: 'dialogue',
    prompt: "Completa la respuesta del diálogo:",
    dialogue: [
      { speaker: 'A', line: 'यह क्या है? (¿Qué es esto?)' },
      { speaker: 'B', line: 'यह एक ___ है। (Es un libro)' }
    ],
    correctAnswer: 'किताब',
    hint: "La palabra para 'libro' (femenino) es del vocabulario de la U2."
  },
  {
    id: 9,
    type: 'fill-in',
    prompt: "Completa con el adjetivo 'bueno' (अच्छा / अच्छी). Recuerda que 'लड़का' (chico) es masculino.",
    devanagari: "वह ___ लड़का है।",
    translation: "(Él es un buen chico)",
    correctAnswer: 'अच्छा',
    hint: "El adjetivo debe concordar con el género de 'लड़का' (masculino)."
  },
  {
    id: 10,
    type: 'mcq',
    prompt: "¿Cómo se dice 'Sí' en hindi?",
    options: [
      { text: 'नहीं', isCorrect: false },
      { text: 'नमस्ते', isCorrect: false },
      { text: 'हाँ', isCorrect: true },
      { text: 'कृपया', isCorrect: false },
    ],
    correctAnswer: 'हाँ'
  },
  {
    id: 11,
    type: 'fill-in',
    prompt: "Completa la frase con el verbo 'ser' (होना) correcto:",
    devanagari: "तुम विद्यार्थी ___।",
    translation: "(Tú (informal) eres estudiante)",
    correctAnswer: 'हो',
    hint: "El verbo para 'तुम' (tú informal) siempre es 'हो'."
  },
  {
    id: 12,
    type: 'fill-in',
    prompt: "Completa la frase con el verbo 'ser' (होना) correcto:",
    devanagari: "आप अध्यापक ___।",
    translation: "(Usted (formal) es profesor)",
    correctAnswer: 'हैं',
    hint: "El verbo para 'आप' (usted formal) siempre es 'हैं' (nasalizado)."
  },
  
  // --- 18 Preguntas Nuevas (13-30) ---
  {
    id: 13,
    type: 'mcq',
    prompt: "¿Qué número es 'छह'?",
    options: [
      { text: '6 (छह)', isCorrect: true },
      { text: '4 (चार)', isCorrect: false },
      { text: '9 (नौ)', isCorrect: false },
      { text: '1 (एक)', isCorrect: false },
    ],
    correctAnswer: '6 (छह)'
  },
  {
    id: 14,
    type: 'fill-in',
    prompt: "Completa la frase con el verbo 'ser' (होना) correcto:",
    devanagari: "वह लड़की ___।",
    translation: "(Ella es una chica)",
    correctAnswer: 'है',
    hint: "El verbo para 'वह' (él/ella) es 'है'."
  },
  {
    id: 15,
    type: 'dialogue',
    prompt: "Completa la respuesta del diálogo:",
    dialogue: [
      { speaker: 'A', line: 'आपका नाम क्या है? (¿Cómo se llama usted?)' },
      { speaker: 'B', line: '___ नाम सोनिया है। (Mi nombre es Sonia)' }
    ],
    correctAnswer: 'मेरा',
    hint: "La palabra 'नाम' (nombre) es masculina, así que 'mi' debe ser 'मेरा'."
  },
  {
    id: 16,
    type: 'mcq',
    prompt: "¿Cuál de estas es la vocal 'i' LARGA (independiente)?",
    options: [
      { text: 'अ (a)', isCorrect: false },
      { text: 'इ (i)', isCorrect: false },
      { text: 'ई (ī)', isCorrect: true },
      { text: 'उ (u)', isCorrect: false },
    ],
    correctAnswer: 'ई (ī)'
  },
  {
    id: 17,
    type: 'fill-in',
    prompt: "Completa la frase con la palabra de cortesía para 'Por favor':",
    devanagari: "___, यहाँ बैठिए।",
    translation: "(Por favor, siéntese aquí.)",
    correctAnswer: 'कृपया',
    hint: "Empieza con 'कृ' (kṛ)."
  },
  {
    id: 18,
    type: 'mcq',
    prompt: "¿Qué significa 'भाई'?",
    options: [
      { text: 'Hermana', isCorrect: false },
      { text: 'Padre', isCorrect: false },
      { text: 'Hermano', isCorrect: true },
      { text: 'Madre', isCorrect: false },
    ],
    correctAnswer: 'Hermano'
  },
  {
    id: 19,
    type: 'fill-in',
    prompt: "Completa con el adjetivo 'bueno' (अच्छा / अच्छी). Recuerda que 'लड़की' (chica) es femenino.",
    devanagari: "वह ___ लड़की है।",
    translation: "(Ella es una buena chica)",
    correctAnswer: 'अच्छी',
    hint: "El adjetivo debe concordar con el género de 'लड़की' (femenino)."
  },
  {
    id: 20,
    type: 'mcq',
    prompt: "¿Cuál de estas letras es 'ja' (sonora, NO aspirada)?",
    options: [
      { text: 'च (ca)', isCorrect: false },
      { text: 'छ (cha)', isCorrect: false },
      { text: 'ज (ja)', isCorrect: true },
      { text: 'झ (jha)', isCorrect: false },
    ],
    correctAnswer: 'ज (ja)'
  },
  {
    id: 21,
    type: 'fill-in',
    prompt: "Completa la frase con el verbo 'ser' (होना) correcto:",
    devanagari: "हम विद्यार्थी ___।",
    translation: "(Nosotros somos estudiantes)",
    correctAnswer: 'हैं',
    hint: "El verbo para 'हम' (nosotros) es 'हैं' (nasalizado)."
  },
  {
    id: 22,
    type: 'mcq',
    prompt: "¿Qué número es 'दो'?",
    options: [
      { text: '1 (एक)', isCorrect: false },
      { text: '2 (दो)', isCorrect: true },
      { text: '3 (तीन)', isCorrect: false },
      { text: '10 (दस)', isCorrect: false },
    ],
    correctAnswer: '2 (दो)'
  },
  {
    id: 23,
    type: 'mcq',
    prompt: "¿Cuál de estas letras es 'gha' (SONORA y ASPIRADA)?",
    options: [
      { text: 'क (ka)', isCorrect: false },
      { text: 'ख (kha)', isCorrect: false },
      { text: 'ग (ga)', isCorrect: false },
      { text: 'घ (gha)', isCorrect: true },
    ],
    correctAnswer: 'घ (gha)'
  },
  {
    id: 24,
    type: 'dialogue',
    prompt: "Completa la respuesta del diálogo:",
    dialogue: [
      { speaker: 'A', line: 'क्या यह आपकी किताब है? (¿Es este tu libro?)' },
      { speaker: 'B', line: '___, यह मेरी किताब नहीं है। (No, este no es mi libro)' }
    ],
    correctAnswer: 'नहीं',
    hint: "La respuesta es una negación. Necesitas la palabra para 'No'."
  },
  {
    id: 25,
    type: 'fill-in',
    prompt: "Completa con el posesivo 'mi' (मेरा / मेरी). Recuerda que 'बहन' (hermana) es femenino.",
    devanagari: "वह ___ बहन है।",
    translation: "(Ella es mi hermana)",
    correctAnswer: 'मेरी',
    hint: "El adjetivo posesivo debe concordar con el género de 'बहन' (femenino)."
  },
  {
    id: 26,
    type: 'mcq',
    prompt: "¿Qué significa 'विद्यार्थी'?",
    options: [
      { text: 'Profesor', isCorrect: false },
      { text: 'Libro', isCorrect: false },
      { text: 'Estudiante', isCorrect: true },
      { text: 'Nombre', isCorrect: false },
    ],
    correctAnswer: 'Estudiante'
  },
  {
    id: 27,
    type: 'fill-in',
    prompt: "Completa la pregunta con 'qué' (क्या) o 'quién' (कौन):",
    devanagari: "यह ___ है?",
    translation: "(¿Qué es esto?)",
    correctAnswer: 'क्या',
    hint: "Usamos 'क्या' para preguntar por objetos."
  },
  {
    id: 28,
    type: 'mcq',
    prompt: "¿Cuál de estas es la vocal 'o' (independiente)?",
    options: [
      { text: 'ए (e)', isCorrect: false },
      { text: 'ऐ (ai)', isCorrect: false },
      { text: 'ओ (o)', isCorrect: true },
      { text: 'औ (au)', isCorrect: false },
    ],
    correctAnswer: 'ओ (o)'
  },
  {
    id: 29,
    type: 'mcq',
    prompt: "¿Qué número es 'एक'?",
    options: [
      { text: '1 (एक)', isCorrect: true },
      { text: '2 (दो)', isCorrect: false },
      { text: '3 (तीन)', isCorrect: false },
      { text: '4 (चार)', isCorrect: false },
    ],
    correctAnswer: '1 (एक)'
  },
  {
    id: 30,
    type: 'dialogue',
    prompt: "Completa la respuesta del diálogo con 'Gracias':",
    dialogue: [
      { speaker: 'A', line: 'यह आपकी किताब है। (Aquí tiene su libro)' },
      { speaker: 'B', line: '___! (¡Gracias!)' }
    ],
    correctAnswer: 'धन्यवाद',
    hint: "Usa la palabra formal para 'Gracias' de la Unidad 1."
  },
];

// --- Componente Principal de la Aplicación ---
export default function PracticaInteractiva1_2() {
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Maneja el cambio en cualquier campo de respuesta
  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer,
    });
  };

  // Calcula la puntuación y muestra los resultados
  const handleSubmit = () => {
    let newScore = 0;
    practiceData.forEach((q) => {
      const userAnswer = userAnswers[q.id]?.trim();
      
      if (q.type === 'mcq') {
        if (userAnswer === q.correctAnswer) {
          newScore++;
        }
      } else {
        // Para 'fill-in' y 'dialogue', comparamos en minúsculas (aunque en devanagari no aplica)
        // y sin espacios extra. La comprobación principal es el string exacto.
        if (userAnswer && userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
          newScore++;
        }
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  // Reinicia la práctica
  const handleReset = () => {
    setUserAnswers({});
    setScore(0);
    setShowResults(false);
  };

  // --- Renderizado ---

  // Renderiza un bloque de pregunta individual
  const renderQuestion = (q) => {
    const userAnswer = userAnswers[q.id] || '';
    const isSelected = (opt) => userAnswer === opt.text;

    return (
      <div key={q.id} className="question-block">
        <p className="question-prompt">{q.id}. {q.prompt}</p>

        {/* --- Renderizado para Opción Múltiple (MCQ) --- */}
        {q.type === 'mcq' && (
          <div className="mcq-options">
            {q.options.map((opt, index) => (
              <label
                key={index}
                className={`mcq-option-label ${isSelected(opt) ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={opt.text}
                  checked={isSelected(opt)}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  className="mcq-option-input"
                />
                <span className="mcq-option-text">{opt.text}</span>
              </label>
            ))}
          </div>
        )}

        {/* --- Renderizado para Rellenar el Hueco (Fill-in) --- */}
        {q.type === 'fill-in' && (
          <div>
            <div className="fill-in-display">
              <span className="fill-in-devanagari">
                {q.devanagari.replace('___', '___')}
              </span>
              <p className="fill-in-translation">{q.translation}</p>
            </div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              className="fill-in-input"
              placeholder="Escribe en devanagari..."
              aria-label={`Respuesta para: ${q.devanagari}`}
            />
            <p className="hint-text"><strong>Pista:</strong> {q.hint}</p>
          </div>
        )}

        {/* --- Renderizado para Diálogo --- */}
        {q.type === 'dialogue' && (
          <div>
            <div className="dialogue-block">
              {q.dialogue.map((line, index) => (
                <p key={index} className="dialogue-line">
                  <span className="dialogue-speaker">{line.speaker}:</span>{' '}
                  <span className="dialogue-text">{line.line}</span>
                </p>
              ))}
            </div>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              className="fill-in-input"
              placeholder="Escribe la respuesta..."
              aria-label={`Respuesta para el diálogo ${q.id}`}
            />
            <p className="hint-text"><strong>Pista:</strong> {q.hint}</p>
          </div>
        )}
      </div>
    );
  };

  // --- Renderizado de la Pantalla de Resultados ---
  if (showResults) {
    return (
      <div className="results-container">
        <div className="results-card">
          <h2 className="results-title">¡Práctica Completada!</h2>
          <p className="results-score">
            Tu puntuación: <span className="score-value">{score}</span> / <span className="font-bold">{practiceData.length}</span>
          </p>

          <div className="results-summary">
            {practiceData.map((q) => {
              const userAnswer = userAnswers[q.id] || '';
              const isCorrect = (q.type === 'mcq')
                ? userAnswer === q.correctAnswer
                : userAnswer.trim().toLowerCase() === q.correctAnswer.toLowerCase();

              return (
                <div key={q.id} className="result-item">
                  <p className="result-prompt">{q.prompt}</p>
                  {q.devanagari && (
                    <p className="result-devanagari">{q.devanagari}</p>
                  )}
                  {q.dialogue && (
                    <div className="result-dialogue-block">
                      {q.dialogue.map((l, i) => <p key={i} className="result-dialogue-line">{l.speaker}: {l.line}</p>)}
                    </div>
                  )}
                  
                  <p className={`user-answer ${isCorrect ? 'answer-correct' : 'answer-incorrect'}`}>
                    Tu respuesta: <span className="answer-semibold">{userAnswer || ' (Sin respuesta)'}</span>
                    {!isCorrect && q.type !== 'mcq' && (
                      <span className="answer-line-through">{userAnswer}</span>
                    )}
                  </p>
                  {!isCorrect && (
                    <p className="correct-answer">
                      Respuesta correcta: <span className="answer-semibold">{q.correctAnswer}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleReset}
            className="reset-button"
          >
            Practicar de Nuevo
          </button>
        </div>
      </div>
    );
  }

  // --- Renderizado de la Pantalla de Práctica ---
  return (
    <div className="practice-container">
      <div className="practice-card">
        <h1 className="practice-title">
          Práctica Interactiva: Hindi U1 y U2
        </h1>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          {practiceData.map(renderQuestion)}
          <button
            type="submit"
            className="submit-button"
          >
            Revisar mis Respuestas
          </button>
        </form>
      </div>
    </div>
  );
}
