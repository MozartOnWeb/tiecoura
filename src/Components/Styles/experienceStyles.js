import styled, { css } from "styled-components";
import { down, only } from "styled-breakpoints";
import { motion } from 'framer-motion';

export const ExperienceWrapper = styled(motion.div)`
  width: 80%;
  padding: 50px 10px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 50px;
  ${only("md")} {
    padding: 30px;
    flex-direction: column-reverse;
    height: 60vh;
    position: relative;
  }
`;

export const ExperienceImage = styled(motion.div)`
  width: 350px;
  height: 500px;
  cursor: pointer;
  ${only("md")} {
    width: 100%;
    height: 200px;
  }
  ${down("xs")} {
    display: none;
  }
  img,
  video {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExperienceInfo = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 500px;
  ${only("md")} {
    justify-content: space-around;
    height: 250px;
    width: 100%;
    a {
      position: absolute;
      bottom: 5%;
    }
  }
  ${down("xs")} {
    width: 80%;
    a {
      margin-top: 40px;
    }
  }

  ${down("s")} {
    a {
      font-size: 14px;
    }
  }

  p {
    font-family: ${(props) => props.theme.mainFont};
    margin-top: 40px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    word-break: break-all;
    ${only("md")} {
      font-size: 14px;
      text-align: center;
      margin-bottom: 40px;
    }
    ${down("xs")} {
      font-size: 11px;
      text-align: center;
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    ${down("s")} {
      font-size: 10px;
      text-align: left;
      margin-bottom: 30px;
      word-break: break-all;
    }
  }
`;

export const ExperienceStats = styled(motion.div)`
  position: relative;
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${only("md")} {
    width: 100%;
  }
  ${down("xs")} {
    width: 250px;
    height: 280px;
  }
  ${down("s")} {
    width: 230px;
    height: 280px;
  }
  img,
  video {
    cursor: pointer;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExperienceBoxes = styled(motion.div)`
  width: 370px;
  height: 170px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${down("xs")} {
    flex-direction: column;
    width: 250px;
    height: 280px;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    ${down("xs")} {
      display: none;
    }
  }
`;

export const ExperienceBox = styled(motion.div)`
  width: 90px;
  height: 90px;
  padding: 15px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
  z-index: 3;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  ${(props) =>
    props.black &&
    css`
      background-color: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
    `}
  ${down("xs")} {
    width: 80px;
    height: 80px;
    padding: 15px;
  }
  .headline {
    color: ${(props) => props.theme.red};
    font-family: ${(props) => props.theme.mainFont};
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    ${down("xs")} {
      font-size: 16px;
    }
    ${down("s")} {
      font-size: 14px;
    }
  }
  .subline {
    font-family: ${(props) => props.theme.mainFont};
    font-size: 13px;
    margin-top: 0px;
    text-align: center;
    text-transform: uppercase;
    ${down("xs")} {
      font-size: 12px;
    }
  }
`;
