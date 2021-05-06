import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import DashboardView from "./views/DashboardView";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/app">
          <DashboardView />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
