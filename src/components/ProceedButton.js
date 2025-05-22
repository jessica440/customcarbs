import styled from "styled-components";
import { Link } from "react-router-dom";
import Pointer from "../images/pointer2.svg";

const ProceedButton = styled(Link)`
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
  &:hover {
    background-color: var(--purple);
  }
`;

export default ProceedButton;
