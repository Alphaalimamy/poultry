import styled from "styled-components";
export const HomeDetail = styled.div`
  padding: 1rem 7%;
  display: flex;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-space-between;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  gap: 2.5rem;
  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border-radius: 0.5rem;
  max-width: 100%;
  display: inline-block;
  box-shadow: 0 8x 9px 0 rgba(0, 0, 0, 0.3);
`;
export const TopTitle = styled.div``;
export const BottomTitle = styled.div``;
export const TopHeadingOne = styled.h2`
  text-align: center;
  color: teal;
  font-weight: 600;
  text-transform: uppercase;
`;
export const TopHeadingTwo = styled.h3`
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.5rem;
  font-size: 1.5rem;
`;
export const TopHeadingThree = styled.h3`
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
export const HeadingThreeTitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: 0.25rem;
`;
export const Description = styled.p`
  text-align: justify;
  line-height: 1.5rem;
`;
