import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Pointer from "../images/pointer2.svg";
import ProceedButton from "../components/ProceedButton";
import fabricOptions from "../functions/swatches.js";
import JacketSVG from "../functions/jacket.js";

import {
  Wrapper,
  Header,
  Brand,
  Title,
  Subtitle,
  CustomiserLayout,
  OptionsPanel,
  OptionTitle,
  ArmsTab,
  ArmOption,
  ArmImage,
  JacketDisplay,
  CategoryTitle,
  FabricPicker,
  Swatches,
  Swatch,
  ExtrasLabel,
  Summary,
  Legend,
  LegendItem,
  Price,
  SelectedLabel,
  PriceLabel,
  MirrorOption,
} from "./JacketCustomiserStyle";

const BackButton = styled.button`
  display: inline-block;
  background-color: var(--button);
  color: var(--button-text);
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  border: none;
  border-radius: 50px;
  cursor: url(${Pointer}) 0 0, pointer;
  text-decoration: none;
  text-align: centre;
  transition: background 0.3s;

  &:hover {
    background-color: var(--purple);
  }
`;

const JacketCustomiser = () => {
  const navigate = useNavigate();
  const [panelType, setPanelType] = useState("2");
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [panelFills, setPanelFills] = useState({});
  const [mirrorSides, setMirrorSides] = useState(false);

  const handlePanelClick = (panel) => {
    if (!mirrorSides) {
      setSelectedPanel(panel);
      return;
    }

    // --- 3-panel arm mirroring ---
    if (panelType === "3") {
      if (["arm-top-left", "arm-top-right"].includes(panel)) {
        setSelectedPanel("arms-top");
        return;
      }
      if (["arm-middle-left", "arm-middle-right"].includes(panel)) {
        setSelectedPanel("arms-middle");
        return;
      }
      if (["arm-bottom-left", "arm-bottom-right"].includes(panel)) {
        setSelectedPanel("arms-bottom");
        return;
      }
    }

    // --- 2-panel arm mirroring ---
    else {
      if (["upper-left-arm", "upper-right-arm"].includes(panel)) {
        setSelectedPanel("arms-top");
        return;
      }
      if (["lower-left-arm", "lower-right-arm"].includes(panel)) {
        setSelectedPanel("arms-bottom");
        return;
      }
    }

    // --- Body mirroring (works in both modes) ---
    if (["body-left-top", "body-right-top"].includes(panel)) {
      setSelectedPanel("body-top");
      return;
    }
    if (["body-left-lower", "body-right-lower"].includes(panel)) {
      setSelectedPanel("body-bottom");
      return;
    }

    // --- Wristbands or others ---
    if (["wristband-left", "wristband-right"].includes(panel)) {
      setSelectedPanel("wristbands");
      return;
    }

    // Default single panel
    setSelectedPanel(panel);
  };
  const handleSwatchClick = (imgUrl) => {
    if (!selectedPanel) return;

    setPanelFills((prev) => {
      const updated = { ...prev };

      switch (selectedPanel) {
        // Arm mirroring
        case "arms-top":
          if (panelType === "3") {
            updated["arm-top-left"] = imgUrl;
            updated["arm-top-right"] = imgUrl;
          } else {
            updated["upper-left-arm"] = imgUrl;
            updated["upper-right-arm"] = imgUrl;
          }
          break;

        case "arms-middle":
          updated["arm-middle-left"] = imgUrl;
          updated["arm-middle-right"] = imgUrl;
          break;

        case "arms-bottom":
          if (panelType === "3") {
            updated["arm-bottom-left"] = imgUrl;
            updated["arm-bottom-right"] = imgUrl;
          } else {
            updated["lower-left-arm"] = imgUrl;
            updated["lower-right-arm"] = imgUrl;
          }
          break;

        // Body mirroring
        case "body-top":
          updated["body-left-top"] = imgUrl;
          updated["body-right-top"] = imgUrl;
          break;

        case "body-bottom":
          updated["body-left-lower"] = imgUrl;
          updated["body-right-lower"] = imgUrl;
          break;

        // Optional: wristband mirroring
        case "wristbands":
          updated["wristband-left"] = imgUrl;
          updated["wristband-right"] = imgUrl;
          break;

        // Default — single panel
        default:
          updated[selectedPanel] = imgUrl;
          break;
      }

      return updated;
    });

    setSelectedPanel(null); // Optional: keep selected if you want to pick multiple
  };

  const panelLabels = {
    waistband: "waistband",
    "wristband-left": "left wristband",
    "wristband-right": "right wristband",
    "body-left-lower": "lower left body",
    "body-right-lower": "lower right body",
    "body-left-top": "upper left body",
    "body-right-top": "upper right body",
    "lower-left-arm": "lower left arm",
    "lower-right-arm": "lower right arm",
    "upper-left-arm": "upper left arm",
    "upper-right-arm": "upper right arm",
    collar: "collar",
    "arms-top": "both top arms",
    "arms-bottom": "both lower arms",
    "body-top": "both top body panels",
    "body-bottom": "both lower body panels",
    "arm-top-left": "left top arm",
    "arm-top-right": "right top arm",
    "arm-bottom-left": "left lower arm",
    "arm-bottom-right": "right lower arm",
    "arm-middle-left": "left middle arm",
    "arm-middle-right": "right middle arm",
  };

  return (
    <Wrapper>
      <Header>
        <Brand>custom carbs</Brand>
        <Title>customise</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Subtitle>
      </Header>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>

      <CustomiserLayout>
        <OptionsPanel>
          <OptionTitle>advanced options</OptionTitle>
          <MirrorOption>
            <input
              type="checkbox"
              checked={mirrorSides}
              onChange={(e) => setMirrorSides(e.target.checked)}
            />
            mirror sides
          </MirrorOption>

          <ArmsTab>
            <ArmOption
              selected={panelType === "2"}
              onClick={() => setPanelType("2")}
            >
              <ArmImage src="/images/2panel.svg" alt="2 Panel" />
              <p>
                <strong>2 panel</strong>
                <br />
                choose two furs
              </p>
              {panelType === "2" && <SelectedLabel>selected</SelectedLabel>}
            </ArmOption>
            <ArmOption
              selected={panelType === "3"}
              onClick={() => setPanelType("3")}
            >
              <ArmImage src="/images/3panel.svg" alt="3 Panel" />
              <p>
                <strong>3 panel</strong>
                <br />
                choose three furs
              </p>
              {panelType === "3" && <SelectedLabel>selected</SelectedLabel>}
            </ArmOption>
          </ArmsTab>
        </OptionsPanel>

        <JacketDisplay>
          <JacketSVG
            onPanelClick={handlePanelClick}
            panelFills={panelFills}
            selectedPanel={selectedPanel}
            panelType={panelType}
          />
        </JacketDisplay>

        <FabricPicker>
          <CategoryTitle>
            {selectedPanel ? panelLabels[selectedPanel] : "swatches"}
          </CategoryTitle>
          <Swatches>
            {fabricOptions.map((img, i) => (
              <Swatch
                key={i}
                src={img}
                onClick={() => handleSwatchClick(img)}
              />
            ))}
          </Swatches>
          <ExtrasLabel>extras</ExtrasLabel>
        </FabricPicker>
      </CustomiserLayout>

      <Summary>
        <Legend>
          <LegendItem colour="#d3d3d3">top front</LegendItem>
          <LegendItem colour="#f0f">top arm</LegendItem>
          <LegendItem colour="#fc0">lower front</LegendItem>
          <LegendItem colour="#ccc">under arm</LegendItem>
          <LegendItem colour="#0f0">collar</LegendItem>
        </Legend>
        <Price>£250</Price>
        <ProceedButton>pick me!</ProceedButton>
      </Summary>
    </Wrapper>
  );
};

export default JacketCustomiser;
