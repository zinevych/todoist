import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import DashboardView from "./views/DashboardView";

import rootReducer from "./rootReducer";
import "./index.css";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>,
  // eslint-disable-next-line no-undef
  document.getElementById("root")
);
