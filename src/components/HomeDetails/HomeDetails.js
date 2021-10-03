import React from "react";
import { homeObjOne } from "./Data";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

import "./HomeDetails.css";
import HomeDetailInfo from "./HomeDetailInfo";

const HomeDetails = () => {
  return (
    <>
      {" "}
      <HomeDetailInfo {...homeObjOne} />
      <ServiceDetails {...homeObjOne} />
    </>
  );
};

export default HomeDetails;
