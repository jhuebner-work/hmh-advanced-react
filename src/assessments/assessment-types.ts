export type StudentResponse = {
  problemId: number;
  questionId: number;
  StudentResponse: string;
}

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

