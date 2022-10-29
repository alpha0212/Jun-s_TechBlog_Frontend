import React from "react";

import * as S from "./styled";

export interface AuthFormTemplateProps {
  formType: "login" | "register";
  loginForm: React.ReactNode;
  registerForm: React.ReactNode;
}

export const AuthFormTemplate: React.FC<AuthFormTemplateProps> = ({
  loginForm,
}) => {
  return <div>{loginForm};</div>;
};
