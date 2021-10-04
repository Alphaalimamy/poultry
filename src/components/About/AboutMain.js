import React from "react";
import { MainAboutContainer } from "./AboutMain.elements";
import AboutInfo from "./AboutInfo";
import Team from "./team/Team";
import { teamData } from "./team/teamData";
import { History } from "./history/History";
import data from "./data";

const AboutMain = () => {
  return (
    <MainAboutContainer>
      <AboutInfo />
      <History data={data} />
      <Team data={teamData} />
    </MainAboutContainer>
  );
};

export default AboutMain;
