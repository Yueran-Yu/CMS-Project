import React, { useState } from "react";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { Card, Divider } from "antd";
import styled from "@emotion/styled";
import logo from "assets/logo.svg";
import left from "assets/left.svg";
import right from "assets/right.svg";

export const UnauthenticatedApp = () => {
  const [registerPage, setRegisterPage] = useState(false);
  return (
    <Container>
      <Header />
      <ShadowCard>
        {registerPage ? <RegisterPage /> : <LoginPage />}
        <Divider />
        <a onClick={() => setRegisterPage(!registerPage)}>
          {registerPage
            ? "已经有账号了？ 请直接登录"
            : "没有账号？ 请注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};

const Background = styled.div`
  position: absolute;
  width: 100%;
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
