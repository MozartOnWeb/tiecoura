import React, { useState, useEffect } from "react";

// Import firestore
import { fs } from "../firebase/config";

// Import Modal
import Modal2 from "../Components/Modal2";

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
  const [profile, setProfile] = useState([]);
  const [desc, setDesc] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;

    fs.collection("Profile")
      .doc("01")
      .get()
      .then((doc) => {
        if (doc.exists && mounted) {
          setProfile(doc.data().url);
        }
      });

    fs.collection("Descriptions")
    .doc("About-Desc")
    .get()
    .then((doc) => {
      if (doc.exists && mounted) {
        setDesc(doc.data().desc);
      }
    });

    return () => {
      mounted = false;
    };

  }, []);

  

  return (
    <>
      <PhotoWrapper>
        <PhotoImageWrapper>
          <AboutHeader>Tiecoura n'daou</AboutHeader>
          <AboutContent>{desc}</AboutContent>
          <Line />
          <AboutInfo>
            <AboutImage onClick={() => setSelected(profile)}>
              <img src={profile} alt="" />
            </AboutImage>
          </AboutInfo>
          <Line />
        </PhotoImageWrapper>
      </PhotoWrapper>
      {selected && <Modal2 selected={selected} setSelected={setSelected} />}
    </>
  );
};

export default About;
