import React from "react";
import Typed from "react-typed";
import {
  AboutInfoContainer,
  AboutInfoTitle,
  AboutInfoContent,
  Content,
  TitleSpan,
} from "./About.elements";
import "./About.css";

const AboutInfo = () => {
  return (
    <AboutInfoContainer>
      <Content>
        <AboutInfoTitle>
          About <TitleSpan>us</TitleSpan>
        </AboutInfoTitle>
        <AboutInfoContent>
          {/**/}
          <Typed
            strings={[
              "We are industry-leading pig and poultry farm delivering the best products that boost your daily life energy and potential.",
            ]}
            typeSpeed={60}
            backSpeed={50}
            backDelay={1}
            loop
            smartBackspace
          />
        </AboutInfoContent>
      </Content>
    </AboutInfoContainer>
  );
};

export default AboutInfo;
