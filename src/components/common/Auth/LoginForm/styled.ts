import styled from "@emotion/styled";

export const FormInputContainer = styled.div`
  width: 41rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 40rem) {
    width: 33.4rem;
  }
`;

export const Label = styled.p`
  font-size: 1.7rem;
  color: #363636;
  margin-bottom: 0.5rem;
`;
export const InputElement = styled.input`
  border: none;
  outline: none;
  width: 41rem;
  height: 5rem;
  font-size: 1.6rem;
  font-weight: 600;
  border: 0.2rem solid #c6c6c6;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0.1rem 0.4rem 0.3rem 0 rgba(213, 223, 247, 0.15);
  ::placeholder {
    color: #afafaf;
  }
  @media screen and (max-width: 40rem) {
    width: 32.8rem;
    height: 5rem;
    font-size: 1.6rem;
  }
`;

export const InputElementContainer = styled.div`
  margin-bottom: 1.2rem;
`;
export const InputContainer = styled.div``;

export const LoginButton = styled.button`
  width: 41rem;
  height: 6rem;
  margin-top: 1rem;
  background-color: #dbdbdb;
  border-radius: 15px;
  color: black;
  border: none;
  font-size: 2.6rem;
  @media screen and (max-width: 40rem) {
    font-size: 2rem;
    width: 33.4rem;
    height: 5rem;
  }
`;
