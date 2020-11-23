import React, {Component} from "react";
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import Home from'./home';
import Mentors from './mentors';
import MyStuff from './mystuff';
import KiddiesConnect from './connect';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav class="top-nav">
          <ul>
            <li><Link to="/mystuff">MyStuff</Link></li>
            <li><Link to="/connect">KiddiesConnect</Link></li>
            <li><Link to="/mentors">Mentors</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
  
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/mystuff"><MyStuff /></Route>
          <Route path="/kiddiesconnect"><KiddiesConnect /></Route>
          <Route path="/mentors"><Mentors /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;


