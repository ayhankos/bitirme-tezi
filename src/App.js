import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import main from "./components/main";
import Topluluklar from "./components/topluluklar";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/main" component={main} />
        <Route path="/topluluklar" component={Topluluklar} />
      </Switch>
    </Router>
  );
}
