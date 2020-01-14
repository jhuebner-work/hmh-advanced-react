import { Reducer, AnyAction, ActionCreator } from 'redux';

export interface ReduxCounterState {
  counter: number;
  startedAt: number;
}

const initialState: ReduxCounterState = {
  counter: 1,
  startedAt: 1,
};

export const reduxDemoActions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD: 'ADD',
};

export const increment: ActionCreator<AnyAction> = () => ({
  type: reduxDemoActions.INCREMENT,
});

export const decrement: ActionCreator<AnyAction> = () => ({
  type: reduxDemoActions.DECREMENT,
});

export const add: ActionCreator<AnyAction> = (amount: any) => {
  return {
    type: reduxDemoActions.ADD,
    payload: {
      amount,
    },
  };
};

const reducer: Reducer<ReduxCounterState> = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case reduxDemoActions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case reduxDemoActions.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case reduxDemoActions.ADD:
      if (payload.amount <= 10) {
        return { ...state, counter: state.counter + payload.amount };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
