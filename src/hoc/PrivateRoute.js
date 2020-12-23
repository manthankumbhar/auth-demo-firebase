import React from "react";
import { Route } from "react-router";
import Home from "../component/Home";
import MainAuth from "./Auth";
import Error from "./Error";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      MainAuth.isAuth === true ? (
        <Component {...props} />
      ) : localStorage.getItem("user") ? (
        <Home />
      ) : (
        <Error />
      )
    }
  />
);

export default PrivateRoute;
