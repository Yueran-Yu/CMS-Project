import React from "react";
import { ProjectListPage } from "../pages/project-list";
import styled from "@emotion/styled";
import { NavHeader } from "./NavHeader";
import { Navigate, Route, Routes } from "react-router";
import { ProjectPage } from "pages/project";
import { BrowserRouter as Router } from "react-router-dom";
import { TasksBoardPage } from "../pages/task-board";
import { EpicPage } from "../pages/epic";

export const AuthenticatedApp = () => {
  return (
    <Container>
      <NavHeader />
      <Main>
        <Router>
          <Routes>
            <Route path="projects" element={<ProjectListPage />} />
            <Route path="projects/:projectId/*" element={<ProjectPage />}>
              <Route path="tasksboard" element={<TasksBoardPage />} />
              <Route path="epic" element={<EpicPage />} />
              <Route path="*" element={<Navigate replace to="tasksboard" />} />
            </Route>
            <Route path="/*" element={<Navigate replace to="projects" />} />
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
