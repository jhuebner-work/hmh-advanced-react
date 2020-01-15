import React from 'react';

import { StudentResponse } from './assessment-types';

export interface AssessmentsContextState {
    responses: {
        [problemId: number] : {
            [questionId: number]: StudentResponse;
        };
    };
    recordResponse: (response: StudentResponse) => void;
}

const defaultImplimentation: AssessmentsContextState = {
    recordResponse: response => {},
    responses: {
        1: {
            1: {
                problemId: 1,
                questionId: 1,
                StudentResponse: 'test response'
            }
        }
    }
}
const AssessmentsContext = React.createContext<AssessmentsContextState>(defaultImplimentation);

export default AssessmentsContext;