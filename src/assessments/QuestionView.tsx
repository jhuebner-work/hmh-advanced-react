import React, { useState, useContext } from 'react';
import { Question, StudentResponse } from './assessment-types';

interface QuestionViewProps {
  question: Question;
  problemId: string;
  recordResponse: (response: StudentResponse) => void;
}

function QuestionView({
  question: { questionText, id, possibleAnswers },
  problemId,
  recordResponse
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
                <input
                  type="radio"
                  name={`${problemId}-${id}`}
                  value={answer.id}
                  onChange={() =>
                    recordResponse({
                      problemId: problemId,
                      questionId: id,
                      studentResponse: answer.id,
                    })
                  }
                />
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
