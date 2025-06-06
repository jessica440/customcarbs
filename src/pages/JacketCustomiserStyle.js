import styled from "styled-components";
import Pointer from "../images/pointer2.svg";

export const SVGWrapper = styled.div`
  .clickable-panel {
    cursor: url(${Pointer}) 0 0, pointer;
  }
`;

export const Wrapper = styled.div`
  padding: 2rem;
  font-family: "Arial", sans-serif;
`;

export const Header = styled.header`
  text-align: left;
  margin-bottom: 2rem;
`;

export const Brand = styled.h1`
  font-size: 2rem;
  color: #ddd;
`;

export const Title = styled.h2`
  font-size: 3rem;
  text-transform: lowercase;
  font-weight: bold;
  color: pink;
`;

export const Subtitle = styled.p`
  max-width: 600px;
  line-height: 1.5;
  margin-top: 0.5rem;
`;

export const CustomiserLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const OptionsPanel = styled.div`
  flex: 1;
  max-width: 220px;
`;

export const OptionTitle = styled.h3`
  background: var(--green);
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  text-transform: lowercase;
`;

export const ArmsTab = styled.div`
  margin-top: 1rem;
`;

export const ArmOption = styled.div`
  background: ${({ selected }) => (selected ? "#fff" : "#ccc")};
  border: 1px solid #999;
  padding: 1rem;
  cursor: url(${Pointer}) 0 0, pointer;
  margin-bottom: 1rem;
`;

export const ArmImage = styled.img`
  width: 100%;
`;

export const SelectedLabel = styled.span`
  color: limegreen;
  font-weight: bold;
  text-transform: lowercase;
`;

export const PriceLabel = styled.span`
  font-weight: bold;
`;

export const JacketDisplay = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .clickable-panel {
    cursor: url(${Pointer}) 0 0, pointer;
    &:hover {
      fill: var(--purple);
    }
  }
`;

export const JacketSVGPlaceholder = styled.div`
  width: 320px;
  height: 320px;
  background: #eee;
  border: 2px dashed #aaa;
`;

export const FabricPicker = styled.div`
  flex: 1;
  max-width: 180px;
  cursor: url(${Pointer}) 0 0, pointer;
`;

export const CategoryTitle = styled.h4`
  background: black;
  color: white;
  padding: 0.5rem;
  margin: 0;
  text-transform: lowercase;
`;

export const ExtrasLabel = styled.div`
  background: black;
  color: white;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;

export const Swatches = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Swatch = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  cursor: url(${Pointer}) 0 0, pointer;
  &:hover {
    border: 4px solid var(--purple);
  }
`;

export const Summary = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Legend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: ${({ colour }) => colour};
    border-radius: 50%;
    display: inline-block;
  }
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #360048;
`;
