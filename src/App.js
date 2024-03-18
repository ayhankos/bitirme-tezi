import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import main from "./components/main";
import Topluluklar from "./components/topluluklar";
import Etkinlikler from "./components/etkinlikler";
import Hakkimizda from "./components/hakkımızda";
import Profilim from "./components/profilim";
import Admin from "./components/admin/admin";
import UserList from "./components/admin/eventUserList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/main" component={main} />
        <Route path="/topluluklar" component={Topluluklar} />
        <Route path="/etkinlikler" component={Etkinlikler} />
        <Route path="/hakkımızda" component={Hakkimizda} />
        <Route path="/profilim" component={Profilim} />
        <Route path="/admin" component={Admin} />
        <Route path="/userList" component={UserList} />
      </Switch>
    </Router>
  );
}
