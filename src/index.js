import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SerieProvider } from "./SerieContext";

ReactDOM.render(
  <Router>
    <SerieProvider>
      <App />
    </SerieProvider>
  </Router>,
  document.getElementById("root"),
);
