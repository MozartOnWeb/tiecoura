import { down, only } from "styled-breakpoints";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  padding: 50px 10px;
  position: fixed;
  display: block;
  left: 0;
  top: 0;
  background-color: ${(props) => props.theme.red};
  z-index: 100;
  ${down("md")} {
    padding: 50px 0px;
    width: 100%;
  }
  .bg {
    z-index: -50;
    display: block;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.black};
    left: 0;
    top: 0;
  }
  .menu-close {
    position: absolute;
    right: 115px;
    top: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg1 {
      width: 25px;
      cursor: pointer;
      path {
        fill: ${(props) => props.theme.white};
      }
      ${down("xs")} {
        width: 18px;
      }
    }
    .svg2 {
      #Ellipse_2 {
        stroke: ${(props) => props.theme.white};
      }
      position: absolute;
      width: 70px;
      cursor: pointer;
      ${down("xs")} {
        width: 60px;
      }
    }
      ${down("md")} {
        margin-right: -50px;
      }
      ${down("sm")} {
        margin-right: -60px;
      }
  }
`;

export const MenuWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  position: relative;
  z-index: 100;
  ${only("md")} {
    margin: 210px auto;
    height: 70%;
  }

  ${down("sm")} {
    margin: 90px auto;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${down("s")} {
    margin: 90px auto;
    height: 50%;
  }
`;

export const MenuLinks = styled.div`
  height: 450px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 90px auto;
  ${down("md")} {
    margin: 150px auto;
  }

  ${down("sm")} {
    height: 300px;
    width: 250px;
  }

  a {
    ${down("sm")} {
      font-size: 18px;
      margin-top: 0px;
    }
    ${down("s")} {
      font-size: 16px;
    }
    .menu-link-arrow {
      display: none;
      margin-top: 15px;
      width: 25px;
      ${down("sm")} {
        margin-top: 5px;
      }
      ${down("s")} {
        margin-top: 0px;
      }
    }

    &:hover {
      .menu-link-arrow {
        display: block;
      }
    }
  }
`;

export const MenuImage = styled.div``;

export const MenuSocials = styled.div`
  position: absolute;
  bottom: 140px;
  left: 100px;
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${down("sm")} {
    left: 60px;
  }
  ${down("s")} {
    left: 35px;
  }
  a {
    &:hover {
      -webkit-text-stroke: 0.4px ${(props) => props.theme.white};
      -webkit-text-fill-color: transparent;
    }
    &::after {
      border-color: ${(props) => props.theme.white};
    }
  }
`;
