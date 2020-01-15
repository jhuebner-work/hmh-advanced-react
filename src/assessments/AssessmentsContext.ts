import React from 'react';
import { StudentResponse } from './assessment-types';

export interface AssessmentsContextState {
  responses: {
    [problemId: string]: {
      [questionId: string]: StudentResponse;
    };
  };
  recordResponse: (response: StudentResponse) => void;
}

const defaultImplementation: AssessmentsContextState = {
  recordResponse: response => {},
  responses: {
    'p1': {
      'q1': {
        problemId: 'p1',
        questionId: 'q1',
        studentResponse: 'fake response'
      }
    }
  },
};

const AssessmentsContext = React.createContext<AssessmentsContextState>(defaultImplementation);

export default AssessmentsContext;
