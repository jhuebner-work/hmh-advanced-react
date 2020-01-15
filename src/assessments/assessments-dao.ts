/* eslint-disable @typescript-eslint/no-unused-vars */
import { Problem } from './assessment-types';

const baseUrl = 'http://localhost:8001/problems/';

async function getAllProblems() {
  let problems: Problem[] = [];
  try {
    const response = await fetch(baseUrl);
    if (response.ok) {
      problems = await response.json();
    } else {
      throw new Error(
        `Bad HTTP status code: ${response.status} ${response.statusText}`,
      );
    }

    return problems;
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
  getAllProblems
};

export default dao;
