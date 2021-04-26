import styled from "styled-components";
import { down } from "styled-breakpoints";

export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100vw;
  ${down("xs")} {
    height: 90px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    z-index: 99;
    position: relative;
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
      margin-right: 50px;
    }
    ${down("sm")} {
      margin-right: 30px;
    }
  }
`;

export const Logo = styled.h2`
  cursor: pointer;
  font-family: ${(props) => props.theme.mainFont};
  font-weight: 400;
  text-transform: uppercase;
  color: ${(props) => props.theme.red};
  ${down("md")} {
    font-size: 20px;
    margin-left: 30px;
  }
  ${down("sm")} {
    font-size: 20px;
    margin-left: 20px;
  }
`;
