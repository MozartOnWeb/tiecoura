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
  const [open, setOpen] = useState(false);


  return (
    <div>
      <Menu open={open} setOpen={setOpen} />
      <Header open={open} setOpen={setOpen} />
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
