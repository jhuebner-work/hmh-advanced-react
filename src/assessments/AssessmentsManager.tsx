import React, { useState, useEffect, useContext } from 'react';
import dao from './assessments-dao';
import { Problem } from './assessment-types';
import ProblemView from './ProblemView';
import ProblemNavigator from './ProblemNavigator';
import AssessmentsContext, {
  AssessmentsContextState,
} from './AssessmentsContext';
import * as lodash from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function fetchProblems(setProblems: any) {
  try {
    const problems = await dao.getAllProblems();
    setProblems(problems);
  } catch (e) {
    console.error('AssessmentsManager: error in useEffect()');
  }

  return () => {};
}

function AssessmentsManager() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const { Provider } = AssessmentsContext;

  const contextValue: AssessmentsContextState = {
    responses: {},
    recordResponse: function(response) {
      lodash.set(
        contextValue.responses,
        // [response.problemId, response.questionId],
        // `${response.problemId}.${response.questionId}`,
        [`${response.problemId}`, `${response.questionId}`],
        response.studentResponse,
      );
    },
  };

  useEffect(() => {
    dao
      .getAllProblems()
      .then(apiProblems => setProblems(apiProblems))
      .catch(error => {
        console.error('AssessmentsManager: error in useEffect()');
      });
  }, []);

  /*
  // If you want to use async-await, this is relatively clean
  // Could also do something ugly with an IIFE...
  useEffect(() => {
    fetchProblems(setProblems);
  }, []);
  */

  return (
    <Provider value={contextValue}>
      <div>
        <h2 className="is-size-3 has-margin-bottom-10">Assessments Manager</h2>
        <div className="columns">
          <div className="column">
            <ProblemNavigator />
          </div>
          <div className="column is-three-quarters">
            {problems.length && <ProblemView problem={problems[0]} />}
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default AssessmentsManager;
