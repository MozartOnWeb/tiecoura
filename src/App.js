import React from "react";
import { Route, Switch } from "react-router-dom";

// Import Global Styles
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import Header from "./Components/Header";

// Import Pages
import { Home, Video, Photo } from "./Pages";

// Create Global Styles
const GlobalStyles = createGlobalStyle`
  html, body {
    overflow-x: hidden;
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
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Normalize />
        <Header/>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Video} default path="/video" />
          <Route component={Photo} path="/photo"/>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
