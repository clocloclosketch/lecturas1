
export enum ReadingType {
  FUENTEOVEJUNA = 'fuenteovejuna',
  LAZARILLO = 'lazarillo',
  ESPANOL_ESCONDE = 'espanol_esconde'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ReadingData {
  id: ReadingType;
  title: string;
  author: string;
  summary: string;
  keyPoints: string[];
  quiz: QuizQuestion[];
  imageUrl: string;
  color: string;
}

export interface GameState {
  currentQuestionIndex: number;
  score: number;
  isFinished: boolean;
  selectedAnswer: string | null;
  feedback: 'correct' | 'incorrect' | null;
}
