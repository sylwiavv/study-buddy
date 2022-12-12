import { useState } from 'react';

function UseModal(initialState = false) {
  const [isModalOpen, setModalState] = useState(initialState);

  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);

  return {
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
  };
}

export default UseModal;
