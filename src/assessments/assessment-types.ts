export type Response = string | number;

export interface Question {
  question: string;
  id: number;
  correctAnswer: Response;
  possibleAnswers: 'input' | { id: number; value: string }[];
  studentAnswer?: Response;
}

export interface Problem {
  id: number;
  instructions?: string;
  steps: Question[];
}

