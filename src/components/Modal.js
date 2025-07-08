import React from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  SvgWrapper,
} from "./ModalStyle";
import LegendPanel from "./LegendPanel";
import JacketSVG from "../functions/jacket.js";

const Modal = ({
  isOpen,
  onClose,
  panelFills,
  panelType,
  bodyPanelType,
  mirrorSides,
  extras,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h1>nice one!</h1>
        {/* Jacket preview */}
        <SvgWrapper>
          <JacketSVG
            panelFills={panelFills}
            panelType={panelType}
            bodyPanelType={bodyPanelType}
            mirrorSides={mirrorSides}
            disableClicks={true}
          />
        </SvgWrapper>

        {/* Swatch list */}
        <LegendPanel
          panelFills={panelFills}
          panelType={panelType}
          bodyPanelType={bodyPanelType}
          mirrorSides={mirrorSides}
          extras={extras}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
