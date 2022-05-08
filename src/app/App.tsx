import { AppWrapper } from "app/App.styles";
import React from "react";
import { useAuth } from "../context/auth-context";
import { AuthenticatedApp } from "../authenticated-app";
import { UnauthenticatedApp } from "../unauthenticated-app";

const App = () => {
  const { user } = useAuth();
  return (
    <AppWrapper>
      <h1>Management System</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </AppWrapper>
  );
};

export default App;
