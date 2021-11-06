import React from "react";
import {
  TeamContainer,
  TeamTitle,
  SingleTeamContainer,
  ImageWrapper,
  Img,
  TeamInfo,
  TeamInfoTitle,
  TeamInfoDescription,
  SocialIcons,
  IconLink,
  ContainerTeam,
  TeamSpan,
} from "./Team.elements";
import { FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Galery from "../gallery/Galery";
const Team = ({ data }) => {
  return (
    <TeamContainer>
      <TeamTitle>
        Our <TeamSpan>team</TeamSpan>
      </TeamTitle>
      <ContainerTeam>
        {data.map((team) => (
          <SingleTeamContainer key={team.id}>
            <ImageWrapper>
              <Img src={team.image} alt="" />
            </ImageWrapper>
            <TeamInfo>
              <TeamInfoTitle>{team.name}</TeamInfoTitle>
              <TeamInfoDescription>{team.description}</TeamInfoDescription>
            </TeamInfo>
            <SocialIcons>
              <IconLink to="fb.com">
                <FaFacebook />
              </IconLink>
              <IconLink to="fb.com">
                <FaTwitter />
              </IconLink>
              <IconLink to="fb.com">
                <FaInstagramSquare />
              </IconLink>
            </SocialIcons>
          </SingleTeamContainer>
        ))}
      </ContainerTeam>

      <Galery />
    </TeamContainer>
  );
};

export default Team;
