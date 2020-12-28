import React, { Component } from "react";
import fire from "../hoc/Fire";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import MainAuth from "../hoc/Auth";
import "./Signin.css";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signInGoogle = this.signInGoogle.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
    this.state = {
      email: "",
      password: "",
      user: null,
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

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        return (MainAuth.isAuth = true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  signInGoogle(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((u) => {
        return (MainAuth.isAuth = true);
      })
      .catch((error) => {
        alert(error);
      });
  }

  passwordReset(e) {
    e.preventDefault();
    let email = this.state.email;
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then((u) => {
        alert("A password reset link has been sent to the mail-id entered!");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="col-lg-3 col-md-4 col-xs-8 col-sm-8 main">
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
              Sign in
            </h1>
            <button
              className="col-12 btn-google rounded"
              onClick={this.signInGoogle}
              style={{ fontSize: "18px" }}
            >
              Continue with Google
            </button>
          </div>
          <br />
          <div className="form-group col-12 ">
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
          <button onClick={this.login} className="col-11 btn-in rounded">
            Login
          </button>
          <br />
          <br />
          <p
            onClick={this.passwordReset}
            className="p"
            style={{
              textAlign: "center",
              fontSize: "15px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </p>
          <br />
        </form>
        {this.state.user ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}
export default Signin;
