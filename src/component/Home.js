import React, { Component } from "react";
import fire from "../hoc/Fire";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1 style={{ fontStyle: "italic" }}>You are logged in successfully!</h1>
        <h2 style={{ textDecoration: "underline wavy blue" }}>Home</h2>
        <a href="/">
          <button onClick={this.logout} className="btn btn-warning">
            Logout
          </button>
        </a>
      </div>
    );
  }
}

export default Home;
