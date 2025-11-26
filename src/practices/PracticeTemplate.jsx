import React, { useState, useMemo, useEffect } from 'react';
import './Practica.css';

// Constantes para los tipos de preguntas
const QuestionType = {
  MCQ: 'mcq',
  FILL_IN: 'fill-in',
  MATCH: 'match',
  ORDER: 'order',
  DIALOGUE: 'dialogue'
};

// --- COMPONENTES DE PREGUNTAS ---

// Opción Múltiple (MCQ)
const McqQuestion = ({ question, userAnswer, onAnswer, isSubmitted }) => {
  return (
    <div>
      <p className="question-prompt">{question.id}. {question.question}</p>
      {question.hint && <p className="hint-text">({question.hint})</p>}
      <div className="mcq-options">
        {question.options.map((option, index) => {
          const isCorrectOption = option.isCorrect;
          const isSelected = userAnswer === option.text;
          let optionClass = 'mcq-option-label';
          
          if (isSubmitted) {
            if (isSelected && isCorrectOption) {
              optionClass += ' correct-answer-selected';
            } else if (isSelected && !isCorrectOption) {
              optionClass += ' incorrect-answer-selected';
            } else if (isCorrectOption) {
              optionClass += ' correct-answer-not-selected';
            }
          } else {
            if (isSelected) {
              optionClass += ' selected';
            }
          }

          return (
            <label
              key={index}
              className={optionClass}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.text}
                checked={isSelected}
                onChange={() => onAnswer(option.text)}
                disabled={isSubmitted}
                className="mcq-option-input"
              />
              <span className="mcq-option-text">{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

// Rellenar el Hueco (Fill-in)
const FillInQuestion = ({ question, userAnswer, onAnswer, isSubmitted }) => {
  const isCorrect = userAnswer && userAnswer.toLowerCase() === question.correctAnswer.toLowerCase();
  let inputClass = 'fill-in-input';
  
  if (isSubmitted) {
    inputClass += isCorrect ? ' correct-input' : ' incorrect-input';
  }

  return (
    <div>
      <p className="question-prompt">{question.id}. {question.question}</p>
      {question.hint && <p className="hint-text">({question.hint})</p>}
      <div className="fill-in-display">
        <span className="fill-in-devanagari">
          {question.question.replace('___', '___ ')}
        </span>
        {question.translation && <p className="fill-in-translation">{question.translation}</p>}
      </div>
      <input
        type="text"
        lang="hi"
        autoComplete="off"
        value={userAnswer || ''}
        onChange={(e) => onAnswer(e.target.value)}
        disabled={isSubmitted}
        className={inputClass}
        placeholder="Escribe en devanagari..."
      />
    </div>
  );
};

// Diálogo
const DialogueQuestion = ({ question, userAnswer, onAnswer, isSubmitted }) => {
  const isCorrect = userAnswer && userAnswer.toLowerCase() === question.correctAnswer.toLowerCase();
  let inputClass = 'fill-in-input'; // Reusing fill-in input style
  
  if (isSubmitted) {
    inputClass += isCorrect ? ' correct-input' : ' incorrect-input';
  }

  const parts = question.question.split('___');

  return (
    <div>
      <p className="question-prompt">{question.id}. {question.question}</p>
      {question.hint && <p className="hint-text">({question.hint})</p>}
      <div className="dialogue-block">
        <p className="dialogue-line">
          <span className="dialogue-text">{parts[0]}</span>
          <span className="dialogue-blank">[ _______ ]</span>
          <span className="dialogue-text">{parts[1]}</span>
        </p>
      </div>
      <input
        type="text"
        lang="hi"
        autoComplete="off"
        value={userAnswer || ''}
        onChange={(e) => onAnswer(e.target.value)}
        disabled={isSubmitted}
        className={inputClass}
        placeholder="Escribe la palabra..."
      />
    </div>
  );
};

// Conectar Parejas (Match)
const MatchQuestion = ({ question, userAnswer, onAnswer, isSubmitted }) => {
  const items = useMemo(() => Object.keys(question.items), [question.items]);
  const options = useMemo(() => Object.values(question.items).sort(() => Math.random() - 0.5), [question.items]);

  const handleSelect = (item, selectedValue) => {
    onAnswer({ ...userAnswer, [item]: selectedValue });
  };
  
  return (
    <div>
      <p className="question-prompt">{question.id}. {question.question}</p>
      {question.hint && <p className="hint-text">({question.hint})</p>}
      <div className="match-options">
        {items.map((item) => {
          const selectedValue = (userAnswer && userAnswer[item]) || '';
          const isCorrect = selectedValue === question.items[item];
          let itemClass = 'match-item';
          if (isSubmitted) {
            itemClass += isCorrect ? ' correct-match-item' : ' incorrect-match-item';
          }

          return (
            <div key={item} className={itemClass}>
              <span className="match-item-text">{item}</span>
              <select
                value={selectedValue}
                onChange={(e) => handleSelect(item, e.target.value)}
                disabled={isSubmitted}
                className="match-select"
              >
                <option value="">Selecciona...</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Ordenar Elementos (Order)
const OrderQuestion = ({ question, userAnswer, onAnswer, isSubmitted }) => {
  const [bank, setBank] = useState([]);
  
  useEffect(() => {
    if (!userAnswer || userAnswer.length === 0) {
      setBank(question.items.sort(() => Math.random() - 0.5));
    } else {
      setBank(question.items.filter(item => !userAnswer.includes(item)));
    }
  }, [question.items, userAnswer]);

  const handleSelectWord = (word) => {
    if (isSubmitted) return;
    const newAnswer = [...(userAnswer || []), word];
    onAnswer(newAnswer);
    setBank(bank.filter(b => b !== word));
  };

  const handleRemoveWord = (word, index) => {
    if (isSubmitted) return;
    const newAnswer = [...userAnswer];
    newAnswer.splice(index, 1);
    onAnswer(newAnswer);
    setBank([...bank, word]);
  };

  const isCorrect = userAnswer && (userAnswer.join(' ') === question.correctAnswer);
  let answerAreaClass = 'order-answer-area';
  if (isSubmitted) {
    answerAreaClass += isCorrect ? ' correct-order-area' : ' incorrect-order-area';
  }

  return (
    <div>
      <p className="question-prompt">{question.id}. {question.question}</p>
      {question.hint && <p className="hint-text">({question.hint})</p>}
      
      {/* Área de Respuesta */}
      <div className={answerAreaClass}>
        {userAnswer && userAnswer.map((word, index) => (
          <button
            key={index}
            onClick={() => handleRemoveWord(word, index)}
            disabled={isSubmitted}
            className="order-word-chip selected"
          >
            {word}
          </button>
        ))}
        {!userAnswer && <span className="order-placeholder">Haz clic en las palabras de abajo para construir la frase.</span>}
      </div>
      
      {/* Banco de Palabras */}
      <div className="order-word-bank">
        {bank.map((word) => (
          <button
            key={word}
            onClick={() => handleSelectWord(word)}
            disabled={isSubmitted}
            className="order-word-chip"
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL DE LA APLICACIÓN ---
export default function TestTemplate({ questions, title }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion?.id];

  const handleAnswer = (answer) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: answer
    });
  };

  const checkAnswer = () => {
    let isCorrect = false;
    const { type, correctAnswer, items, options } = currentQuestion;

    if (type === QuestionType.MCQ) {
      const correctOption = options.find(opt => opt.isCorrect);
      isCorrect = userAnswer === correctOption?.text;
    } else if (type === QuestionType.FILL_IN || type === QuestionType.DIALOGUE) {
      isCorrect = userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    } else if (type === QuestionType.ORDER) {
      isCorrect = userAnswer && (userAnswer.join(' ') === correctAnswer);
    } else if (type === QuestionType.MATCH) {
      if (!userAnswer) {
        isCorrect = false;
      } else {
        isCorrect = Object.keys(items).every(
          (key) => userAnswer[key] === items[key]
        );
      }
    }

    if (isCorrect) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setIsSubmitted(false);
    setShowResults(false);
  };

  const renderQuestionContent = () => {
    if (!currentQuestion) return <p>No hay preguntas disponibles.</p>;
    const { type } = currentQuestion;
    
    switch (type) {
      case QuestionType.MCQ:
        return <McqQuestion question={currentQuestion} userAnswer={userAnswer} onAnswer={handleAnswer} isSubmitted={isSubmitted} />;
      case QuestionType.FILL_IN:
        return <FillInQuestion question={currentQuestion} userAnswer={userAnswer} onAnswer={handleAnswer} isSubmitted={isSubmitted} />;
      case QuestionType.DIALOGUE:
        return <DialogueQuestion question={currentQuestion} userAnswer={userAnswer} onAnswer={handleAnswer} isSubmitted={isSubmitted} />;
      case QuestionType.MATCH:
        return <MatchQuestion question={currentQuestion} userAnswer={userAnswer} onAnswer={handleAnswer} isSubmitted={isSubmitted} />;
      case QuestionType.ORDER:
        return <OrderQuestion question={currentQuestion} userAnswer={userAnswer} onAnswer={handleAnswer} isSubmitted={isSubmitted} />;
      default:
        return <p>Tipo de pregunta no soportado.</p>;
    }
  };
  
  const getFeedback = () => {
    if (!currentQuestion) return null;
    const { type, correctAnswer, explanation, items, options } = currentQuestion;
    let isCorrect = false;
    let correctDisplay = correctAnswer;

    if (type === QuestionType.MCQ) {
      const correctOption = options.find(opt => opt.isCorrect);
      isCorrect = userAnswer === correctOption?.text;
      correctDisplay = correctOption?.text;
    } else if (type === QuestionType.FILL_IN || type === QuestionType.DIALOGUE) {
      isCorrect = userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    } else if (type === QuestionType.ORDER) {
      isCorrect = userAnswer && (userAnswer.join(' ') === correctAnswer);
    } else if (type === QuestionType.MATCH) {
      if (!userAnswer) {
        isCorrect = false;
      } else {
        isCorrect = Object.keys(items).every((key) => userAnswer[key] === items[key]);
      }
      correctDisplay = Object.entries(items).map(([key, value]) => `${key} -> ${value}`).join(', ');
    }

    return (
      <div className={`feedback-message ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
        <strong className="feedback-status">{isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong>
        {!isCorrect && <p className="feedback-correct-answer">La respuesta correcta es: <strong className="feedback-answer-text">{correctDisplay}</strong></p>}
        {explanation && <p className="feedback-explanation">{explanation}</p>}
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="practice-container">
        <div className="practice-card">
          <h2 className="practice-title">Práctica Completada</h2>
          <p className="results-score">
            Tu puntuación: <span className="score-value">{score}</span> / <span className="font-bold">{questions.length}</span>
          </p>
          <button
            onClick={restartQuiz}
            className="submit-button"
          >
            Volver a Empezar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-container">
      <div className="practice-card">
        <h1 className="practice-title">{title || 'Práctica de Hindi'}</h1>
        <div className="question-block">
          {renderQuestionContent()}
        </div>

        {isSubmitted && getFeedback()}
          
        <button
          onClick={isSubmitted ? handleNextQuestion : checkAnswer}
          className="submit-button"
          disabled={!userAnswer && !isSubmitted}
        >
          {isSubmitted 
            ? (currentQuestionIndex === questions.length - 1 ? 'Ver Resultados' : 'Siguiente') 
            : 'Comprobar'}
        </button>
      </div>
    </div>
  );
}
