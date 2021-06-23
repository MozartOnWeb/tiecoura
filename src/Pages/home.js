import React, { useState } from "react";

// Import Components
import {
  Experience,
  Footer,
  Hero,
  Introducing,
  Portfolio,
  WhoIAM,
  Menu,
  Header,
} from "../Components";

const Home = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menu: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  return (
    <div>
      <Menu state={state} setState={setState} handleMenu={handleMenu} />
      <Header state={state} setState={setState} handleMenu={handleMenu} />
      <Hero />
      <Experience />
      <Portfolio />
      <Introducing />
      <WhoIAM />
      <Footer />
    </div>
  );
};

export default Home;
