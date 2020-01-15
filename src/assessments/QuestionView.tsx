import React from 'react';
import { Question } from './assessment-types';

interface QuestionViewProps {
  question: Question;
}

function QuestionView({
  question: { questionText, id, possibleAnswers },
}: QuestionViewProps) {
  return (
    <div className="question">
      {possibleAnswers === 'input' ? (
        <>
          <label htmlFor="">{questionText}</label>
          <input type="text" name="" id="" />
        </>
      ) : (
        <div>
          {possibleAnswers.map(answer => (
            <div className="control">
              <label className="radio" htmlFor="">
                <input type="radio" name="" id="" /> {answer.value}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuestionView;
