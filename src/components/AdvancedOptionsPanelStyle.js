import styled from "styled-components";
import Pointer from "../images/pointer2.svg";

export const PanelWrapper = styled.div`
  background: white;
  padding: 1rem;
  border: 2px solid var(--grey);
  max-width: 250px;
`;

export const SectionTitle = styled.h3`
  background: black;
  color: white;
  font-size: 1rem;
  padding: 0.3rem 0.8rem;
  text-transform: uppercase;
  margin: 0 0 1rem;
  display: inline-block;
  cursor: url(${Pointer}) 0 0, pointer;
`;

export const ToggleRow = styled.div`
  margin-bottom: 1rem;
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: bold;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleSlider = styled.span`
  width: 40px;
  height: 24px;
  background: ${(props) => (props.$checked ? "#a280f0" : "#ddd")};
  border-radius: 50px;
  position: relative;
  transition: background 0.3s;
  cursor: url(${Pointer}) 0 0, pointer;

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: ${(props) => (props.$checked ? "20px" : "3px")};
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export const TabButtons = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const TabButton = styled.button`
  flex: 1;
  padding: 0.4rem;
  background: ${(props) => (props.$active ? "black" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: 1px solid black;
  font-weight: bold;
  cursor: url(${Pointer}) 0 0, pointer;
`;

export const OptionCard = styled.div`
  border: 2px solid ${(props) => (props.$selected ? "var(--purple)" : "#ccc")};
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => (props.$selected ? "#e9e2ff" : "#f7f7f7")};
  cursor: url(${Pointer}) 0 0, pointer;
  transition: 0.2s;
`;

export const OptionText = styled.div`
  font-size: 0.9rem;
  .selected {
    display: block;
    margin-top: 0.3rem;
    font-weight: bold;
    color: var(--purple);
  }
  .price {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.8rem;
    color: #333;
  }
`;

export const ExtrasList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ExtraItem = styled.label`
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }
`;
