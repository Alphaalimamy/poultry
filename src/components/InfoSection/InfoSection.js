import React from "react";
import Typed from "react-typed";
import "./Info.css";
const InfoSection = () => {
  return (
    <div className="info">
      <Typed
        strings={[
          "The home of best chicken in Salone",
          "We provide natural and orgainc eggs in Salone",
          "The best taste of natural chicken in Salone",
        ]}
        typeSpeed={50}
        backSpeed={50}
        backDelay={1}
        loop
        smartBackspace
        className="typed-details"
      />
    </div>
  );
};

export default InfoSection;
