import { Route, Redirect } from "react-router-dom";
import React from "react";
import LoginAuth from './components/login/loginAuth.js'
class LoginForm extends React.Component{
  render(){
    localStorage.removeItem('token');
		return (
      <LoginAuth
         path="/login"
         component={LoginForm}
         exact
        />
    );
}
}
