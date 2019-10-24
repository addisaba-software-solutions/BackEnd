import { Route, Redirect } from "react-router-dom";
import React from "react";

const GuestRoute = ({ component: Component, ...rest }) => {
  const token=localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        !token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/add",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
