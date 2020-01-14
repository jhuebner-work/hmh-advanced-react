import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux-counter-store';
import { Dispatch } from 'redux';

interface CounterProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}

function Counter({ value, increment, decrement }: CounterProps) {
  console.log('Counter re-rendered');
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title is-centered">
          <p>Counter</p>
        </div>
      </div>
      <div className="card-content">
        <div className="has-text-centered">
          <p className="is-size-3">{value}</p>
        </div>
        <div className="buttons is-centered has-margin-top-10 are-large">
          <button className="button is-link" onClick={decrement}>
            -
          </button>
          <button className="button is-danger" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line
const mapDispatchToProps = function(dispatch: Dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

const betterMapDispatchToProps = {
  increment,
  decrement,
};

const mapStateToProps = function(state: any) {
  console.log('ReduxCounter mapStateToProps');
  return {
    value: state.demos.counter,
  };
};

let ReduxCounter = connect(
  mapStateToProps,
  betterMapDispatchToProps,
)(Counter);


export default ReduxCounter;
