import styled from "styled-components";

export const HistoryContainer = styled.div`
  padding: 5rem 7%;
  border-top: 2px solid #eee;
  background: linear-gradient(to left, hsl(145, 65%, 66%), hsl(125, 71%, 66%));
  color: #000;
  font-weight: bold;
`;
export const HistoryTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;
export const HistoryTitleSpan = styled.span`
  color: blue;
`;
export const HistoryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 2rem;
`;
export const DataTitle = styled.h3`
  letter-spacing: 0.15rem;
  color: blue;
  font-weight: bold;
`;
export const DataContent = styled.p`
  text-align: justify;
  line-height: 2;
  font-size: 0.75rem;
`;
export const DataContainer = styled.div`
  box-shadow: 0 8px 9px rgba(0, 0, 0, 0.4);
  background-color: #61b152;
  border-radius: 0.25rem;
  padding: 1.25rem;

  &:hover {
    background-color: #61b122;
  }
`;
