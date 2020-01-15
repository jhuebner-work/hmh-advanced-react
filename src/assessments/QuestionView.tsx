import React, { useState, useContext } from 'react';
import { Question } from './assessment-types';
import AssessmentsContext from './AssessmentsContext';

interface QuestionViewProps {
  question: Question;
  problemId: string;
}

function QuestionView({
  question: { questionText, id, possibleAnswers },
  problemId,
}: QuestionViewProps) {
  const context = useContext(AssessmentsContext);

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
                <input
                  type="radio"
                  name={`${problemId}-${id}`}
                  value={answer.id}
                  onChange={() =>
                    context.recordResponse({
                      problemId: problemId,
                      questionId: id,
                      studentResponse: answer.id,
                    })
                  }
                />{' '}
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
