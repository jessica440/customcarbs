import React from "react";
import styled from "styled-components";
import Pointer from "../images/pointer2.svg";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  /* cursor: url(${Pointer}) 0 0, pointer; */
`;

const Modal = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const Close = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #444;
  cursor: url(${Pointer}) 0 0, pointer;
`;

export const HelpIcon = styled.button`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  z-index: 50;
  img {
    width: 35px;
    height: 35px;
  }
`;

export const HelpModal = ({ onClose }) => (
  <Overlay onClick={onClose}>
    <Modal onClick={(e) => e.stopPropagation()}>
      <Close onClick={onClose}>×</Close>
      <h2>How to customise</h2>
      <p>
        <strong>Tap a panel → pick a fabric → repeat.</strong>
      </p>
      <p>
        Switch between <strong>2 or 3 panels</strong> for arms and body. Use{" "}
        <strong>mirror mode</strong> to keep things matchy, or switch it off for
        full chaos.
      </p>
      <p>
        Add <strong>extras</strong> like hoods or bonus lining pocket - because
        why not.
      </p>
      <p>
        Got a weird idea? I love weird. Email{" "}
        <strong>wearcarbs@gmail.com</strong> to order off-menu.
      </p>
    </Modal>
  </Overlay>
);
