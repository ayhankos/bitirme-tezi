import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import main from "./components/main";
import Topluluklar from "./components/topluluklar";
import Etkinlikler from "./components/etkinlikler";
import Hakkimizda from "./components/hakkımızda";
import Profilim from "./components/profilim";
import Admin from "./components/admin/admin";
import Üyeler from "./components/admin/Üyeler";
import etkinliklerimiz from "./components/admin/etkinliklerimiz";
import Başvurular from "./components/admin/Başvurular";

// isAuthenticated fonksiyonunu ekleyin
const isAuthenticated = () => {
  // localStorage'da "accessToken" adında bir anahtar var mı kontrol ediyoruz
  const accessToken = localStorage.getItem("accessToken");

  // Eğer accessToken varsa ve değeri boş değilse, kullanıcı oturum açmış olarak kabul edilir
  return accessToken ? true : false;
};

// PrivateRoute bileşeni oluşturun
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/sign-in" />
    }
  />
);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <PrivateRoute path="/main" component={main} />
        <PrivateRoute path="/topluluklar" component={Topluluklar} />
        <PrivateRoute path="/etkinlikler" component={Etkinlikler} />
        <PrivateRoute path="/hakkımızda" component={Hakkimizda} />
        <PrivateRoute path="/profilim" component={Profilim} />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/Üyeler" component={Üyeler} />
        <PrivateRoute path="/etkinliklerimiz" component={etkinliklerimiz} />
        <PrivateRoute path="/Başvurular" component={Başvurular} />
      </Switch>
    </Router>
  );
}
