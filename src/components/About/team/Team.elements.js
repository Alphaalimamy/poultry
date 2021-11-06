import styled from "styled-components";
import { Link } from "react-router-dom";
export const TeamContainer = styled.div`
  padding: 2rem 7%;
  background: #eee;
`;
export const SingleTeamContainer = styled.div`
  /* width: 17rem; */
  box-shadow: 0 8px 9px rgba(0, 0, 0, 0.4);
  background: #fff;
  border-radius: 0.5rem;

  &:hover {
    background: #101556;
    color: #fff;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
export const TeamInfo = styled.div`
  text-align: justify;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.75rem;
`;
export const TeamInfoTitle = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 400;
`;
export const TeamInfoDescription = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
`;
export const TeamTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 2rem 0;
  text-transform: uppercase;
  font-weight: bold;
`;
export const TeamSpan = styled.span`
  color: blue;
`;
export const SocialIcons = styled.div`
  font-size: 2rem;
  text-align: center;
`;
export const IconLink = styled(Link)`
  padding: 3.5rem 1.5rem;
  color: blue;
  &:hover {
    color: white;
  }
`;
export const ContainerTeam = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 1.5rem;
`;
