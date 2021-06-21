import React, { useEffect, useState } from "react";

// Import firestore
import { fs } from "../firebase/config";

// Import CountUp
import CountUp from "react-countup";

import {
  ExperienceBox,
  ExperienceBoxes,
  ExperienceImage,
  ExperienceInfo,
  ExperienceStats,
  ExperienceWrapper,
} from "./Styles/experienceStyles";

// Import Components
import { Arrow, Button } from "../layout";

const Experience = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [serieName, setSerieName] = useState([]);

  useEffect(() => {
    fs.collection("videos").onSnapshot((snap) => {
      const tempVideos = [];
      snap.forEach((doc) => {
        tempVideos.push({ ...doc.data(), id: doc.id });
      });
      setVideos(tempVideos);
    });

    fs.collection("OtherImages").onSnapshot((snapshot) => {
      const tempImages = [];
      snapshot.forEach((doc) => {
        tempImages.push({ ...doc.data(), id: doc.id });
      });
      setImages(tempImages);
    });
    
  }, []);

 fs.collection("series")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempNames = [];
        snapshot.forEach((doc) => {
          tempNames.push({ ...doc.data(), id: doc.id });
        });
        setSerieName(tempNames);
      });

  return (
    <div>
      {/* Experience Container */}
      <ExperienceWrapper>
        {/* Experience Big-Image */}
        <ExperienceImage>
          {videos.slice(1, 2).map((video) => (
            <video src={video.url} loop autoPlay muted />
          ))}
        </ExperienceImage>
        {/* Experience Big-Image */}

        {/* Experience Informations */}
        <ExperienceInfo>
          <p>
            Parce que vos plus belles histoires méritent les plus belles
            réalisations. Nous nous assurons de vous fournir un travail
            professionel à la hauteur de vos histoires.
          </p>

          {/* Experience Stats */}
          <ExperienceStats>
            {images.slice(2, 3).map((image) => (
              <img src={image.url} alt="" />
            ))}

            {/* Experience Boxes */}
            <ExperienceBoxes>
              {/* Experience SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="791.246"
                height="524.948"
                viewBox="0 0 791.246 524.948">
                <g
                  id="Groupe_5"
                  data-name="Groupe 5"
                  transform="translate(-190 -344.052)">
                  <g
                    id="Groupe_1"
                    data-name="Groupe 1"
                    transform="translate(80 345)">
                    <line
                      id="Ligne_2"
                      data-name="Ligne 2"
                      y2="35.338"
                      transform="translate(1.656)"
                      fill="none"
                      stroke="#e2293f"
                      strokeWidth="3"
                    />
                    <line
                      id="Ligne_3"
                      data-name="Ligne 3"
                      y2="38.651"
                      transform="translate(38.651 0.552) rotate(90)"
                      fill="none"
                      stroke="#e2293f"
                      strokeWidth="3"
                    />
                  </g>
                  <g
                    id="Groupe_3"
                    data-name="Groupe 3"
                    transform="translate(80 869) rotate(-90)">
                    <line
                      id="Ligne_2-2"
                      data-name="Ligne 2"
                      y2="35.338"
                      transform="translate(1.656 0)"
                      fill="none"
                      stroke="#e2293f"
                      stroke-width="3"
                    />
                    <line
                      id="Ligne_3-2"
                      data-name="Ligne 3"
                      y2="38.651"
                      transform="translate(38.651 0.552) rotate(90)"
                      fill="none"
                      stroke="#e2293f"
                      stroke-width="3"
                    />
                  </g>
                  <g
                    id="Groupe_4"
                    data-name="Groupe 4"
                    transform="translate(1080 867.344) rotate(180)">
                    <line
                      id="Ligne_2-3"
                      data-name="Ligne 2"
                      y2="35.338"
                      transform="translate(1.656 0)"
                      fill="none"
                      stroke="#e2293f"
                      stroke-width="3"
                    />
                    <line
                      id="Ligne_3-3"
                      data-name="Ligne 3"
                      y2="38.651"
                      transform="translate(38.651 0.552) rotate(90)"
                      fill="none"
                      stroke="#e2293f"
                      stroke-width="3"
                    />
                  </g>
                  <g
                    id="Groupe_2"
                    data-name="Groupe 2"
                    transform="translate(1080 345) rotate(90)">
                    <line
                      id="Ligne_2-4"
                      data-name="Ligne 2"
                      y2="35.338"
                      transform="translate(1.656 0)"
                      fill="none"
                      stroke="#e2293f"
                      stroke-width="3"
                    />
                    <line
                      id="Ligne_3-4"
                      data-name="Ligne 3"
                      y2="38.651"
                      transform="translate(38.651 0.552) rotate(90)"
                      fill="none"
                      stroke="#e2293f"
                      stroke-width="3"
                    />
                  </g>
                </g>
              </svg>
              {/* Experience SVG */}
              <ExperienceBox>
                <h3 className="headline">
                  <CountUp start={100} end={14} duration={5} /> Ans
                </h3>
                <p className="subline">d'Expérience</p>
              </ExperienceBox>
              <ExperienceBox>
                <h3 className="headline">
                  <CountUp start={0} end={243} duration={5} />
                </h3>
                <p className="subline">Clients</p>
              </ExperienceBox>
            </ExperienceBoxes>
            {/* Experience Boxes */}
          </ExperienceStats>
          {/* Experience Stats */}

          {serieName.slice(0, 1).map((link) => (
            <Button arrow="false" to={`/photo/${link.name}`}>
              Explorer
              <svg
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35.91"
                viewBox="0 0 35 35.91">
                <path
                  id="FontAwsome_arrow-down_"
                  data-name="FontAwsome (arrow-down)"
                  d="M38.306,47.268l1.779,1.779a1.916,1.916,0,0,1,0,2.717L24.512,67.345a1.916,1.916,0,0,1-2.717,0L6.215,51.764a1.916,1.916,0,0,1,0-2.717l1.779-1.779a1.926,1.926,0,0,1,2.749.032l9.2,9.658V33.924A1.919,1.919,0,0,1,21.868,32h2.565a1.919,1.919,0,0,1,1.924,1.924V56.958l9.2-9.658a1.912,1.912,0,0,1,2.749-.032Z"
                  transform="translate(-5.65 -32)"
                  fill="#fffdff"
                />
              </svg>
            </Button>
          ))}
        </ExperienceInfo>
        {/* Experience Informations */}

        <Arrow top="true" red="true">
          <svg
            className="arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35.91"
            viewBox="0 0 35 35.91">
            <path
              id="FontAwsome_arrow-down_"
              data-name="FontAwsome (arrow-down)"
              d="M38.306,47.268l1.779,1.779a1.916,1.916,0,0,1,0,2.717L24.512,67.345a1.916,1.916,0,0,1-2.717,0L6.215,51.764a1.916,1.916,0,0,1,0-2.717l1.779-1.779a1.926,1.926,0,0,1,2.749.032l9.2,9.658V33.924A1.919,1.919,0,0,1,21.868,32h2.565a1.919,1.919,0,0,1,1.924,1.924V56.958l9.2-9.658a1.912,1.912,0,0,1,2.749-.032Z"
              transform="translate(-5.65 -32)"
              fill="#fffdff"
            />
          </svg>
        </Arrow>
      </ExperienceWrapper>
      {/* Experience Container */}
    </div>
  );
};

export default Experience;
