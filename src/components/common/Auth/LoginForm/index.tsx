import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./styled";

export const LoginForm = () => {
  const [user_id, setUserid] = useState("");
  const [user_pw, setUserpw] = useState("");

  const navigate = useNavigate();

  const login = () => {
    const data = { user_id: user_id, user_pw: user_pw };
    axios.post("http://localhost:8080/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        navigate("/");
        localStorage.setItem("accessToken", response.data.token);
      }
    });
  };
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
      alert("로그인되었습니다.");
    }
  }, []);

  return (
    <>
      <S.FormInputContainer>
        <S.InputElementContainer>
          <S.InputContainer>
            <S.InputElement
              autoComplete="off"
              type="text"
              onChange={(event) => {
                setUserid(event.target.value);
              }}
              placeholder="아이디"
            />
            <S.InputElement
              autoComplete="off"
              type="password"
              onChange={(event) => {
                setUserpw(event.target.value);
              }}
              placeholder="비밀번호"
              value={user_pw}
            />
            <S.LoginButton onClick={login}>로그인</S.LoginButton>
          </S.InputContainer>
        </S.InputElementContainer>
      </S.FormInputContainer>
    </>
  );
};
