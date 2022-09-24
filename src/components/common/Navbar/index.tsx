import React from "react";

import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.NavbarObjectNavbar>
        <S.NavbarLogoContainer>
          <S.NavbarLogo>J</S.NavbarLogo>
        </S.NavbarLogoContainer>
        <S.NavbarLogoText>'s Tech Blog</S.NavbarLogoText>
      </S.NavbarObjectNavbar>
    </S.NavbarContainer>
  );
};
