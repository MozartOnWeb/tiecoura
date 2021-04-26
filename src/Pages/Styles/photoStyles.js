import { motion } from "framer-motion";
import styled from "styled-components";
import { down } from "styled-breakpoints";

export const PhotoWrapper = styled(motion.div)`
  width: 80%;
  height: 100%;
  margin: 40px auto;
  z-index: 500;
  overflow-x: hidden;
`;

export const PhotoImageWrapper = styled(motion.div)`
  .my-masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    margin-left: -30px;
    width: auto;
    height: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px;
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    img, video {
      cursor: pointer;
      overflow: hidden;
      border-radius: 15px;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const AboutHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.linkFont};
  font-size: 16px;
  color: ${(props) => props.theme.white};
  letter-spacing: 1.2px;
  ${down("xs")} {
    font-size: 14px;
  }
`;

export const AboutContent = styled.p`
  text-align: center;
  font-family: ${(props) => props.theme.mainFont};
  font-size: 14px;
  color: ${(props) => props.theme.white};
  width: 550px;
  margin: 20px auto;
  line-height: 22px;
  ${down("xs")} {
    width: 250px;
    font-size: 10px;
  }
`;

export const Line = styled.hr`
  border-color: ${(props) => props.theme.red};
`;

export const AboutInfo = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const AboutImage = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 15px;
  img, video {
    border-radius: 15px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
