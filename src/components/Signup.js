import React, { Component } from "react";
import fire from "../hoc/Fire";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import MainAuth from "../hoc/Auth";
import "./Signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.signInGoogle = this.signInGoogle.bind(this);
    this.authListener = this.authListener.bind(this);
    this.state = {
      userId: null,
      email: "",
      password: "",
      userSignUpCheck: false,
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((userId) => {
      if (userId) {
        this.setState({ userId });
        localStorage.setItem("userId", userId.uid);
      } else {
        this.setState({ userId: null });
        localStorage.removeItem("userId");
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        return (MainAuth.isAuth = true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  signInGoogle(e) {
    e.preventDefault();
    let authObject = fire.auth();
    authObject
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((u) => {
        MainAuth.isAuth = true;
        sessionStorage.setItem("userSignUpTime", u.user.metadata.creationTime);
        sessionStorage.setItem("showSignUpWarning", true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="col-md-3 col-xs-12 col-sm-12 main">
        <form>
          <div className="col-12">
            <h1
              style={{
                fontSize: "50px",
                fontFamily:
                  "inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Sign up
            </h1>
            <br />
            <button
              className="col-12 btn-google rounded"
              onClick={this.signInGoogle}
              type="button"
              style={{ fontSize: "18px" }}
            >
              Continue with Google
            </button>
          </div>
          <br />
          <div className="form-group col-12">
            <label htmlFor="exampleInputEmail1" style={{ fontSize: "12px" }}>
              Email address
            </label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email address..."
              style={{ height: "32px" }}
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="exampleInputPassword1" style={{ fontSize: "12px" }}>
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              style={{ height: "32px" }}
            />
          </div>
          <button
            onClick={this.signup}
            style={{ margin: "10px" }}
            className="btn-up col-11 rounded"
          >
            Continue with email
          </button>
        </form>
        {this.state.userId ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}

export default Signup;
