import React from "react";

import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarObjectNavbar>
        <S.NavbarLogoContainer to="/">
          <S.NavbarLogo>J</S.NavbarLogo>
        </S.NavbarLogoContainer>
        <S.NavbarLogoText to="/">'s Tech Blog</S.NavbarLogoText>
        <S.AuthPageContainer>
          <S.AuthPage to="/auth/login">로그인 | 회원가입</S.AuthPage>
        </S.AuthPageContainer>
      </S.NavbarObjectNavbar>
    </S.NavbarContainer>
  );
};
