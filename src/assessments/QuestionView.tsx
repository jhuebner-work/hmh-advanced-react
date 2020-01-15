import React from 'react';
import { Question } from './assessment-types';

interface QuestionViewProps {
  question: Question;
  problemId: number;
}

function QuestionView({
  question: { questionText, id, possibleAnswers },
  problemId,
}: QuestionViewProps) {
  return (
    <div className="question">
      {possibleAnswers === 'input' ? (
        <>
          <label htmlFor="">{questionText}</label>
          <input type="text" name="" id="" />
        </>
      ) : (
        <>
          <div>{questionText}</div>
          {possibleAnswers.map(answer => (
            <div className="control" key={answer.id}>
              <label className="radio" htmlFor="">
                <input type="radio" name={`${problemId}-${id}`} id="" />{' '}
                {answer.value}
              </label>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default QuestionView;
