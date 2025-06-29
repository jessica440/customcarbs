import styled from "styled-components";
import Pointer from "../images/pointer2.svg";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: url(${Pointer}) 0 0, pointer;
  &:hover {
    color: #000;
  }
`;
