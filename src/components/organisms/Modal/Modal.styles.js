import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 0 -5px 25px -10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  height: 500px;
  width: 650px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;