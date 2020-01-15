import React from 'react';
import { Problem, StudentResponse } from './assessment-types';
import QuestionView from './QuestionView';

interface ProblemViewProps {
  problem: Problem;
  responseFromStudent?: (response: StudentResponse) => {};
}

function ProblemView({ responseFromStudent, problem }: ProblemViewProps) {
  return (
    <div>
      {problem.instructions && (
        <div className="instructions">{problem.instructions}</div>
      )}

      {problem.steps.map(step => (
        <div>
          <QuestionView question={step}/>
        </div>
      ))}
    </div>
  );
}

export default ProblemView;
