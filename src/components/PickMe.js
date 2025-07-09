import styled from "styled-components";

export const PickMe = styled.button`
  background: ${({ disabled }) =>
    disabled
      ? "#ddd"
      : "linear-gradient(135deg, #f097bf, #f2bd6d, #fcf35e, #bffa8d, #8ad2fb)"};
  animation: ${({ disabled }) =>
    disabled ? "none" : "gradient 5s infinite linear"};
  background-size: ${({ disabled }) => (disabled ? "initial" : "300% 300%")};
  color: ${({ disabled }) => (disabled ? "#888" : "black")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  position: relative;
  transition: background 0.2s;
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
    padding: 0.2rem 0.3rem;
    border-radius: 6px;
    font-size: 0.5rem;
    color: #b30000;
    white-space: nowrap;
    z-index: 5;
  }
`;
