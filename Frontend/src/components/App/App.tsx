import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';

const App: React.FC = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/test">Test</Link>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/test">
        <h1>Test page</h1>
      </Route>
    </Switch>
  </Router>
);

export default App;
