import React from "react";

import {
  PhotoImageWrapper,
  PhotoWrapper,
  AboutHeader,
  AboutContent,
  Line,
  AboutInfo,
  AboutImage,
} from "./Styles/photoStyles";

import { image1 } from "../data";

const About = () => {
  return (
    <>
      <PhotoWrapper>
        <PhotoImageWrapper>
          <AboutHeader>Tiecoura n'daou</AboutHeader>
          <AboutContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            assumenda dignissimos! Exercitationem nesciunt officiis blanditiis
            nobis. Praesentium voluptatibus nobis expedita.
          </AboutContent>
          <Line />
          <AboutInfo>
            <AboutImage>
              <img src={image1} alt="" />
            </AboutImage>
          </AboutInfo>
          <Line />
        </PhotoImageWrapper>
      </PhotoWrapper>
    </>
  );
};

export default About;
