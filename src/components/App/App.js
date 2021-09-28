// email capture
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "../Nav/Nav";
import Home from "../Home/Home";

// Set env vars
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div id={"parallax-overlay"} />
        <Switch>
          <Route path={"/"} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
