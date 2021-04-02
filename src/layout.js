import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";

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
    ${down("md")} {
      width: 25px;
    }
  }

  ${(props) =>
    props.bottom &&
    css`
      left: 50%;
      bottom: 0%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.top &&
    css`
      left: 49%;
      top: 3%;
      transform: translate(-50%, -50%);
      transform: rotate(180deg);
      ${down('md')} {
        left: 49%;
      }
      ${down('sm')} {
        left: 47%;
      }
    `}

  ${(props) =>
    props.red &&
    css`
      svg path {
        fill: ${(props) => props.theme.red};
      }
    `}
`;

export const Button = styled(Link)`
  color: ${(props) => props.theme.red};
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  svg {
    position: absolute;
    top: -55%;
    left: 110%;
    width: 15px;
    transform: rotate(-90deg);
    path {
      fill: ${(props) => props.theme.red};
    }
  }

  ${(props) =>
    props.center &&
    css`
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.medium &&
    css`
      font-size: 22px;
      letter-spacing: 1.5px;
      font-weight: bold;
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.red};
  }
`;

export const Submit = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
  color: ${(props) => props.theme.red};
  font-family: ${(props) => props.theme.linkFont};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 14px;
  text-decoration: none;
  position: relative;
  svg {
    position: absolute;
    top: -55%;
    left: 110%;
    width: 15px;
    transform: rotate(-90deg);
    path {
      fill: ${(props) => props.theme.red};
    }
  }

  ${(props) =>
    props.center &&
    css`
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.medium &&
    css`
      font-size: 22px;
      letter-spacing: 1.5px;
      font-weight: bold;
    `}

  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0px;
    border-width: 0 0 1px;
    border-style: solid;
    border-color: ${(props) => props.theme.red};
  }
`;
