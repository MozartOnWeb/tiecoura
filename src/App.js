import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

// Import Global Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

// Import Pages
import { Home, Video, Photo, About } from "./Pages";
import { CloseMenu, PageNav } from "./Components";
import { Pages } from "./layout";

import { down } from "styled-breakpoints";

// Create Global Styles
const GlobalStyles = createGlobalStyle`
  html, body {
    overflow-x: hidden;
    .bg {
    z-index: -50;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.red};
    left: 0;
    top: 0;
    .pages {
      position: relative;
      ${down("md")} {
          width: 100%;
          padding-left: 0px;
          padding-right: 0px;
        }
    .menu-close {
    position: absolute;
    right: 135px;
    top: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    ${down("md")} {
      margin-right: -50px;
    }
    ${down("sm")} {
      margin-right: -80px;
    }
    .svg1 {
      width: 25px;
      cursor: pointer;
      path {
        fill: ${(props) => props.theme.white};
      }
      ${down("xs")} {
        width: 18px;
      }
      ${down("s")} {
        width: 16px;
      }
    }
    .svg2 {
      #Ellipse_2 {
        stroke: ${(props) => props.theme.white};
      }
      position: absolute;
      width: 70px;
      cursor: pointer;
      ${down("xs")} {
        width: 60px;
      }
      ${down("s")} {
        width: 55px;
      }
    }
  }
    }
  }
  }
`;

const Theme = {
  mainFont: "Poppins",
  linkFont: "Monument",
  red: "#E2293F",
  white: "#FFFDFF",
  black: "#161616",
  breakpoints: {
    s: "320px",
    xs: "375px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

function App() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Normalize />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route component={Home} path="/" exact />
            <motion.div
              className="bg"
              initial={{ x: "0%" }}
              exit={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 60,
              }}>
              <Pages
                className="pages"
                initial={{ x: "100%" }}
                exit={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                  type: "spring",
                  delay: -8,
                  stiffness: 50,
                }}>
                <PageNav />
                <CloseMenu visible={visible} setVisible={setVisible} />
                <Route component={Video} path="/video" />
                <Route component={Photo} path="/photo" />
                <Route component={About} path="/about" />
              </Pages>
            </motion.div>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
