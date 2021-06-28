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

const About = () => {
  const [images, setImages] = useState([]);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fs.collection("Profile").onSnapshot((snapshot) => {
      const tempImages = [];
      snapshot.forEach((doc) => {
        tempImages.push({ ...doc.data(), id: doc.id });
      });
      setImages(tempImages);
    });
  }, []);

  fs.collection("Descriptions")
    .doc("About-Desc")
    .get()
    .then((doc) => {
      if (doc.exists) {
        setDesc(doc.data().desc);
      }
    });

  return (
    <>
      <PhotoWrapper>
        <PhotoImageWrapper>
          <AboutHeader>Tiecoura n'daou</AboutHeader>
          <AboutContent>{desc}</AboutContent>
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
