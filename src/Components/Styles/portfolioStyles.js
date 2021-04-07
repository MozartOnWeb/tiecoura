import styled from "styled-components";
import {only, down} from 'styled-breakpoints'

export const PortfolioContainer = styled.div`

.portfolio-button {
  ${down("xs")} {
  left: 35%;
  }
}

`;

export const PortfolioWrapper = styled.div`
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
  font-family: ${(props) => props.theme.linkFont};
  color: ${(props) => props.theme.black};
  margin-bottom: 50px;
  .active {
    -webkit-text-stroke: 1px ${(props) => props.theme.red};
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
`;

export const PortfolioInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  ${down("xs")} {
    width: 100%;
  }
`;

export const PortfolioHeadline = styled.h1`
  font-size: 32px;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;
  ${only("md")} {
    font-size: 28px;
  }
  ${down("xs")} {
    font-size: 20px;
  }
`;

export const PortfolioLinks = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${only("md")} {
    a {
      font-size: 20px;
    }
  }
  ${down("xs")} {
    justify-content: space-between;
    width: 80%;
    a {
      font-size: 13px;
    }
  }
  ${down("s")} {
    width: 100%;
    a {
      font-size: 13px;
    }
  }
`;

export const PortfolioImages = styled.div`
  margin-top: 20px;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  ${down("xs")} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  .item1 {
    grid-column: 1 / 3;
    width: 100%;
  }

  .item2 {
    grid-column: 3 / 5;
    width: 100%;
  }
`;

export const PortfolioImage = styled.div`
  width: 250px;
  height: 250px;
  ${only("md")} {
    width: 130px;
    height: 180px;
  }
  ${down("xs")} {
    width: 100%;
    height: 180px;
  }
  img,
  video {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
