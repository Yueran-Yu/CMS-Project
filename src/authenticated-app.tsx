import React from "react";
import { ProjectListPage } from "./pages/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <PageHeader>
        <HeaderLeft>
          <h3>Logo</h3>
          <h3>Projects</h3>
          <h3>Clients</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>Log Out</button>
        </HeaderRight>
      </PageHeader>
      <Main>
        <ProjectListPage />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;

const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
`;
const HeaderRight = styled.div``;
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
