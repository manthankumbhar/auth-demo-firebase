import React, { Component } from "react";
import fire from "../hoc/Fire";
import Modaljs from "../UI/SignUpWarningModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      signUpUser: false,
    };
  }
  state = {
    signUpUser: false,
  };

  logout() {
    fire.auth().signOut();
  }

  componentDidMount() {
    var currentDate = new Date();
    var oneHour = 60 * 60 * 1000;
    var creationTime = Date.parse(localStorage.getItem("userSignUpTime"));
    if (localStorage.signUpWarning && creationTime + oneHour < currentDate) {
      this.setState({ signUpUser: true });
    }
  }

  render() {
    let modal;
    if (this.state.signUpUser) {
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
