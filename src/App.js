import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signup from "./component/Signup";
import Main from "./component/Main";
import Signin from "./component/Signin";
import Home from "./component/Home";
import PrivateRoute from "./hoc/PrivateRoute";
import Error from "./hoc/Error";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default App;
