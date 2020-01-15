export type StudentResponse = string | number;

export interface Question {
  questionText: string;
  id: number;
  correctAnswer: StudentResponse;
  possibleAnswers: 'input' | { id: number; value: string }[];
  studentAnswer?: StudentResponse;
}

export interface Problem {
  id: number;
  instructions?: string;
  steps: Question[];
}

