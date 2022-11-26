import React, { useState, useEffect } from "react";
import * as S from "./styled";

export const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.IntroContainer>
        <S.IntroMyName>Jun's Portfolio</S.IntroMyName>
      </S.IntroContainer>
    </S.NavbarContainer>
  );
};
