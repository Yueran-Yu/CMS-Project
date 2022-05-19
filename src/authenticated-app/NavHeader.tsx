import { ReactComponent as SoftwareLogo } from "../assets/software-logo.svg";
import { Dropdown, Menu, Button } from "antd";
import { CapitalLetter } from "../utils/capital-letter";
import React from "react";
import styled from "@emotion/styled";
import { Row } from "../components/lib";
import { useAuth } from "../context/auth-context";
import { resetRoute } from "../utils";

export const NavHeader = () => {
  const { logout, user } = useAuth();
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <Button type={"link"} onClick={resetRoute}>
          <SoftwareLogo width={"18rem"} color={"rgb(81, 191, 201)"} />
        </Button>
        <HeaderItem>项目</HeaderItem>
        <HeaderItem>用户</HeaderItem>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key={"logout"}>
                <Button type={"link"} onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type={"link"} onClick={(e) => e.preventDefault()}>
            Hi, {user ? CapitalLetter(user.name) : ""}
          </Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

const HeaderItem = styled.h3`
  margin-right: 3rem;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
