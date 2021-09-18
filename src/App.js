import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Thoughts from './components/Thoughts/Thoughts';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

class App extends React.Component {

  render() {
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
            <Route path="/profile" exact>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
