import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1140px;
  margin: 25px auto;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
`;

export const Arrow = styled.div`
  position: absolute;

  svg {
    width: 30px;
  }

  ${(props) =>
    props.bottom &&
    css`
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.red &&
    css`
      svg path {
        fill: ${props => props.theme.red};
      }
    `}
`;
