import React, { useState, useEffect } from "react";
import CustomJacketCard from "../components/CustomJacketCard";
import SwatchSelector from "../components/SwatchSelector";
import ProceedButton from "../components/ProceedButton";
import { steps } from "../functions/steps";
import Banner from "../images/banner.png";
import Prev from "../images/prev.svg";
import Next from "../images/next.svg";
import {
  PageContainer,
  Heading,
  Paragraph,
  CarouselContainer,
  StepContent,
  Content,
  StepText,
  ToastWrapper,
  Img,
  ImgWrapper,
  Layout,
  ArrowLeft,
  ArrowRight,
  MobileArrowWrapper,
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
      <Layout>
        <ImgWrapper>
          <CustomJacketCard />
        </ImgWrapper>

        <Content>
          <Img src={Banner} alt="Custom Orders" />
          <Heading>how it works</Heading>
          <Paragraph>
            Custom coats for bodies. All bodies. Just send your measurements and
            pick your favourite swatches!
          </Paragraph>

          <CarouselContainer>
            <ArrowLeft className="desktop" onClick={handlePrev} src={Prev} />

            <StepContent>
              <ToastWrapper className={pop ? "pop" : ""}>
                <img
                  src={steps[currentStep].image}
                  alt={`Step ${currentStep + 1}`}
                />
              </ToastWrapper>
              <StepText key={textKey}>{steps[currentStep].text}</StepText>
            </StepContent>

            <ArrowRight className="desktop" onClick={handleNext} src={Next} />

            <MobileArrowWrapper>
              <ArrowLeft onClick={handlePrev} src={Prev} />
              <ArrowRight onClick={handleNext} src={Next} />
            </MobileArrowWrapper>
          </CarouselContainer>

          <SwatchSelector />
          <ProceedButton to="/customise">proceed</ProceedButton>
        </Content>
      </Layout>
    </PageContainer>
  );
};

export default CustomOrders;
