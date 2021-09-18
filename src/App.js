import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DepositThought from './components/DepositThought/DepositThought';
import Thoughts from './components/Thoughts/Thoughts';

function App() {
  return (
    <div className="App">
      <h1>Penny</h1>
      <Router>
        <Switch>
          <Route path="/thoughts" exact>
            <Thoughts />
          </Route>
          <Route path="/add" exact>
            <DepositThought />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
