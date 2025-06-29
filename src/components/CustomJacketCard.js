import React from "react";
import styled from "styled-components";
import jacketImage from "../images/custom.jpg";
import { Link } from "react-router-dom";
import Pointer from "../images/pointer2.svg";
import Sparkle from "../images/sparkle.gif";

const JacketWrapper = styled.div`
  position: relative;
  border: 8px solid var(--green);
  padding: 0rem;
  line-height: 0;
  display: inline-block;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  box-shadow: 5px 5px black;
`;

const SparkleGif = styled.img`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 65px;
  z-index: 2;
`;

const JacketImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
`;

const CustomiseLabel = styled(Link)`
  position: absolute;
  right: -6rem;
  top: 65%;
  transform: translateY(-50%) rotate(-90deg);
  background: var(--purple);
  color: var(--green);
  font-weight: 600;
  padding: 1.5rem;
  font-size: 2rem;
  border-radius: 2px;
  border: 1px solid black;
  text-decoration: none;
  cursor: url(${Pointer}) 0 0, pointer;
  transition: background 0.3s;
  &:hover {
    background: var(--green);
    color: var(--purple);
  }
`;

export default function CustomJacketCard() {
  return (
    <JacketWrapper>
      <SparkleGif src={Sparkle} alt="Sparkle" />
      <JacketImg src={jacketImage} alt="Custom Jacket" />
      <CustomiseLabel to="/customise">customise</CustomiseLabel>
    </JacketWrapper>
  );
}
