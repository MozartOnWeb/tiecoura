import styled from "styled-components";
import {only, down} from 'styled-breakpoints'
export const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 53%;
  left: 50%;
  width: 85%;
  transform: translate(-50%, -50%);
  ${only("md")} {
    flex-direction: column;
    top: 50%;
    height: 80vh;
  }
  ${down("xs")} {
    flex-direction: column;
    top: 50%;
    height: 75vh;
  }
`;

export const HeroInfo = styled.div`
  font-family: ${(props) => props.theme.mainFont};
  position: relative;
  margin-left: 11%;
  ${down("md")} {
    margin-left: 0%;
  }
  ${down("xs")} {
    margin-top: 5%;
  }
  svg {
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 164%;
    height: 164%;
    ${only("md")} {
      width: 150%;
      height: 150%;
    }
    ${down("xs")} {
      width: 155%;
      height: 155%;
    }
  }
  .outline {
    -webkit-text-stroke: 1px ${(props) => props.theme.white};
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 800;
    ${only("md")} {
      font-size: 35px;
    }
    ${down("xs")} {
      font-size: 23px;
    }
  }
  h1 {
    font-size: 75px;
    color: ${(props) => props.theme.red};
    text-transform: uppercase;
    font-weight: 800;
    ${only("md")} {
      font-size: 60px;
    }
    ${down("xs")} {
      font-size: 35px;
    }
  }
`;

export const HeroImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-areas: "squared1 rectangle" "squared2 rectangle";
  ${down("xs")} {
    margin-bottom: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .squared1 {
    grid-area: squared1;
    width: 180px;
    height: 185px;
    cursor: pointer;
    ${only("md")} {
      width: 220px;
      height: 190px;
    }
    ${down("xs")} {
      width: 100%;
      height: 250px;
    }
    ${down("sm")} {
      width: 100%;
      height: 210px;
    }
    img,
    video {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .squared2 {
    grid-area: squared2;
    width: 180px;
    height: 185px;
    cursor: pointer;
    ${only("md")} {
      width: 220px;
      height: 190px;
    }
    ${down("xs")} {
      width: 100%;
      height: 250px;
      display: none;
    }
    img,
    video {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .rectangle {
    grid-area: rectangle;
    width: 180px;
    height: 390px;
    cursor: pointer;
    ${only("md")} {
      width: 240px;
      height: 395px;
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
  }
`;

