import React, { useEffect } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router";

export const Post: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인해주세요.");
      navigate("/auth/login");
    }
  }, []);

  return (
    <S.AllContainer>
      <S.PostContainer>
        <S.PostPosition>ansdignsodignsoidngoisdgn</S.PostPosition>
      </S.PostContainer>
    </S.AllContainer>
  );
};
