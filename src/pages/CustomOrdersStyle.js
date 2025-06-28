import styled, { keyframes } from "styled-components";

const popAnimation = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const SlideIn = keyframes`
0% {
    opacity: 0;
    transform: translateX(40px);
}
100% {
    opacity: 1;
    transform: translateX(0);
}
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
`;

export const StepContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  width: 400px;
  min-height: 100px;
  justify-content: flex-start;
  padding: 0.5rem 0;
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
  word-wrap: keep-all;
  hyphens: none;
  animation: ${SlideIn} 0.7s ease;
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
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

export const PageContent = styled.div`
  max-width: 50%;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--paragraph);
`;

export const Content = styled.div`
  margin-top: 2rem;
`;

// export const CarouselContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: #f8f8f8;
//   padding: 1rem;
//   margin: 2rem 0;
//   border-radius: 12px;
//   gap: 1rem;
// `;

export const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

// export const StepContent = styled.div`
//   /* flex: 1; */
//   display: flex;
//   flex-direction: row;
//   /* text-align: center; */
//   align-items: center;
//   max-width: 500px;
//   margin: 0 auto;
//   text-align: left;
// `;

export const StepImg = styled.div`
  /* width: 100%; */
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

// export const StepText = styled.p`
//   font-weight: 500;
//   font-size: 1rem;
// `;
