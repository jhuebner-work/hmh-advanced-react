import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import ReduxCounter from './ReduxCounter';

function DemosManager() {
  return (
    <div className="container">
      <h2
        className="is-size-2 has-margin-bottom-15"
        style={{ borderBottom: '2px black solid' }}
      >
        Various Demos
      </h2>
      <div className="columns">
        <div className="column is-one-fifth">
          <ul>
            <li>
              <NavLink
                activeClassName="has-text-weight-bold"
                to="/demos/redux-counter"
              >
                Redux counter
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="column">
          <Route path="/demos/redux-counter" component={ReduxCounter} />
        </div>
      </div>
    </div>
  );
}

export default DemosManager;
