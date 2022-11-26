import React from "react";
import * as S from "./styled";

export interface ProjectType {
  text: string;
}

export const GoProject: React.FC<ProjectType> = ({ text }) => {
  return <S.Bottom>{text}</S.Bottom>;
};
