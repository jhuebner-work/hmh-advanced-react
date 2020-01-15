export type Answer = string | number;

export interface StudentResponse {
  problemId: string;
  questionId: string;
  studentResponse: Answer;
}

export interface Question {
  questionText: string;
  id: string;
  correctAnswer: Answer;
  possibleAnswers: 'input' | { id: number; value: string }[];
}

export interface Problem {
  id: string;
  instructions?: string;
  steps: Question[];
}

