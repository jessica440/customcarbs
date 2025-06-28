import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomJacketCard from "../components/CustomJacketCard";
import SwatchSelector from "../components/SwatchSelector";
import ProceedButton from "../components/ProceedButton";
import { steps } from "../functions/steps";
import {
  PageContainer,
  Heading,
  Paragraph,
  CarouselContainer,
  Arrow,
  StepContent,
  Content,
  StepImg,
  StepText,
  ToastWrapper,
} from "./CustomOrdersStyle";

const CustomOrders = () => {
  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };
  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [pop, setPop] = useState(false);
  const [textKey, setTextKey] = useState(0);

  useEffect(() => {
    setPop(true);
    setTextKey((prev) => prev + 1);
    const timeout = setTimeout(() => setPop(false), 300);
    return () => clearTimeout(timeout);
  }, [currentStep]);

  useEffect(() => {
    setPop(true);
    const timeout = setTimeout(() => setPop(false), 300);
    return () => clearTimeout(timeout);
  }, [currentStep]);

  return (
    <PageContainer>
      <CustomJacketCard />
      <Content>
        <Heading>how it works</Heading>
        <Paragraph>
          Custom coats for bodies. All bodies. Just send your measurements and
          pick your favourite swatches!
          <CarouselContainer>
            <Arrow onClick={handlePrev}>&larr;</Arrow>

            <StepContent>
              <ToastWrapper className={pop ? "pop" : ""}>
                <img
                  src={steps[currentStep].image}
                  alt={`Step ${currentStep + 1}`}
                />
              </ToastWrapper>

              <StepText key={textKey}>{steps[currentStep].text}</StepText>
            </StepContent>

            <Arrow onClick={handleNext}>&rarr;</Arrow>
          </CarouselContainer>
        </Paragraph>
        <SwatchSelector />
        <ProceedButton to="/customise">proceed</ProceedButton>
      </Content>
    </PageContainer>
  );
};

export default CustomOrders;
