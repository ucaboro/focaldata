import React from "react";
import "./App.css";
import Main from "./Containers/main.js";
import Survey from "./Containers/survey.js";
import Navbar from "./Components/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.MAIN} component={Main} />
        <Route exact path={ROUTES.SURVEY} component={Survey} />
        <Route path="/survey/:id" component={Survey} />
      </Switch>
    </Router>
  );
}

export default App;
