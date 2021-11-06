import React from "react";
import {
  HomeDetail,
  TopTitle,
  TopContent,
  TopHeadingOne,
  TopHeadingTwo,
  TopHeadingThree,
  Img,
  HeadingThreeTitle,
  Description,
} from "./HomeDetails.elements";
const HomeDetailInfo = ({ imgSrc, data, imgStart }) => {
  return (
    <div>
      <HomeDetail>
        <TopContent imgStart={imgStart}>
          <Img src={imgSrc} alt="phot" />
          <TopTitle>
            <TopHeadingOne>Founded IN 2010</TopHeadingOne>
            <TopHeadingTwo>OUR FARM</TopHeadingTwo>
            <TopHeadingThree>Who WE ARE</TopHeadingThree>
            {data.map((d, index) => (
              <div key={index}>
                <HeadingThreeTitle>{d.title}</HeadingThreeTitle>
                <Description>{d.content}</Description>
              </div>
            ))}
          </TopTitle>
        </TopContent>
      </HomeDetail>
    </div>
  );
};

export default HomeDetailInfo;
