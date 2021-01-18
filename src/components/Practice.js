import React from "react";
import { Component } from "react";
import HeadImage from "./HeadImage";

class Practice extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
    };
  }

  idCheckingFuntion() {
    const url = document.URL;
    var idIndex = url.substring(url.lastIndexOf("/") + 1);
    if (url) {
      this.setState({ id: idIndex });
    }
  }

  componentDidMount() {
    this.idCheckingFuntion();
  }

  render() {
    return (
      <div>
        <h1>Practice - {this.state.id}</h1>
        <HeadImage />
      </div>
    );
  }
}

export default Practice;
