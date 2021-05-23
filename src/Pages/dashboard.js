import React from "react";

//Import Styles
import {
  DashWrapper,
  DashHeadrer,
  DashTitle,
  DashSubTitle,
  DashContainer,
} from "./Styles/dashboardStyles";

// Import Component
import { PhotoSeries } from "../Components";

const Dashboard = () => {
  return (
    <DashContainer>
      <DashHeadrer>
        <DashTitle>Bienvenu Tiecoura</DashTitle>
        <DashSubTitle>Ici vous pouvez gérez votre site !</DashSubTitle>
      </DashHeadrer>

      <DashWrapper>
        <DashTitle thin="true">Gérez vos séries de photo</DashTitle>
        <PhotoSeries />
      </DashWrapper>

      <hr />
    </DashContainer>
  );
};

export default Dashboard;
