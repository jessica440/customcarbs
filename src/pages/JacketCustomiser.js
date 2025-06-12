import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LegendPanel from "../components/LegendPanel";
import Pointer from "../images/pointer2.svg";
import ProceedButton from "../components/ProceedButton";
import fabricOptions from "../functions/swatches.js";
import JacketSVG from "../functions/jacket.js";
import AdvancedOptionsPanel from "../components/AdvancedOptionsPanel.js";

import {
  Wrapper,
  PriceSummary,
  Header,
  Brand,
  Title,
  Subtitle,
  CustomiserLayout,
  // OptionsPanel,
  // OptionTitle,
  // ArmsTab,
  // ArmOption,
  // ArmImage,
  JacketDisplay,
  CategoryTitle,
  FabricPicker,
  Swatches,
  Swatch,
  ExtrasLabel,
  Summary,
  SelectedLabel,
  Price,
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

const mirrorMap = {
  "body-left-upper": "body-right-upper",
  "body-right-upper": "body-left-upper",
  "body-left-middle": "body-right-middle",
  "body-right-middle": "body-left-middle",
  "body-left-bottom": "body-right-bottom",
  "body-right-bottom": "body-left-bottom",
  "body-left-top": "body-right-top",
  "body-right-top": "body-left-top",
  "body-left-lower": "body-right-lower",
  "body-right-lower": "body-left-lower",
  "upper-left-arm": "upper-right-arm",
  "upper-right-arm": "upper-left-arm",
  "lower-left-arm": "lower-right-arm",
  "lower-right-arm": "lower-left-arm",
  "arm-top-left": "arm-top-right",
  "arm-top-right": "arm-top-left",
  "arm-middle-left": "arm-middle-right",
  "arm-middle-right": "arm-middle-left",
  "arm-bottom-left": "arm-bottom-right",
  "arm-bottom-right": "arm-bottom-left",
  "wristband-left": "wristband-right",
  "wristband-right": "wristband-left",
};

const JacketCustomiser = () => {
  const navigate = useNavigate();
  const [panelType, setPanelType] = useState("2");
  const [bodyPanelType, setBodyPanelType] = useState("2-panel");
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [panelFills, setPanelFills] = useState({});
  const [mirrorSides, setMirrorSides] = useState(true);
  const [activeTab, setActiveTab] = useState("arms");
  const [extras, setExtras] = useState({});

  const handlePanelClick = (panel) => {
    if (!mirrorSides) return setSelectedPanel(panel);

    const mirroredGroups = {
      "arms-top": [
        "upper-left-arm",
        "upper-right-arm",
        "arm-top-left",
        "arm-top-right",
      ],
      "arms-middle": ["arm-middle-left", "arm-middle-right"],
      "arms-bottom": [
        "lower-left-arm",
        "lower-right-arm",
        "arm-bottom-left",
        "arm-bottom-right",
      ],
      "body-top": [
        "body-left-top",
        "body-right-top",
        "body-left-upper",
        "body-right-upper",
      ],
      "body-middle": ["body-left-middle", "body-right-middle"],
      "body-bottom": [
        "body-left-lower",
        "body-right-lower",
        "body-left-bottom",
        "body-right-bottom",
      ],
      wristbands: ["wristband-left", "wristband-right"],
    };

    for (const [group, panels] of Object.entries(mirroredGroups)) {
      if (panels.includes(panel)) {
        setSelectedPanel(group);
        return;
      }
    }

    setSelectedPanel(panel);
  };

  const handleSwatchClick = (imgUrl) => {
    if (!selectedPanel) return;

    setPanelFills((prev) => {
      const updated = { ...prev };

      const apply = (id) => {
        updated[id] = imgUrl;
        if (mirrorSides && mirrorMap[id]) updated[mirrorMap[id]] = imgUrl;
      };

      const groups = {
        "arms-top":
          panelType === "3"
            ? ["arm-top-left", "arm-top-right"]
            : ["upper-left-arm", "upper-right-arm"],
        "arms-middle": ["arm-middle-left", "arm-middle-right"],
        "arms-bottom":
          panelType === "3"
            ? ["arm-bottom-left", "arm-bottom-right"]
            : ["lower-left-arm", "lower-right-arm"],
        "body-top":
          bodyPanelType === "3-panel"
            ? ["body-left-upper", "body-right-upper"]
            : ["body-left-top", "body-right-top"],
        "body-middle": ["body-left-middle", "body-right-middle"],
        "body-bottom":
          bodyPanelType === "3-panel"
            ? ["body-left-bottom", "body-right-bottom"]
            : ["body-left-lower", "body-right-lower"],
        wristbands: ["wristband-left", "wristband-right"],
      };

      if (groups[selectedPanel]) {
        groups[selectedPanel].forEach(apply);
      } else {
        apply(selectedPanel);
      }

      return updated;
    });
  };

  const panelLabels = {
    collar: "Collar",
    waistband: "Waistband",
    "wristband-left": "Left Wristband",
    "wristband-right": "Right Wristband",
    "body-left-top": "Left Body (Top)",
    "body-right-top": "Right Body (Top)",
    "body-left-lower": "Left Body (Lower)",
    "body-right-lower": "Right Body (Lower)",
    "body-left-upper": "Left Body (Upper)",
    "body-right-upper": "Right Body (Upper)",
    "body-left-middle": "Left Body (Middle)",
    "body-right-middle": "Right Body (Middle)",
    "body-left-bottom": "Left Body (Bottom)",
    "body-right-bottom": "Right Body (Bottom)",
    "upper-left-arm": "Left Arm (Upper)",
    "upper-right-arm": "Right Arm (Upper)",
    "lower-left-arm": "Left Arm (Lower)",
    "lower-right-arm": "Right Arm (Lower)",
    "arm-top-left": "Left Arm (Top)",
    "arm-top-right": "Right Arm (Top)",
    "arm-middle-left": "Left Arm (Middle)",
    "arm-middle-right": "Right Arm (Middle)",
    "arm-bottom-left": "Left Arm (Bottom)",
    "arm-bottom-right": "Right Arm (Bottom)",
  };

  const groupLabels = {
    "arms-top": "Arms (Top)",
    "arms-middle": "Arms (Middle)",
    "arms-bottom": "Arms (Bottom)",
    "body-top": "Body (Top)",
    "body-middle": "Body (Middle)",
    "body-bottom": "Body (Bottom)",
    wristbands: "Wristbands",
  };

  return (
    <Wrapper>
      <Header>
        <Brand>custom carbs</Brand>
        <Title>customise</Title>
        <Subtitle>
          click on a panel then select a swatch, choose how many arm or body
          panels you'd like and select if you want to mirror the sides of your
          design
        </Subtitle>
      </Header>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>

      <CustomiserLayout>
        {/* <OptionsPanel>
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
              <ArmImage src="../images/3-panel-arm.svg" alt="2 Panel" />
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
              <ArmImage src="../images/3-panel-arm.svg" alt="3 Panel" />
              <p>
                <strong>3 panel</strong>
                <br />
                choose three furs
              </p>
              {panelType === "3" && <SelectedLabel>selected</SelectedLabel>}
            </ArmOption>
            <ArmOption
              selected={bodyPanelType === "2-panel"}
              onClick={() => setBodyPanelType("2-panel")}
            >
              2 panel body
            </ArmOption>
            <ArmOption
              selected={bodyPanelType === "3-panel"}
              onClick={() => setBodyPanelType("3-panel")}
            >
              3 panel body
            </ArmOption>
          </ArmsTab>
        </OptionsPanel> */}
        <AdvancedOptionsPanel
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          panelType={panelType}
          setPanelType={setPanelType}
          bodyPanelType={bodyPanelType}
          setBodyPanelType={setBodyPanelType}
          mirrorSides={mirrorSides}
          setMirrorSides={setMirrorSides}
          extras={extras}
          setExtras={setExtras}
        />
        <JacketDisplay>
          <JacketSVG
            onPanelClick={handlePanelClick}
            panelFills={panelFills}
            selectedPanel={selectedPanel}
            panelType={panelType}
            bodyPanelType={bodyPanelType}
          />
        </JacketDisplay>

        <FabricPicker>
          <CategoryTitle>
            {panelLabels[selectedPanel] ||
              groupLabels[selectedPanel] ||
              "swatches"}
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
        <PriceSummary>
          <Price>£250</Price>
          <ProceedButton>pick me!</ProceedButton>
        </PriceSummary>
        <LegendPanel panelFills={panelFills} />
      </Summary>
    </Wrapper>
  );
};

export default JacketCustomiser;
