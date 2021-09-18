import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import DepositThought from './components/DepositThought/DepositThought';
import Thoughts from './components/Thoughts/Thoughts';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
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
