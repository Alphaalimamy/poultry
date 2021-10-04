import styled from "styled-components";

export const AboutInfoContainer = styled.div`
  padding: 4rem 7%;
  margin: 0 auto;
  height: 100vh;
  max-height: 85vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(./images/pig.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  @media screen and (max-width: 960px) {
    padding: 2rem 7%;
  }
`;
export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const AboutInfoTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  letter-spacing: 0.5rem;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
  }
`;

export const TitleSpan = styled.span`
  color: blue;
`;
export const AboutInfoContent = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 400;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
// export const Content = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transition: translate(-50%, -50%);
// `;
