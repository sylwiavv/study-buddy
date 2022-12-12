import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../atoms/Button/Button';
import { ModalOutWrapper, ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleCloseModal, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <ModalOutWrapper>
      <ModalWrapper>
        {children} <Button onClick={handleCloseModal}>Close modal</Button>
      </ModalWrapper>
    </ModalOutWrapper>,
    modalNode
  );
};

export default Modal;
