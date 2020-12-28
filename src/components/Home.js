import React, { Component } from "react";
import fire from "../hoc/Fire";
import Modaljs from "../UI/Modal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  state = {
    user: false,
  };

  logout() {
    fire.auth().signOut();
  }

  componentDidMount() {
    var currentDate = new Date();
    var one_hour = 60 * 60 * 1000;
    var creationTime = Date.parse(localStorage.getItem("creationTime"));
    if (localStorage.signupConfig && creationTime + one_hour < currentDate) {
      this.setState({ user: true });
    }
  }

  render() {
    let modal;
    if (this.state.user) {
      modal = <Modaljs />;
    }
    return (
      <div>
        <h1 style={{ fontStyle: "italic" }}>You are logged in successfully!</h1>
        <h2 style={{ textDecoration: "underline wavy blue" }}>Home</h2>
        <a href="/">
          <button onClick={this.logout} className="btn btn-warning">
            Logout
          </button>
        </a>
        {modal}
      </div>
    );
  }
}

export default Home;
