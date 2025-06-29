import styled from "styled-components";
import { Link } from "react-router-dom";
import Pointer from "../images/pointer2.svg";

export const PickMe = styled.button`
  background: ${({ disabled }) => (disabled ? "#ddd" : "#513b56")};
  color: ${({ disabled }) => (disabled ? "#888" : "white")};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;
  transition: background 0.2s;

  &:hover::after {
    content: ${({ disabled }) =>
      disabled ? '"❌ Fill in all panels first!"' : '""'};
    display: ${({ disabled }) => (disabled ? "block" : "none")};
    position: absolute;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
    background: #fff4f4;
    border: 1px solid #ff4d4d;
    padding: 0.4rem 0.7rem;
    border-radius: 6px;
    font-size: 0.75rem;
    color: #b30000;
    white-space: nowrap;
    z-index: 5;
  }
`;
