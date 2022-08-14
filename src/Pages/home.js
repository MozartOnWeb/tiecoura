import React, { useState, useEffect } from "react";
import gsap from "gsap";

// Import Components
import {
  Footer,
  Hero,
  Introducing,
  Portfolio,
  WhoIAM,
  Header,
  Clients,
} from "../Components";

//
import LoadingScreen from "../Components/LoadingScreen";

const Home = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      gsap.to(".load_container", {
        duration: 0.5,
        y: "-100%",
        ease: "Power6.inOut",
        stagger: {
          amount: 0.08,
        },
      });
    }, 1500);
  }, []);

  return (
    <div className="home-wrapper">
      <LoadingScreen />
      <Header />
      <Hero selected={selected} setSelected={setSelected} />
      <Portfolio selected={selected} setSelected={setSelected} />
      <Introducing />
      <WhoIAM selected={selected} setSelected={setSelected} />
      <Clients />
      <Footer selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Home;
