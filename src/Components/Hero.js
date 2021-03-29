import React from "react";
import {
  BackgroundImage,
  HeroImages,
  HeroInfo,
  HeroWrapper,
} from "./Styles/heroStyles";
import { Arrow, Container } from "../layout";

// Import images
import { image1, image2, image3, image4 } from "../data";

const Hero = () => {
  return (
    <>
      <BackgroundImage>
        <img src={image1} alt="" />
      </BackgroundImage>
      <Container>
        <HeroWrapper>
          <HeroInfo>
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
                  transform="translate(190 345)">
                  <line
                    id="Ligne_2"
                    data-name="Ligne 2"
                    y2="35.338"
                    transform="translate(1.656)"
                    fill="none"
                    stroke="#e2293f"
                    stroke-width="3"
                  />
                  <line
                    id="Ligne_3"
                    data-name="Ligne 3"
                    y2="38.651"
                    transform="translate(38.651 0.552) rotate(90)"
                    fill="none"
                    stroke="#e2293f"
                    stroke-width="3"
                  />
                </g>
                <g
                  id="Groupe_3"
                  data-name="Groupe 3"
                  transform="translate(191.656 869) rotate(-90)">
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
                  transform="translate(981.246 867.344) rotate(180)">
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
                  transform="translate(977.38 345) rotate(90)">
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
            <p className="outline">Tiecoura</p>
            <h1>African</h1>
            <h1>Studio.</h1>
          </HeroInfo>
          <HeroImages>
            <div className="squared1">
              <img src={image2} alt="" />
            </div>
            <div className="squared2">
              <img src={image3} alt="" />
            </div>
            <div className="rectangle">
              <img src={image4} alt="" />
            </div>
          </HeroImages>
        </HeroWrapper>
        <Arrow bottom="true">
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
      </Container>
    </>
  );
};

export default Hero;
