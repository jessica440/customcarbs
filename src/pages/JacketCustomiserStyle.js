import styled from "styled-components";
import Pointer from "../images/pointer2.svg";

export const SVGWrapper = styled.div`
  .clickable-panel {
    cursor: url(${Pointer}) 0 0, pointer;
  }
`;

export const PriceSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.2rem;
`;

export const Wrapper = styled.div`
  /* padding: 2rem; */
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: hidden;
  padding-bottom: 6rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px;
  position: relative;
  margin-top: -10px;

  /* margin-bottom: 2rem; */
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
   position: sticky;
   bottom: 0;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  flex; 1;
  gap: 2rem;
  height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MainScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  box-sizing: border-box;
`;

// export const StaticScreen = styled.div`
//   height: 100vh;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
// `;

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

export const MirrorOption = styled.label`
  display: block;
  background: var(--green);
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  /* border: 2px solid var(--purple); */
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: url(${Pointer}) 0 0, pointer;

  input {
    margin-right: 0.5rem;
    transform: scale(1.2);
  }
`;

export const ArmOption = styled.div`
  background: ${(props) => (props.selected ? "white" : "#e0e0e0")};
  border: 1px solid #999;
  padding: 1rem;
  cursor: url(${Pointer}) 0 0, pointer;
  margin-bottom: 1rem;
  transition: background 0.3s;

  &:hover {
    background: ${(props) => (props.selected ? "white" : "#d0d0d0")};
  }
`;

export const ArmImage = styled.img`
  width: 50px;
`;

export const SelectedLabel = styled.span`
  color: limegreen;
  font-weight: bold;
  text-transform: lowercase;
`;

export const PriceLabel = styled.span`
  font-weight: bold;
  /* font-size: 1rem; */
`;

export const JacketDisplay = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    margin-bottom: 1rem;
  }

  .clickable-panel {
    cursor: url(${Pointer}) 0 0, pointer;
    &:hover {
      fill: var(--purple);
    }
  }
`;

// export const JacketSVGPlaceholder = styled.div`
//   width: 320px;
//   height: 320px;
//   background: #eee;
//   border: 2px dashed #aaa;
// `;

export const FabricPicker = styled.div`
  flex: 1;
  max-width: 180px;
  cursor: url(${Pointer}) 0 0, pointer;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const CategoryTitle = styled.h4`
  background: black;
  color: white;
  padding: 0.5rem;
  margin-top: -20px;
  text-transform: lowercase;
  font-size: 1rem;
`;

export const ExtrasLabel = styled.div`
  background: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  padding: 0.5rem;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  cursor: url(${Pointer}) 0 0, pointer;
  border: 1px solid black;
  flex: 1;
  height: 15px;

  &:hover {
    background: ${(props) => (props.active ? "black" : "#f0f0f0")};
  }
`;

export const Swatches = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  width: 100%;
`;

export const Swatch = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  cursor: url(${Pointer}) 0 0, pointer;
  &:hover {
    border: 4px solid var(--purple);
  }
`;

export const SwatchScrollArea = styled.div`
  max-height: 60vh;
  overflow-y: auto;
  margin-top: 1rem;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    justify-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem 6rem;
    max-height: 400px;
    overflow-y: scroll;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  @media (min-width: 769px) {
    max-height: none;
    overflow: visible;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* optional scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }
`;

export const Summary = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--green);
  width: 100%;
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  z-index: 999;
  box-sizing: border-box;
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
  font-size: 1.5rem;
  font-weight: bold;
  color: #360048;
  padding: 0.5rem;
`;

export const MobileContainer = styled.div`
  width: 100%;
  padding: 1rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
