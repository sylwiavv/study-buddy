import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.6)' },
      }}
    >
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
};

export default Modal;
