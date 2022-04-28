import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Payment({ grandTotal, reset }) {
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
    reset();
  };

  return (
    <>
      <button
        className="btn btn-outline-primary rounded-3 m-3"
        onClick={() => setOpen((open) => !open)}
      >
        Proceed to Payment
      </button>
      <Modal isOpen={open} toggle={() => setOpen((open) => !open)} centered>
        <ModalHeader>Thank You</ModalHeader>
        <ModalBody>
          A grand total of {grandTotal} have been charged from your bank
          account. We will deliver the items to your house in a second.
          <hr />
          Just kidding. Thank you for browsing around my shopping website
          project. This Project was made with React. Themed using bootswatch Lux
          template. Bootstrap components from reactstrap. Photos from Unsplash
          copyright © yosuanicolaus 2022
          <hr />
          <div className="text-center mb-2">Stay elegant.</div>
          <div className="text-center">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={backToHome}
            >
              Back to Home
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Payment;
