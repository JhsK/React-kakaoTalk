import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthBg from "../../lib/styles/auth/AuthBg";
import AuthBtn from "../../lib/styles/auth/AuthBtn";
import kakoImgBtn from "../../image/kakao_login_small.png";

export const LoginTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
  margin: 2rem 0;
`;

export const StyledForm = styled.div`
  form {
    .input-title {
      font-size: 0.8rem;
      opacity: 0.8;
    }
    .form-input {
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      outline: none;
      opacity: 0.5;
      padding: 1rem 0 0.7rem 0;
      margin-bottom: 1.5rem;
    }

    display: flex;
    flex-direction: column;
  }

  width: 100%;
  padding: 0 4rem;
`;

const SnsBtn = styled.div`
  .sns-title {
    font-size: 0.9rem;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
  button {
    width: 60px;
    height: 30px;
    background-image: url(${kakoImgBtn});
    background-position: center;
    background-size: cover;
    cursor: pointer;
    outline: none;
    border: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  cursor: pointer;
`;

const LoginTemplate = () => {
  return (
    <AuthBg>
      <LoginTitle className="title">Login</LoginTitle>
      <StyledForm>
        <form action="auth/login" method="POST">
          <span className="input-title">Username</span>
          <input
            className="form-input"
            autoComplete="userId"
            name="userId"
            placeholder="아이디"
          />
          <span className="input-title">Password</span>
          <input
            className="form-input"
            autoComplete="password"
            name="password"
            placeholder="비밀번호"
            type="password"
          />
          <AuthBtn type="submit">LOGIN</AuthBtn>
        </form>
      </StyledForm>
      <SnsBtn>
        <span className="sns-title">Or Sign Up Using</span>
        <a href="auth/kakao">
          <button />
        </a>
      </SnsBtn>
      <Footer>
        <Link to="/join">SING UP</Link>
      </Footer>
    </AuthBg>
  );
};

export default LoginTemplate;
