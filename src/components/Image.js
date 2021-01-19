import React from "react";

function Image(props) {
  return (
    <a href={`https://picsum.photos/11${props.number}`}>
      <img
        src={`https://picsum.photos/11${props.number}`}
        alt=""
        width="300px"
        height="300px"
        style={{ margin: "25px" }}
      />
    </a>
  );
}

export default Image;
