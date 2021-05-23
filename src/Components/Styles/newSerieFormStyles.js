import styled from "styled-components";
import { only } from "styled-breakpoints";

export const SerieForm = styled.div`
  width: 300px;
  ${only("md")} {
    width: 200px;
  }
  input {
    margin-bottom: 10px;
    margin-top: 20px;
    font-family: ${(props) => props.theme.mainFont};
    color: ${(props) => props.theme.black};
    font-size: 14px;
    padding: 10px 10px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.red};
    background: rgba(0, 0, 0, 0.05);
    width: 100%;
    position: relative;
    outline: none;
    ${only("md")} {
      font-size: 12px;
    }
  }

  input[type="file"] {
    font-size: 14px;
    ${only("md")} {
      font-size: 10px;
    }
  }
  button {
    margin-top: 10px;
    font-size: 12px;
  }
`;
