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
    } else {
      if (panel === "left-arm" || panel === "right-arm") {
        setSelectedPanel("arms");
      } else if (panel === "body-left" || panel === "body-right") {
        setSelectedPanel("sides");
      } else {
        setSelectedPanel(panel);
      }
    }
  };

  const handleSwatchClick = (imgUrl) => {
    if (!selectedPanel) return;

    setPanelFills((prev) => {
      const updated = { ...prev };

      if (selectedPanel === "arms") {
        updated["left-arm"] = imgUrl;
        updated["right-arm"] = imgUrl;
      } else if (selectedPanel === "sides") {
        updated["body-left"] = imgUrl;
        updated["body-right"] = imgUrl;
      } else {
        updated[selectedPanel] = imgUrl;
      }

      return updated;
    });
  };

  const panelLabels = {
    collar: "collar",
    "left-arm": "left arm",
    "right-arm": "right arm",
    "body-left": "left front",
    "body-right": "right front",
    waistband: "waistband",
    arms: "both arms",
    sides: "both fronts",
  };

  return (
    <Wrapper>
      <Header>
        <Brand>wearcarbs</Brand>
        <Title>customise</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Subtitle>
      </Header>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>

      <CustomiserLayout>
        <OptionsPanel>
          <OptionTitle>advanced options</OptionTitle>
          <label>
            <input
              type="checkbox"
              checked={mirrorSides}
              onChange={(e) => setMirrorSides(e.target.checked)}
            />
            mirror sides
          </label>

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
              <SelectedLabel>selected</SelectedLabel>
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
              <PriceLabel>+ £10</PriceLabel>
            </ArmOption>
          </ArmsTab>
        </OptionsPanel>

        <JacketDisplay>
          <JacketSVG
            onPanelClick={handlePanelClick}
            panelFills={panelFills}
            selectedPanel={selectedPanel}
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
