import React, { useState } from 'react';
import './Practica.css';

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

// --- COMPONENTE PRINCIPAL DE LA APLICACIÓN ---
export default function TestMcqTemplate({ questions, title }) {
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
    const correctOption = currentQuestion.options.find(opt => opt.isCorrect);
    const isCorrect = userAnswer === correctOption?.text;

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
    return <McqQuestion question={currentQuestion} userAnswer={userAnswer} onAnswer={handleAnswer} isSubmitted={isSubmitted} />;
  };
  
  const getFeedback = () => {
    if (!currentQuestion) return null;
    const correctOption = currentQuestion.options.find(opt => opt.isCorrect);
    const isCorrect = userAnswer === correctOption?.text;
    const correctDisplay = correctOption?.text;

    return (
      <div className={`feedback-message ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}>
        <strong className="feedback-status">{isCorrect ? '¡Correcto!' : 'Incorrecto.'}</strong>
        {!isCorrect && <p className="feedback-correct-answer">La respuesta correcta es: <strong className="feedback-answer-text">{correctDisplay}</strong></p>}
        {currentQuestion.explanation && <p className="feedback-explanation">{currentQuestion.explanation}</p>}
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="practice-container">
        <div className="practice-card">
          <h2 className="practice-title">Test Completado</h2>
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
        <h1 className="practice-title">{title || 'Test de Hindi'}</h1>
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
