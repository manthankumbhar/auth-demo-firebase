import React from "react";
import { Route } from "react-router";
import Home from "../components/Home";
import MainAuth from "./Auth";
import Error from "./Error";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      MainAuth.isAuth ? (
        <Component {...props} />
      ) : localStorage.userId ? (
        localStorage.getItem("userId") && <Home />
      ) : (
        <Error />
      )
    }
  />
);

export default PrivateRoute;
