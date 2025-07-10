import { useState, cloneElement } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.$loaded ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 1;
`;

const LoadingWrapper = ({ children, spinner = "/images/loading.gif" }) => {
  const [loaded, setLoaded] = useState(false);

  const imageWithHandler = cloneElement(children, {
    onLoad: () => setLoaded(true),
    style: {
      ...(children.props.style || {}),
      opacity: loaded ? 1 : 0,
      transition: "opacity 0.3s ease-in-out",
      display: "block",
    },
  });

  return (
    <Wrapper>
      {imageWithHandler}
      <LoadingOverlay $loaded={loaded}>
        <img src={spinner} alt="Loading..." style={{ width: "40px" }} />
      </LoadingOverlay>
    </Wrapper>
  );
};

export default LoadingWrapper;
