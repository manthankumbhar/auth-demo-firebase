import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import SimpleReactLightBox from "simple-react-lightbox";

ReactDOM.render(
  <BrowserRouter>
    <SimpleReactLightBox>
      <App />
    </SimpleReactLightBox>
  </BrowserRouter>,
  document.getElementById("root")
);
