import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "./Image";

function MainImage(props) {
  var url = document.URL;
  var idIndex = url.substring(url.lastIndexOf("/") + 1);

  if (props.num === idIndex) {
    return (
      <SRLWrapper>
        <Image number={props.a} />
        <Image number={props.b} />
        <Image number={props.c} />
      </SRLWrapper>
    );
  } else {
    return null;
  }
}

export default MainImage;
