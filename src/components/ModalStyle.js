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
  width: 90%;
  padding: 1rem;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  @media (max-width: 600px) {
    padding: 1rem;
    max-height: 80vh;
    max-width: 90%;
  }
`;

export const SvgWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
  pointer-events: none;

  @media (max-width: 600px) {
    max-width: 90%;
    /* margin-bottom: 1rem; */
  }
`;

// export const ContentWrapper = styled.div`
//   overflow-y: auto;
//   padding: 2rem;
//   height: 100%;
// `;

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
