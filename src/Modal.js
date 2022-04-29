import './Modal.css';
import React, { useRef } from "react";
import Detail from './Detail';

const Modal = ({ setShowModal, userData }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  // render the modal JSX in the portal div.
  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <Detail userData={userData}/>
        <button class="cross" onClick={() => setShowModal(false)}>X</button>
        <div class="modal-footer">
          <button class="btn" onClick={() => setShowModal(false)}>Block this CSA</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;