import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.decision}
    contentLabel="Selected Option"
    onRequestClose={props.handleRemoveDecision}
    closeTimeoutMS={200}
    className="modal-box"
  >
    <h3 className="modal__title">The decision is...</h3>
    {props.decision && <p className="modal__body">{props.decision}</p>}
    <button className="btn" onClick={props.handleRemoveDecision}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
