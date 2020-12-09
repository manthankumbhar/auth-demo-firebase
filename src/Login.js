import React, { Component } from "react";
import fire from "./config/Fire";
import firebase from "firebase";
import ui from "./config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.signInGithub = this.signInGithub.bind(this);
    this.passwordReset = this.passwordReset.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }
  
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        alert(error);
      });
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
      .catch((error) => {
        alert(error);
      });
  }

  signInGithub(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        alert(error);
      });
  }

  signInTwitter(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
      .then((u) => {})
      .then((u) => {
        console.log(u);
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
      .then((u) => {})
      .then((u) => {
        console.log(u);
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
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            onClick={this.login}
            style={{ margin: "10px" }}
            className="btn btn-primary"
          >
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ margin: "10px" }}
            className="btn btn-success"
          >
            Signup
          </button>
          <button
            onClick={this.signInGithub}
            style={{ margin: "10px" }}
            className="btn btn-secondary"
          >
            Github
          </button>
          <button
            onClick={this.signInTwitter}
            style={{ margin: "10px" }}
            className="btn btn-info"
          >
            Twitter
          </button>
          <button
            onClick={this.signInGoogle}
            style={{ margin: "10px" }}
            className="btn btn-dark"
          >
            Google
          </button>
          <br />
          <button
            onClick={this.passwordReset}
            style={{ margin: "10px" }}
            className="btn btn-light"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
