import React from 'react';
import ConnectHome from '../containers/ConnectHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookByTitle from '../containers/BookByTitle';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ConnectHome} />
        <Route path='/:title' component={BookByTitle} />
      </Switch>
    </Router>
  );
}
