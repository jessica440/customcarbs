import styled, { keyframes } from "styled-components";
import Pointer from "../images/pointer2.svg";

const popAnimation = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem;
  justify-content: space-between;
  background-color: var(--button-text);
  color: var(--button);
  font-family: "Poppins", sans-serif;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    height: auto;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const ImgWrapper = styled.div`
  flex-shrink: 0;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 250px;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--paragraph);
`;
export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;

    .desktop {
      display: none;
    }
  }
`;

export const MobileArrowWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
  }
`;

export const StepContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 400px;
  min-height: 125px;
  justify-content: flex-start;
  padding: 20px;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 5px 5px black;
  background: white;

  @media (max-width: 768px) {
    order: 1;
    max-width: 65%;
  }
`;

export const ToastWrapper = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &.pop img {
    animation: ${popAnimation} 0.3s ease-in-out;
  }
`;

export const StepText = styled.p`
  font-weight: 500;
  font-size: 1rem;
  flex: 1;
  line-height: 1.4;
  animation: ${slideIn} 0.7s ease;
`;

export const PageContent = styled.div`
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const Arrow = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  background: none;
  border: none;
  cursor: url(${Pointer}) 0 0, pointer;
  padding: 0.5rem;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    padding: 0.25rem;
  }
`;

export const StepImg = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 70px;
  margin-bottom: 1rem;
  border-radius: 8px;
  padding: 1rem;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const ArrowControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 1rem;
  }
`;

export const ArrowLeft = styled.img`
  width: 26px;
  cursor: url(${Pointer}) 0 0, pointer;
  transition: 0.2s ease;
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const ArrowRight = styled(ArrowLeft)`
  width: 25px;
  cursor: url(${Pointer}) 0 0, pointer;
  @media (max-width: 768px) {
    order: 3;
  }
`;
