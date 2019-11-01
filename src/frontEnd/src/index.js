
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/css/fontawesome.min.css"


import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
//import "~react-image-gallery/styles/scss/image-gallery.scss";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import SecondForm from "views/examples/SecondForm.jsx";
import ThirdPage from "views/examples/ThirdPage.jsx";
import FourthPage from "views/examples/FourthPage.jsx";
import LoginPage from "views/examples/LoginPage.jsx";
import Home from "views/examples/Home.jsx";
import Message from "views/examples/Message.jsx";
import Message2 from "views/examples/Message2.jsx";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/second-form"
        render={props => <SecondForm {...props} />}
      />
       <Route
        path="/third-form"
        render={props => <ThirdPage {...props} />}
      />
       <Route
        path="/fourth-form"
        render={props => <FourthPage {...props} />}
      />
      <Route
        path="/login-page"
        render={props => <LoginPage {...props} />}
      />
       <Route
        path="/home-page"
        render={props => <Home {...props} />}
      />
      <Route
        path="/msg-page"
        render={props => <Message {...props} />}
      />
       <Route
        path="/msg-page2"
        render={props => <Message2 {...props} />}
      />
    
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
