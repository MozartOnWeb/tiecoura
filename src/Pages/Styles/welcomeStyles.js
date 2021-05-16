// Import Styled-components
import styled from "styled-components";

// Import Framer Motion
import { motion } from "framer-motion";

// Import Styled BraekPoint
import { down } from "styled-breakpoints";

export const WelcomeWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  /* Enter Button Styles */
  a {
    position: absolute;
    bottom: 10%;
    left: 20%;
    transform: translateX(-50%);
    z-index: 99;
    svg {
      width: 30px;
      margin-top: 15px;
      &:hover {
        path {
          fill: none;
          stroke: ${(props) => props.theme.red};
          stroke-width: 2px;
        }
      }
    }
  }
`;

export const WelcomeGradient = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 6;
`;

export const WelcomeImage = styled.div`
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  right: 0;
  /* Border */
  border-top: 3px solid #ca1c1e;
  display: inline-block;
  margin: 0px auto;
  padding: 0px;
  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Logo = styled(motion.h2)`
  z-index: 99;
  position: absolute;
  left: 5%;
  top: 5%;
  cursor: pointer;
  font-family: ${(props) => props.theme.mainFont};
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme.red};
  /* ${down("md")} {
    font-size: 20px;
    margin-left: 30px;
  }
  ${down("sm")} {
    font-size: 20px;
    margin-left: 20px;
  } */
`;

export const WelcomeDesc = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  width: 400px;
  z-index: 99;
  color: ${(props) => props.theme.white};
  h3 {
    text-transform: uppercase;
    font-family: ${(props) => props.theme.linkFont};
    letter-spacing: 1.5px;
  }
  p {
    font-family: ${(props) => props.theme.mainFont};
    font-size: 14px;
    line-height: 18px;
  }
`;
