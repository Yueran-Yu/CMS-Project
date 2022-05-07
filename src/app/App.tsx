import { AppWrapper } from "App.styles";
import React from "react";
import { ProjectListPage } from "Pages/project-list";
import LoginPage from "../Pages/login";

const App = () => {
  return (
    <AppWrapper>
      <h1>Management System</h1>
      <LoginPage />
      {/*<ProjectListPage />*/}
    </AppWrapper>
  );
};

export default App;
