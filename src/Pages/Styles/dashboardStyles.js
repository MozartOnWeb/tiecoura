// Import Styled Components
import styled, {css} from "styled-components";

export const DashContainer = styled.div`
  width: 90vw;
  margin: 0px auto;
  hr {
    width: 90vw;
    margin: 20px auto;
    opacity: .7;
  }
`;
export const DashWrapper = styled.div`
  width: 90vw;
  height: auto;
  margin: 0px auto;
`;

export const DashHeadrer = styled.div`
  width: 90vw;
  margin: 40px auto;
`;

export const DashTitle = styled.h2`
  font-family: ${props => props.theme.linkFont};
  text-transform: uppercase;
  ${props => props.thin && css`
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 300;
  `}
`;

export const DashSubTitle = styled.p`
  font-family: ${props => props.theme.bodyFont};
`;

