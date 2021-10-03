import React from "react";
import {
  BottomTitle,
  ServiceTitle,
  ServiceDescription,
} from "./ServiceDetails.elements";
const ServiceDetails = ({ bottomData }) => {
  return (
    <div>
      <BottomTitle>
        {bottomData.map((singleData) => (
          <div>
            <ServiceTitle>{singleData.title}</ServiceTitle>
            <ServiceDescription>{singleData.content}</ServiceDescription>
          </div>
        ))}
      </BottomTitle>
    </div>
  );
};

export default ServiceDetails;
