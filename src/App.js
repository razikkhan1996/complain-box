import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Authicate } from "./pages/Authicate";
import {Pagenotfound} from './pages/Pagenotfound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Authicate>
            <Dashboard />
          </Authicate>
        </Route>

        <Route exact path="/login">
          <Authicate nonAuthenticated={true}>
            <Login />
          </Authicate>
        </Route>
        <Route path="*">
          <Pagenotfound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
