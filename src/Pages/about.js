import React, { useState, useEffect } from "react";

// Import firestore
import { fs } from "../firebase/config";

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

    const [images, setImages] = useState([]);

  useEffect(() => {
    fs.collection("Profile").onSnapshot((snapshot) => {
      const tempImages = [];
      snapshot.forEach((doc) => {
        tempImages.push({ ...doc.data(), id: doc.id });
      });
      setImages(tempImages);
    });
  }, []);  
  
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
              {images.slice(0, 1).map((image) => (
                <img src={image.url} alt="" />
              ))}
            </AboutImage>
          </AboutInfo>
          <Line />
        </PhotoImageWrapper>
      </PhotoWrapper>
    </>
  );
};

export default About;
