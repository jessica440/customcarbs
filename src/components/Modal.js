import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./ModalStyle";
import LegendPanel from "./LegendPanel";
import JacketSVG from "../functions/jacket.js";

const Modal = ({
  isOpen,
  onClose,
  panelFills,
  panelType,
  bodyPanelType,
  mirrorSides,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        {/* Jacket preview */}
        <div style={{ width: "100%", marginBottom: "1.5rem" }}>
          <JacketSVG
            panelFills={panelFills}
            panelType={panelType}
            bodyPanelType={bodyPanelType}
            mirrorSides={mirrorSides}
          />
        </div>

        {/* Swatch list */}
        <LegendPanel
          panelFills={panelFills}
          panelType={panelType}
          bodyPanelType={bodyPanelType}
          mirrorSides={mirrorSides}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
