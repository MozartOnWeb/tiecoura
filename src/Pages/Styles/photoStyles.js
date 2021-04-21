import { motion } from "framer-motion";
import styled from "styled-components";

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
    position: relative;
    margin-bottom: 30px;
    img {
      border-radius: 15px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
