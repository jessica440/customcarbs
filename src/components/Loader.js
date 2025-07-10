import styled from "styled-components";
import loadingGif from "../images/blink.gif";

const LoaderWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--background);
  font-family: "Arial", sans-serif;
`;

const Loader = () => (
  <LoaderWrapper>
    <img src={loadingGif} alt="Loading..." style={{ width: "80px" }} />
    <p>loading...</p>
  </LoaderWrapper>
);

export default Loader;
