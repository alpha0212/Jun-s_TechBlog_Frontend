import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  padding-top: 6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.27);
  background: #1e1e1e;
`;

export const IntroContainer = styled.div`
  width: 100%;
  padding-bottom: 7rem;
`;

export const IntroMyName = styled.div`
  font-size: 3.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  animation: fadein 2.5s;
  letter-spacing: 1px;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
