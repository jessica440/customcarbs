import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomJacketCard from "../components/CustomJacketCard";
import SwatchSelector from "../components/SwatchSelector";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-between;
  background-color: var(--button-text);
  color: var(--button);
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

const Content = styled.div`
  max-width: 50%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--paragraph);
`;

const ProceedButton = styled(Link)`
  display: inline-block;
  background-color: var(--button);
  color: var(--button-text);
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const CustomOrders = () => {
  return (
    <PageContainer>
      <CustomJacketCard />
      <Content>
        <Heading>custom orders</Heading>
        <Paragraph>
          Custom coats for bodies. All bodies. Just send your measurements and
          pick your favourite swatches!
          <br />
          <br />
          <b>HOW IT WORKS:</b>
          <br />
          1. Choose your body and arm panel layouts (2-panel or 3-panel - your
          call). <br />
          2. Mix and match fabrics and colours - just click on the jacket panel
          you’d like to change, then pick a swatch from the options on the
          right. <br />
          3. Add optional extras: pockets, hoods… <br />
          4. See your design come to life, then place your order! Each jacket is
          made just for you, so please allow <b>up to 21 working days</b> for
          production (shipping time not included). Keep an eye on your inbox in
          case we need to chat about stock or design tweaks. <br /> <br />
          <b>Not sure where to start?</b> <br /> Check out some of these past
          designs for inspiration!{" "}
        </Paragraph>
        <SwatchSelector />
        <ProceedButton to="/customise">proceed</ProceedButton>
      </Content>
    </PageContainer>
  );
};

export default CustomOrders;
