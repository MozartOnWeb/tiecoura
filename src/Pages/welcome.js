import React from "react";

// Import Framer Motion
import {motion} from "framer-motion"

// Import Styled Components
import {
  WelcomeWrapper,
  WelcomeImage,
  WelcomeGradient,
} from "./Styles/welcomeStyles";

// Import Images
import { image1 } from "../data";

// Import Styled Components
import { Logo, WelcomeDesc } from "./Styles/welcomeStyles";
import {Button} from "../layout"

const Welcome = () => {
  return (
    <WelcomeWrapper>
      <Logo>Follio</Logo>
      <Button welcome to="/home">
        Entrez
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
      <WelcomeDesc>
        <motion.h3>Tiècoura N'Daou</motion.h3>
        <motion.p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ullam est distinctio quod dolore quas aspernatur ipsa ipsam facere fuga nesciunt, iste, cum id iusto minima. Culpa esse, nobis nostrum veniam accusamus dolorem ipsa ex.</motion.p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eum odio. Mollitia perspiciatis quia vitae.</p>
      </WelcomeDesc>
      <WelcomeGradient />
      <WelcomeImage>
        <motion.img src={image1} alt="" />
      </WelcomeImage>
    </WelcomeWrapper>
  );
};

export default Welcome;
