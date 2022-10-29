import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  background-color: #2c2f2f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.27);
  position: fixed;
`;

export const NavbarObjectNavbar = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
`;

export const NavbarLogoContainer = styled(Link)`
  width: 5%;
  @media screen and (max-width: 100rem) {
    width: 6%;
  }
  @media screen and (max-width: 90rem) {
    width: 10%;
  }
  @media screen and (max-width: 80rem) {
    width: 12%;
  }
  @media screen and (max-width: 40rem) {
    width: 12%;
  }
  @media screen and (max-width: 30rem) {
    width: 18%;
  }
  padding-bottom: 2rem;
  text-decoration: none;
  color: black;
  float: left;
`;

export const NavbarLogo = styled.div`
  border-radius: 1.5rem;
  background-color: #dbdbdb;
  text-align: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 3rem;
  font-weight: bold;
`;

export const NavbarLogoTextContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 40rem) {
    display: none;
  }
`;

export const NavbarLogoText = styled(Link)`
  font-size: 3rem;
  font-weight: 600;
  color: #dbdbdb;
  text-decoration: none;
  line-height: 3.7rem;
  margin-left: 0.5rem;
`;

export const AuthPageContainer = styled.div`
  padding-top: 1.3rem;
  width: 100%;
`;

export const AuthPage = styled(Link)`
  float: right;
  color: #dbdbdb;
  text-decoration: none;
`;

export const AuthStatus = styled.div`
  float: right;
  color: #dbdbdb;
`;

export const logout = styled.button``;

export const GoToPostContainer = styled.div``;

export const GoToPost = styled(Link)``;
