import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./styled";
import { host } from "src/host";
import { port } from "src/port";

export const Navbar: React.FC = () => {
  const [authState, setAuthState] = useState({
    state: false,
    admin: "",
  });
  useEffect(() => {
    axios
      .get(`http://${host}:${port}/auth/auth`, {
        headers: {
          accessToken: localStorage.getItem("accessToken") as any,
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState({ ...authState, state: false });
        } else {
          setAuthState({
            state: true,
            admin: res.data.admin,
          });
        }
      });
  }, []);
  const FuncLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({
      admin: "",
      state: false,
    });
  };
  return (
    <S.NavbarContainer>
      <S.NavbarObjectNavbar>
        <S.NavbarLogoContainer to="/">
          <S.NavbarLogo>J</S.NavbarLogo>
        </S.NavbarLogoContainer>
        <S.NavbarLogoText to="/">'s Tech Blog</S.NavbarLogoText>
        {!authState.state ? (
          <S.AuthPageContainer>
            <S.AuthPage to="/auth/login">로그인 | 회원가입</S.AuthPage>
          </S.AuthPageContainer>
        ) : (
          <>
            <S.AuthPageContainer>
              <S.Logout onClick={FuncLogout}>로그아웃</S.Logout>
              <S.GoToPost to="/post">post</S.GoToPost>
            </S.AuthPageContainer>
          </>
        )}
      </S.NavbarObjectNavbar>
    </S.NavbarContainer>
  );
};
