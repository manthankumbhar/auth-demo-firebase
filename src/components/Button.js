import React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <Link to={props.Link}>
      <button className="main_in">{props.name}</button>
    </Link>
  );
}

export default Button;
