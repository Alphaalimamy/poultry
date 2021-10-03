import styled from "styled-components";
export const BottomTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1.5rem;
  padding: 0.95rem 7%;
  border-top: 1.5px solid #ccc;
`;

export const ServiceTitle = styled.h3`
  letter-spacing: 0.35rem;
`;
export const ServiceDescription = styled.p`
  text-align: justify;
  line-height: 1.5;
`;

export const SingleService = styled.div`
  padding: 0.5rem;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  background: #fff;
  color: #000;
  border-radius: 1rem;

  &:hover {
    background-color: blue;
    transform: scale(1.1);
    color: #fff;
  }
`;
