import React from "react";

// Import Components
import { Button } from "../layout";

// Import Styles
import {
  PortfolioHeadline,
  PortfolioImage,
  PortfolioImages,
  PortfolioInfo,
  PortfolioLinks,
  PortfolioWrapper,
  PortfolioContainer,
} from "./Styles/portfolioStyles";

// Import Images
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  video1,
} from "../data/";

const Portfolio = () => {

  return (
    <PortfolioContainer>
      <PortfolioWrapper>
        <PortfolioInfo>
          <PortfolioHeadline>Portfolio</PortfolioHeadline>
          <PortfolioLinks>
            <Button to="/" medium="true" activeClassName="active">
              Tout
            </Button>
            <Button to="/" medium="true" activeClassName="active">
              Photos
            </Button>
            <Button to="/" medium="true" activeClassName="active">
              Videos
            </Button>
          </PortfolioLinks>
        </PortfolioInfo>
        <PortfolioImages>
          <PortfolioImage className="item1">
            <video src={video1} autoPlay></video>
          </PortfolioImage>
          <PortfolioImage>
            <img src={image2} alt="" />
          </PortfolioImage>
          <PortfolioImage>
            <img src={image1} alt="" />
          </PortfolioImage>
          <PortfolioImage>
            <img src={image3} alt="" />
          </PortfolioImage>
          <PortfolioImage>
            <img src={image4} alt="" />
          </PortfolioImage>
          <PortfolioImage className="item2">
            <img src={image5} alt="" />
          </PortfolioImage>
        </PortfolioImages>
      </PortfolioWrapper>
      <Button center="true" className="portfolio-button" to="/">
        Voir Plus
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
    </PortfolioContainer>
  );
};

export default Portfolio;
