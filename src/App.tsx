import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { StyledApp } from "./App.styles";
import { GlobalAppStyles } from "./App.styles";
import { Home, Trade } from "./pages";
import { Theme } from "./components";

function App() {
  return (
    <Theme>
      <StyledApp>
        <GlobalAppStyles />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/trade">
              <Trade />
            </Route>
            <Redirect to="/" exact />
          </Switch>
        </Router>
      </StyledApp>
    </Theme>
  );
}

export default App;
