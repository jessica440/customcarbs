import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backIcon from "../images/back.svg"; // Add your actual back icon path

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
  cursor: pointer;
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
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BackButton onClick={() => navigate(-1)}>
        {/* <img src={backIcon} alt="Back" /> */}
        Back
      </BackButton>
      <h1>Jacket Customiser</h1>
      <p>Start customising your jacket here!</p>
    </PageContainer>
  );
};

export default JacketCustomiser;
