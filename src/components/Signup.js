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
      user: null,
      email: "",
      password: "",
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
        localStorage.removeItem("signupConfig");
        localStorage.removeItem("creationTime");
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
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
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
        console.log(u.user.metadata.creationTime);
        localStorage.setItem("signupConfig", null);
        localStorage.setItem("creationTime", u.user.metadata.creationTime);
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
            Signup
          </button>
        </form>
        {this.state.user ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}

export default Signup;
