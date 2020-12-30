import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Main from "./components/Main";
import Signin from "./components/Signin";
import Home from "./components/Home";
import PrivateRoute from "./hoc/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
