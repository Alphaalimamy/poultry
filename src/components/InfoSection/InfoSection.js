import React from "react";
import Typed from "react-typed";
import "./Info.css";
const InfoSection = () => {
  return (
    <div className="info">
      <Typed
        strings={[
          "Welcome to PPFASL website",
          "We are here to coordinate the activities of farmers in Sierra Leone",
          "Kindly reach out to us if you want to reach any Pig or Poultry farmer in the Nation",
        ]}
        typeSpeed={50}
        backSpeed={30}
        backDelay={1}
        loop
        smartBackspace
        className="typed-details"
      />
    </div>
  );
};

export default InfoSection;
