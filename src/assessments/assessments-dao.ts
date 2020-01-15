import { Question } from './assessment-types';

const baseUrl = 'http://localhost:8001/questions/';

async function getAllQuestions() {
  let questions: Question[] = [];
  try {
    const response = await fetch(baseUrl);
    if (response.ok) {
      questions = await response.json();
    } else {
      throw new Error(
        `Bad HTTP status code: ${response.status} ${response.statusText}`,
      );
    }

    return questions;
  } catch (e) {
    // Could test e instanceof SyntaxError to catch JSON.parse() errors
    console.error('e', e);
    throw new Error('Something went wrong in the DAO');
  }
}

function getNextQuestion() {}

function getPreviousQuestion() {}

function getQuestionById(id: string) {}

function respondToQuestion(id: string, response: Response) {}

const dao = {
  getAllQuestions
};

export default dao;
