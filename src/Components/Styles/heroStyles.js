import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  img {
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
`;

export const HeroInfo = styled.div`
  font-family: ${(props) => props.theme.mainFont};
  position: relative;
  margin-left: 11%;
  svg {
    position: absolute;
    top: 49%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 164%;
    height: 164%;
  }
  .outline {
    -webkit-text-stroke: 1px ${(props) => props.theme.white};
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 800;
  }
  h1 {
    font-size: 75px;
    color: ${(props) => props.theme.red};
    text-transform: uppercase;
    font-weight: 800;
  }
`;

export const HeroImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-areas: "squared1 rectangle" "squared2 rectangle";

  .squared1 {
    grid-area: squared1;
    width: 180px;
    height: 185px;
    cursor: pointer;
    img {
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
    img {
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
    img {
      border-radius: 15px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;


