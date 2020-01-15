import React, { useState, useEffect } from 'react';
import dao from './assessments-dao';
import { Problem } from './assessment-types';
import ProblemView from './ProblemView';
import ProblemNavigator from './ProblemNavigator';

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
  );
}

export default AssessmentsManager;
