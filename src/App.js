import React from "react";
import "./App.css";
import Main from "./Containers/main.js";
import Survey from "./Containers/survey.js";
import Navbar from "./Components/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import posed, { PoseGroup } from "react-pose";

const App = () => (
  <Router>
    <Navbar />
    <Route
      render={({ location }) => (
        <>
          <PoseGroup>
            <RouteContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path={ROUTES.MAIN} component={Main} />
                <Route path={ROUTES.SURVEY} component={Survey} />
                <Route path="*" component={() => <>Page doesn't exist</>} />
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </>
      )}
    />
  </Router>
);

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100, beforeChildren: true },
  exit: { opacity: 0 }
});

export default App;
