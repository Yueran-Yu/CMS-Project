import { AppWrapper } from "App.styles";
import React from "react";
import { ProjectListScreen } from "screens/project-list";

const App = () => {
  return (
    <AppWrapper>
      <h1>Management System</h1>
      <ProjectListScreen />
    </AppWrapper>
  );
};

export default App;
