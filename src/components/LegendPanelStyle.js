import styled from "styled-components";

export const LegendWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid #ddd;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 160px;
`;

export const SwatchDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ swatch }) =>
    swatch ? `url(${swatch}) center/cover no-repeat` : "#ccc"};
  border: 1px solid #999;
`;

export const LabelText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelTitle = styled.span`
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: lowercase;
`;

export const SwatchName = styled.span`
  font-style: italic;
  font-size: 0.8rem;
  color: #666;
`;
