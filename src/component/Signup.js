import React, { Component } from "react";
import fire from "../hoc/Fire";
import firebase from "firebase";
import { Link, Redirect } from "react-router-dom";
import MainAuth from "../hoc/Auth";

class Signup extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.signInGithub = this.signInGithub.bind(this);
    this.signInGithub = this.signInGithub.bind(this);
    this.signInTwitter = this.signInTwitter.bind(this);
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

  signInGithub(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
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

  signInTwitter(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(new firebase.auth.TwitterAuthProvider())
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
    fire
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
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

  render() {
    return (
      <div className="col-lg-4 offset-lg-4 main">
        <form>
          <div className="form-group">
            <h1>Sign Up</h1>
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
          <Link to="/signin">Already a user? Sign In here.</Link>
          <br />
          <Link to="/">Main Page</Link>
        </form>
        {this.state.user ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}

export default Signup;
