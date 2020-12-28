import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

function Modaljs() {
  var signupConfig = localStorage.getItem("creationTime");

  const [show, setShow] = useState(true, false);

  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>Reminder!</ModalHeader>
        <ModalBody>
          <p>You are already a user from {signupConfig}</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Modaljs;
