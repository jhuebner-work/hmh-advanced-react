import { combineReducers, configureStore, Action} from '@reduxjs/toolkit';
import {ThunkAction} from 'redux-thunk';
import demosReducer from './demos/redux-counter-store';


const reducer = combineReducers({
  demos: demosReducer,
});

const store = configureStore({reducer});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

// return value, app state type, extra value (unnecessary and unused here), Action.type type
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
