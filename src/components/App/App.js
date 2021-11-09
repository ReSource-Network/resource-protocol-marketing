import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Nav from "../Nav/Nav"
import Home from "../Home/Home"

export const getCloudinaryVideoPath = (fileName) =>
  "https://res.cloudinary.com/resource-network/video/upload/v1632944401/resource-protocol/" +
  fileName
export const getCloudinaryImagePath = (fileName) =>
  "https://res.cloudinary.com/resource-network/image/upload/v1632945917/resource-protocol/" +
  fileName

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div id={"parallax-overlay"} />
        <Switch>
            <Route path={"/"} component={Home} />
            {/*<Route path={"/TGE"} component={} />*/}
        </Switch>
      </Router>
    </div>
  )
}

export default App
