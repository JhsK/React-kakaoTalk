import React from "react";
import { Link } from "react-router-dom";
import AuthBg from "../../lib/styles/auth/AuthBg";
import AuthBtn from "../../lib/styles/auth/AuthBtn";
import { StyledForm, LoginTitle, Footer } from "./LoginTemplate";

const JoinTemplate = () => {
  return (
    <AuthBg>
      <LoginTitle className="title">회원가입</LoginTitle>
      <StyledForm>
        <form>
          <span className="input-title">Username</span>
          <input
            className="form-input"
            autoComplete="username"
            name="username"
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
          <input
            className="form-input"
            autoComplete="password"
            name="password"
            placeholder="비밀번호 확인"
            type="password"
          />
          <AuthBtn type="submit">회원가입</AuthBtn>
        </form>
      </StyledForm>
      <Footer>
        <Link to="/">LOGIN</Link>
      </Footer>
    </AuthBg>
  );
};

export default JoinTemplate;
