import React from "react";
import styled from "styled-components";
import bluePink from "../images/furs/blue-pink.png"; // Add your actual swatch image paths
import carnival from "../images/furs/carnival.png";
import cow from "../images/furs/cow.png";

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
      <Swatch src={bluePink} alt="Swatch 1" />
      <Swatch src={carnival} alt="Swatch 2" />
      <Swatch src={cow} alt="Swatch 3" />
    </SwatchContainer>
  );
}
