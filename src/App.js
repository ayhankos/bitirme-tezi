import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignInPage from "./components/SignIn";
import SignUpPage from "./components/SignUp";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUpPage} />
        <Route path="/SignIn" component={SignInPage} />
      </Switch>
    </Router>
  );
}
