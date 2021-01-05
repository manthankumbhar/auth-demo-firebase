import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function HeadButton(props) {
  return (
    <div>
      <Button Link="/signin" name={`Sign in - ${props.number}`} />
      <Link to={`practice/${props.number}`}>
        Link to Practice - {props.number}
      </Link>
      <Button Link="/signup" name={`Sign up - ${props.number}`} />
    </div>
  );
}

export default HeadButton;
