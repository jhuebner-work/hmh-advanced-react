import React from 'react';
import { Problem, StudentResponse } from './assessment-types';
import QuestionView from './QuestionView';
import NavigationButtons from './NavigationButtons';
import AssessmentsContext from './AssessmentsContext';

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

      {problem.steps.map((step, index) => (
        <div key={step.id}>
          <div hidden={problem.steps.length < 2}>
            [{index + 1} of {problem.steps.length} steps]
          </div>
          <QuestionView question={step} problemId={problem.id} />
        </div>
      ))}

      <div className="has-margin-top-10">
        <NavigationButtons />
      </div>
    </div>
  );
}

export default ProblemView;
