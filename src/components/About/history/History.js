import React from "react";
import {
  HistoryContainer,
  HistoryTitle,
  HistoryContent,
  DataTitle,
  DataContent,
  DataContainer,
  HistoryTitleSpan,
} from "./History.elements";

export const History = ({ data }) => {
  return (
    <HistoryContainer>
      <HistoryTitle>
        <HistoryTitleSpan>Our</HistoryTitleSpan> history
      </HistoryTitle>
      <HistoryContent>
        {data.map((singleData) => (
          <DataContainer key={singleData.id}>
            <DataTitle>{singleData.title}</DataTitle>
            <DataContent>{singleData.content}</DataContent>
          </DataContainer>
        ))}
      </HistoryContent>
    </HistoryContainer>
  );
};
