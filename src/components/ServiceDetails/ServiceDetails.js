import React from "react";
import {
  BottomTitle,
  ServiceTitle,
  ServiceDescription,
  SingleService,
} from "./ServiceDetails.elements";
const ServiceDetails = ({ bottomData }) => {
  return (
    <div>
      <BottomTitle>
        {bottomData.map((singleData) => (
          <SingleService>
            <ServiceTitle>{singleData.title}</ServiceTitle>
            <ServiceDescription>{singleData.content}</ServiceDescription>
          </SingleService>
        ))}
      </BottomTitle>
    </div>
  );
};

export default ServiceDetails;
