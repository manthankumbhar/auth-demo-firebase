import React, { Component } from "react";
import fire from "../hoc/Fire";
import SignUpWarningModal from "../UI/SignUpWarningModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      userSignUpinLastOneHour: false,
    };
  }

  logout() {
    fire.auth().signOut();
  }

  componentDidMount() {
    var currentDate = new Date();
    var oneHour = 60 * 60 * 1000;
    var userSignUpTime = Date.parse(sessionStorage.getItem("userSignUpTime"));
    if (
      sessionStorage.showSignUpWarning &&
      userSignUpTime + oneHour < currentDate
    ) {
      this.setState({ userSignUpinLastOneHour: true });
    }
  }

  render() {
    let modal;
    if (this.state.userSignUpinLastOneHour) {
      modal = <SignUpWarningModal />;
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
