import React, { Component } from "react";
import { ModalBody, ModalDialog } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

class Modal extends Component {
  render() {
    return (
      <div>
        <ModalDialog>
          <ModalHeader closeButton>Modal Example</ModalHeader>
          <ModalBody>
            <p>Cool</p>
          </ModalBody>
        </ModalDialog>
      </div>
    );
  }
}

export default Modal;
