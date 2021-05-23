// Import Styled Components
import styled from "styled-components";

export const SerieWrapper = styled.div`
  width: 140px;
  height: 140px;
  display: inline-block;
  margin: 0px 35px 0px 0px;

  h3 {
    font-family: ${(props) => props.theme.linkFont};
  }

  a {
    text-decoration: none;
    img {
      border-radius: 15px;
      width: 100%;
      height: 80%;
      object-fit: cover;
    }
    p {
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  img {
    margin-top: 15px;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SerieContainer = styled.div`
  width: 90vw;
  margin: 50px auto;
`;

export const SerieWelcome = styled.div`
  width: 90vw;
  margin: 50px auto;
`;
