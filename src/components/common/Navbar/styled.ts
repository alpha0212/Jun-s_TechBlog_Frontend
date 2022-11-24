import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  padding-top: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.27);
`;

export const NavbarObjectNavbar = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
`;

export const NavbarLogoContainer = styled(Link)`
  width: 4rem;
  padding-bottom: 2rem;
  text-decoration: none;
  color: black;
  float: left;
`;

export const NavbarLogo = styled.div`
  width: 100%;
  border-radius: 1.5rem;
  background-color: #dbdbdb;
  text-align: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 3rem;
  font-weight: bold;
`;

export const NavbarLogoText = styled(Link)`
  width: 60%;
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

export const Logout = styled.div`
  float: right;
  color: #dbdbdb;
  user-select: none;
`;

export const GoToPost = styled(Link)`
  float: right;
  text-decoration: none;
  color: #dbdbdb;
  margin-right: 3rem;
`;
