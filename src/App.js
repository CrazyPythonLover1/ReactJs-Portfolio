import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>

          <Route path="/work">
            <Work/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
