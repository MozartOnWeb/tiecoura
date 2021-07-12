import React from "react";

// Import React-Router-Dom
import { Route, Switch, useLocation } from "react-router-dom";

// Import Framer Motion
import { AnimatePresence } from "framer-motion";

// Import Global Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import Pages
import { Home, Video, Photo, About, Welcome } from "./Pages";
import { CloseMenu, PageNav } from "./Components";
import { Pages } from "./layout";

import { down } from "styled-breakpoints";

// Create Global Styles
const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Poppins";
  }
  html, body {
    overflow-x: hidden;
    scroll-behavior: smooth;
    .toast_conatiner {
      text-transform: uppercase;
    }
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
`;

const Theme = {
  mainFont: "Poppins",
  linkFont: "Poppins",
  menuFont: "Jura",
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

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ToastContainer
          autoClose={2000}
          position="bottom-right"
          className="toast_conatiner"
        />
        <Normalize />
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route component={Home} path="/home" exact />
            <Route component={Welcome} path="/" exact />
            <Pages className="pages">
              <PageNav />
              <CloseMenu />
              <Route component={Video} path="/video" />
              <Route component={Photo} path="/photo/:serie" />
              <Route component={About} path="/about" />
            </Pages>
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
