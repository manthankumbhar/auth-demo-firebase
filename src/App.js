import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Signin from "./components/Signin";
import Home from "./components/Home";
import PrivateRoute from "./hoc/PrivateRoute";
import Error from "./hoc/Error";
import Practice from "./components/Practice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/practice" component={Practice} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
