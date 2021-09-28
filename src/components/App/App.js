// email capture
require('dotenv').config()
import { env } from 'process';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css"

import Nav from '../Nav/Nav'
import Home from '../Home/Home';

function App() {
  return (
      <div className="App">
          <Router>
              <Nav />
              <div
                  id={'parallax-overlay'}
              />
              <Switch>
                  <Route
                      path={'/'}
                      component={Home}
                  />
              </Switch>
          </Router>
      </div>
  );
}

export const authToken=env('AUTH_TOKEN')

export default App;
