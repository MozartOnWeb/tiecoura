import React from "react";
import {image2} from '../data'

import {
  PhotoImageWrapper,
  PhotoWrapper,
} from "./Styles/photoStyles";

const About = () => {
  return (
    <>
      <PhotoWrapper>
        <PhotoImageWrapper>
          <img src={image2} alt=""/>
        </PhotoImageWrapper>
      </PhotoWrapper>
    </>
  );
};

export default About;
