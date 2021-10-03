import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoTitle = styled.h2`
  color: #fff;
`;

export const LogoSubtitle = styled.span`
  color: #fec260;
`;
export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: none;

  @media screen and (max-width: 968px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 10%;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease-in-out;
    background: #101522;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    animation: iconAnimation 2s infinite;
  }

  @keyframes iconAnimation {
    0% {
      transform: scale(1.2);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(1.2);
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  &:hover {
    border-bottom: 1px solid #fff;
    transition: all 0.5s ease-in-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    margin-top: 0;

    &:hover {
      color: #4b59f7;
      transition: all 0.5s ease;
    }
  }
`;
