import React from "react";
import { useLocation } from "react-router-dom";
import { AuthFormTemplate, LoginForm } from "src/components";

import * as S from "./styled";

export const AuthPage = () => {
  const location = useLocation();
  const formType = location.pathname.split("/")[2];

  return (
    <S.AuthPageFormContainer>
      <AuthFormTemplate
        formType={formType as any}
        loginForm={
          <>
            <LoginForm />
          </>
        }
        registerForm={<></>}
      />
    </S.AuthPageFormContainer>
  );
};
