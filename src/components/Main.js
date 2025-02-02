import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Authentication Page</h1>
        <Link to="/signin">
          <button className="main_in">SignIn</button>
        </Link>
        <Link to="/signup">
          <button className="main_up">SignUp</button>
        </Link>
        {localStorage.userId ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}

export default Main;
