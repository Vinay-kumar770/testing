import React from "react";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null;

  return (
    <div id="modal-container" role="dialog" data-testid="modal">
      <header id="modal-header">
        <h1 id="modal-title" data-testid="modal-title">
          Modal Title
        </h1>
        <button
          id="close-modal-button"
          onClick={toggleModal}
          data-testid="close-modal-button"
          aria-label="Close Modal"
        >
          Close
        </button>
      </header>
      <main id="modal-content" data-testid="modal-content">
        <p>This is a modal example.</p>
      </main>
      <footer id="modal-footer">
        <button
          id="confirm-button"
          onClick={toggleModal}
          data-testid="confirm-button"
        >
          Confirm
        </button>
        <button
          id="cancel-button"
          onClick={toggleModal}
          data-testid="cancel-button"
        >
          Cancel
        </button>
      </footer>
    </div>
  );
};

export default Modal;
