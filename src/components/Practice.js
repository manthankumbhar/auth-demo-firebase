import React from "react";
import { Component } from "react";

class Practice extends Component {
  componentDidMount() {
    const url = document.URL;
    const id = url.substring(url.lastIndexOf("/") + 1);
  }
  render() {
    return (
      <div>
        <h1>Practice - {}</h1>
        <img
          src="http://kiranvadhaiya.com/gallary/04.jpg"
          alt=""
          width="300px"
          height="300px"
          style={{ margin: "25px" }}
        />
        <img
          src="http://kiranvadhaiya.com/gallary/03.jpg"
          alt=""
          width="300px"
          height="300px"
          style={{ margin: "25px" }}
        />
        <img
          src="http://kiranvadhaiya.com/gallary/05.jpg"
          alt=""
          width="300px"
          height="300px"
          style={{ margin: "25px" }}
        />
      </div>
    );
  }
}

export default Practice;
