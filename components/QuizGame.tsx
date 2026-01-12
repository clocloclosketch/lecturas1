
import React, { useState } from 'react';
import { QuizQuestion, GameState } from '../types';

interface QuizGameProps {
  questions: QuizQuestion[];
  onClose: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ questions, onClose }) => {
  const [gameState, setGameState] = useState<GameState>({
    currentQuestionIndex: 0,
    score: 0,
    isFinished: false,
    selectedAnswer: null,
    feedback: null,
  });

  const currentQuestion = questions[gameState.currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    if (gameState.selectedAnswer) return;

    const isCorrect = answer === currentQuestion.correctAnswer;
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answer,
      feedback: isCorrect ? 'correct' : 'incorrect',
      score: isCorrect ? prev.score + 1 : prev.score,
    }));

    setTimeout(() => {
      if (gameState.currentQuestionIndex + 1 < questions.length) {
        setGameState(prev => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          selectedAnswer: null,
          feedback: null,
        }));
      } else {
        setGameState(prev => ({ ...prev, isFinished: true }));
      }
    }, 1500);
  };

  if (gameState.isFinished) {
    return (
      <div className="text-center p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md mx-auto">
        <div className="text-5xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">¡Completado!</h2>
        <p className="text-slate-600 mb-6">Has obtenido {gameState.score} de {questions.length} puntos.</p>
        <button 
          onClick={onClose}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-w-2xl mx-auto">
      <div className="bg-slate-50 p-6 border-b border-slate-100 flex justify-between items-center">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          Pregunta {gameState.currentQuestionIndex + 1} de {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 w-8 rounded-full transition-colors ${
                idx === gameState.currentQuestionIndex ? 'bg-indigo-600' : 
                idx < gameState.currentQuestionIndex ? 'bg-indigo-200' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-tight">
          {currentQuestion.question}
        </h2>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, idx) => {
            let variant = 'border-slate-200 hover:border-indigo-400 hover:bg-indigo-50';
            if (gameState.selectedAnswer === option) {
              variant = gameState.feedback === 'correct' 
                ? 'bg-emerald-100 border-emerald-500 text-emerald-800' 
                : 'bg-rose-100 border-rose-500 text-rose-800';
            } else if (gameState.selectedAnswer && option === currentQuestion.correctAnswer) {
              variant = 'bg-emerald-100 border-emerald-500 text-emerald-800';
            }

            return (
              <button
                key={idx}
                disabled={!!gameState.selectedAnswer}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 rounded-2xl border-2 text-left transition-all font-medium ${variant}`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
