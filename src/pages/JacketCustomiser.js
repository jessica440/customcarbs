import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pointer from "../images/pointer2.svg";
import ProceedButton from "../components/ProceedButton";
import fabricOptions from "../functions/swatches.js";
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
  JacketSVGPlaceholder,
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

const PageContainer = styled.div`
  padding: 2rem;
  font-family: "Poppins", sans-serif;
`;

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
  /* img {
    height: 0.8rem;
    width: auto;
    margin-right: 0.5rem;
  } */
`;

const JacketCustomiser = () => {
  const [panelType, setPanelType] = useState("2");
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <Brand>wearcarbs</Brand>
        <Title>customise</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Subtitle>
      </Header>
      <BackButton onClick={() => navigate(-1)}>
        {/* <img src={backIcon} alt="Back" /> */}
        Back
      </BackButton>
      <CustomiserLayout>
        <OptionsPanel>
          <OptionTitle>advanced options</OptionTitle>
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
          <JacketSVGPlaceholder>
            {" "}
            {/* Replace with your actual SVG later */}{" "}
          </JacketSVGPlaceholder>
        </JacketDisplay>

        <FabricPicker>
          <CategoryTitle>top arm</CategoryTitle>
          <Swatches>
            {fabricOptions.map((src, i) => (
              <Swatch key={i} src={src} />
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
