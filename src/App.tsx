import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './create-store';
import DemosManager from './demos/DemosManager';
import AssessmentsManager from './assessments/AssessmentsManager';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <main className="section is-fluid">
        <header className="container has-text-centered">
            <h1 className="title is-1">HMH Engineering Interview Questions</h1>
            <div className="title-border"></div>
          </header>
          <div className="container">
            <nav className="navbar is-primary has-padding-left-10 has-margin-bottom-10">
              <div className="navbar-brand">
                <div className="navbar-item">
                  <Link to="/demos" className="has-text-white">
                    Demos
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link to="/assessments" className="has-text-white">
                    Assessments
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <section className="container">
            <Route path="/demos" component={DemosManager} />
            <Route path="/assessments" component={AssessmentsManager} />
          </section>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
