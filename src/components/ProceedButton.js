import styled from "styled-components";
import { Link } from "react-router-dom";
import Pointer from "../images/pointer2.svg";

const ProceedButton = styled(Link)`
  display: inline-block;
  /* background-color: var(--button); */
  background: linear-gradient(
    135deg,
    /* #eb3a90, */ #f097bf,
    /* #f2bd6d, */ #fcf35e,
    #bffa8d,
    #8ad2fb
  );
  border: 1px solid black;
  width: 60px;
  /* box-shadow: 3px 3px black; */
  animation: gradient 5s infinite linear;
  background-size: 300% 300%;
  transition: transform 0.2s ease;
  color: black;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  margin-top: 2rem;
  border-radius: 50px;
  /* cursor: url(${Pointer}) 0 0, pointer; */
  text-decoration: none;
  &:hover {
    background: var(--purple);
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default ProceedButton;
