import styled from "styled-components";


export const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .svg1 {
      path {
        fill: ${(props) => props.theme.white};
      }
      width: 25px;
      cursor: pointer;
    }
    .svg2 {
      #Ellipse_2 {
        stroke: ${(props) => props.theme.white};
      }
      position: absolute;
      width: 70px;
      cursor: pointer;
    }
  }
`;

export const Logo = styled.h2`
  font-family: ${(props) => props.theme.mainFont};
  font-weight: 400;
  text-transform: uppercase;
  color: ${props => props.theme.red};
`;