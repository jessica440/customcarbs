import React from "react";
import styled from "styled-components";
import coat1 from "../images/coat1.jpeg"; // Add your actual swatch image paths
import coat2 from "../images/coat2.jpeg";
import coat3 from "../images/coat3.jpeg";
import coat4 from "../images/coat4.jpg";

const SwatchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Swatch = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: 2px solid #eee;
  border-radius: 8px;
  cursor: pointer;
`;

export default function SwatchSelector() {
  return (
    <SwatchContainer>
      <Swatch src={coat1} alt="Swatch 1" />
      <Swatch src={coat2} alt="Swatch 2" />
      <Swatch src={coat3} alt="Swatch 3" />
      <Swatch src={coat4} alt="Swatch 3" />
    </SwatchContainer>
  );
}
