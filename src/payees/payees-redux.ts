import { Payee, SortDirection } from './payee-types';
import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from '../create-store';
import dao from './payees-dao';

export interface PayeesState {
  items: Payee[];
  sortField: string;
  sortDirection: SortDirection;
  selectedPayeeId: string;
  isLoading: boolean;
  error?: any;
}

export const initialState: PayeesState = {
  items: [],
  selectedPayeeId: '',
  sortDirection: 'asc',
  sortField: '',
  isLoading: false,
};

const payeesSlice = createSlice({
  name: 'payees',
  initialState,
  reducers: {
    sortPayees: state => ({ ...state }),
    requestPayees: state => { state.isLoading = true },
    requestPayeesSuccess: {
      reducer: (state, { payload: { isLoading, items } }) => {
        return { ...state, isLoading, items };
      },
      prepare: (payees: Payee[]) => ({
        payload: { isLoading: false, items: payees },
      }),
    },
    requestPayeesError: {
      reducer: (state, { payload: { isLoading, error } }) => {
        return { ...state, isLoading, error };
      },
      prepare: (error: any) => ({
        payload: { isLoading: false, error },
      }),
    },
  },
}); 


export const {
  requestPayees,
  requestPayeesError,
  requestPayeesSuccess,
  sortPayees,
} = payeesSlice.actions;

export const fetchPayees = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch(requestPayees());
    dao
      .fetchPayees()
      .then(payees => {
        dispatch(requestPayeesSuccess(payees));
      })
      .catch(error => {
        dispatch(requestPayeesError(error));
      });
  };
};

export default payeesSlice.reducer;
