import React from "react";
import InfoSection from "../InfoSection/InfoSection";
import HomeDetails from "../HomeDetails/HomeDetails";
// const particlesOption = {
//   particles: {
//     number: {
//       value: 100,
//       density: {
//         enabled: true,
//         value_area: 80,
//       },
//     },
//   },
//};
const Home = () => {
  return (
    <>
      <InfoSection />
      <HomeDetails />
    </>
  );
};

export default Home;
