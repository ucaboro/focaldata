import React from "react";
import "./App.css";
import Main from "./Containers/main.js";
import Survey from "./Containers/survey.js";
import Navbar from "./Components/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import posed, { PoseGroup } from "react-pose";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
});

const App = () => (
  <Router>
    <Navbar />
    <Route
      render={({ location }) => (
        <>
          <PoseGroup animateOnMount={true}>
            <RouteContainer key={location.key}>
              <Switch location={location}>
                <Route exact path={ROUTES.MAIN} component={Main} key="main" />
                <Route path={ROUTES.SURVEY} component={Survey} key="main" />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </>
      )}
    />
  </Router>
);

export default App;
