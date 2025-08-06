import React from "react";
import {
  LegendWrapper,
  LegendItem,
  SwatchDot,
  LabelText,
  LabelTitle,
  SwatchName,
  GroupWrapper,
  GroupTitle,
} from "./LegendPanelStyle";

import { Price } from "../pages/JacketCustomiserStyle";

const panelLabelMap = {
  // Arms
  "upper-left-arm": "top left arm",
  "lower-left-arm": "bottom left arm",
  "upper-right-arm": "top right arm",
  "lower-right-arm": "bottom right arm",
  "arm-top-left": "top left arm",
  "arm-middle-left": "middle left arm",
  "arm-bottom-left": "bottom left arm",
  "arm-top-right": "top right arm",
  "arm-middle-right": "middle right arm",
  "arm-bottom-right": "bottom right arm",

  // Body (3-panel)
  "body-left-top": "top left front",
  "body-left-middle": "middle left front",
  "body-left-bottom": "bottom left front",
  "body-right-top": "top right front",
  "body-right-middle": "middle right front",
  "body-right-bottom": "bottom right front",

  // Body (2-panel)
  "body-left-upper": "upper left front",
  "body-left-lower": "lower left front",
  "body-right-upper": "upper right front",
  "body-right-lower": "lower right front",

  // Extras
  collar: "collar",
  "wristband-left": "left wristband",
  "wristband-right": "right wristband",
  waistband: "waistband",
};

const getSwatchName = (url) => {
  if (!url) return "";
  const name = url.split("/").pop();
  return name.split(".")[0];
};

const LegendPanel = ({ panelFills, panelType, bodyPanelType, extras }) => {
  const armPanels =
    panelType === "3"
      ? [
          "arm-top-left",
          "arm-middle-left",
          "arm-bottom-left",
          "arm-top-right",
          "arm-middle-right",
          "arm-bottom-right",
        ]
      : [
          "upper-left-arm",
          "lower-left-arm",
          "upper-right-arm",
          "lower-right-arm",
        ];

  const bodyPanels =
    bodyPanelType === "3"
      ? [
          "body-left-upper",
          "body-left-middle",
          "body-left-bottom",
          "body-right-upper",
          "body-right-middle",
          "body-right-bottom",
        ]
      : [
          "body-left-top",
          "body-left-lower",
          "body-right-top",
          "body-right-lower",
        ];

  const trims = ["collar", "wristband-left", "wristband-right", "waistband"];

  const groupedPanelOrder = {
    Arms: armPanels,
    Body: bodyPanels,
    Trims: trims,
    // Extras: extras,
  };

  const extrasList = [
    { label: "hood", price: 30 },
    { label: "inside pocket", price: 8 },
  ];
  const BASE_PRICE = 225;

  const extrasTotal = extrasList.reduce((sum, { label, price }) => {
    return extras[label] ? sum + price : sum;
  }, 0);

  const finalPrice = BASE_PRICE + extrasTotal;

  return (
    <LegendWrapper>
      {Object.entries(groupedPanelOrder).map(([groupTitle, panelIds]) => {
        if (!Array.isArray(panelIds)) return null;

        const visiblePanels = panelIds.filter((id) => panelFills[id]);
        if (visiblePanels.length === 0) return null;

        return (
          <GroupWrapper key={groupTitle}>
            <GroupTitle>{groupTitle}</GroupTitle>
            {visiblePanels.map((panelId) => (
              <LegendItem key={panelId}>
                <SwatchDot swatch={panelFills[panelId]} />
                <LabelText>
                  <LabelTitle>{panelLabelMap[panelId]}</LabelTitle>
                  <SwatchName>{getSwatchName(panelFills[panelId])}</SwatchName>
                </LabelText>
              </LegendItem>
            ))}
          </GroupWrapper>
        );
      })}
      {extras && extrasList.some(({ label }) => extras[label]) && (
        <GroupWrapper key="Extras" className="extras-group">
          <GroupTitle>Extras</GroupTitle>
          {extrasList.map(({ label, price }) =>
            extras[label] ? (
              <LegendItem key={label}>
                <LabelText>
                  <LabelTitle>{label}</LabelTitle>
                  <SwatchName>+£{price}</SwatchName>
                </LabelText>
              </LegendItem>
            ) : null
          )}
          <Price>£{finalPrice}</Price>
        </GroupWrapper>
      )}
    </LegendWrapper>
  );
};

export default LegendPanel;
