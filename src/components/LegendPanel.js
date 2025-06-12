import React from "react";
import {
  LegendWrapper,
  LegendItem,
  SwatchDot,
  LabelText,
  LabelTitle,
  SwatchName,
} from "./LegendPanelStyle";

const panelLabelMap = {
  collar: "collar",
  waistband: "waistband",
  "wristband-left": "left wristband",
  "wristband-right": "right wristband",
  "body-left-top": "upper left front",
  "body-right-top": "upper right front",
  "body-left-lower": "lower left front",
  "body-right-lower": "lower right front",
  "upper-left-arm": "top left arm",
  "upper-right-arm": "top right arm",
  "lower-left-arm": "bottom left arm",
  "lower-right-arm": "bottom right arm",
  "arm-top-left": "top left arm",
  "arm-top-right": "top right arm",
  "arm-middle-left": "middle left arm",
  "arm-middle-right": "middle right arm",
  "arm-bottom-left": "bottom left arm",
  "arm-bottom-right": "bottom right arm",
};

const getSwatchName = (url) => {
  if (!url) return "";
  const name = url.split("/").pop(); // "pink-purple.abcd1234.png"
  return name.split(".")[0]; // "pink-purple"
};

const LegendPanel = ({ panelFills }) => {
  return (
    <LegendWrapper>
      {Object.entries(panelFills).map(([panelId, swatchUrl]) => (
        <LegendItem key={panelId}>
          <SwatchDot swatch={swatchUrl} />
          <LabelText>
            <LabelTitle>{panelLabelMap[panelId] || panelId}</LabelTitle>
            <SwatchName>{getSwatchName(swatchUrl)}</SwatchName>
          </LabelText>
        </LegendItem>
      ))}
    </LegendWrapper>
  );
};

export default LegendPanel;
