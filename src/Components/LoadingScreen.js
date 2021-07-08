import React from "react";

import "../Components/Styles/Loading.scss";

const LoadingScreen = () => {
  return (
    <div className="load_container" >
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

export default LoadingScreen;
