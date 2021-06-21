import React from "react";

import "./Styles/preloader.scss";

const Preloader = () => {
  return (
    <div className="pre-container">
      <div className="dl">
        <div className="dl__container">
          <div className="dl__corner--top"></div>
          <div className="dl__corner--bottom"></div>
        </div>
        <div className="dl__square"></div>
      </div>
    </div>
  );
};

export default Preloader;
