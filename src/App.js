import React from "react";
import { Route } from "react-router-dom";

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
  linkFont: "Monument Extended Ultrabold",
  red: "#E2293F",
  white: "#FFFDFF",
  black: "#161616",
};

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Normalize />
        <Header />
        <Route component={Home} path="/" exact />
        <Route component={Video} path="/video" />
        <Route component={Photo} path="/photo" />
      </ThemeProvider>
    </>
  );
}

export default App;
