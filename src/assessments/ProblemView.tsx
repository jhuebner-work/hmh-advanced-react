import React from 'react'
import { Problem, StudentResponse } from './assessment-types'

interface ProblemViewProps {
  problem: Problem;
  responseFromStudent: (response: StudentResponse) => {}
}

function ProblemView({responseFromStudent, problem}: ProblemViewProps ) {
  return (
    <div>
      {
        problem.instructions && <div className="instructions">{problem.instructions}</div>
      }

      <ul>
        <li className="question"></li>
      </ul>
    </div>
  )
}

export default ProblemView
