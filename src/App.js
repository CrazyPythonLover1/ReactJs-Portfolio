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
import ContactPage from './components/ContactPage/ContactPage';
import BlogPage from './components/BlogPage/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route  path="/about">
            <About/>
          </Route>

          <Route path="/work">
            <Work/>
          </Route>

          <Route path="/contact">
            <ContactPage/>
          </Route>

          <Route path="/blog">
            <BlogPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
