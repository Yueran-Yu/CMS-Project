import { AppWrapper } from "app/App.styles";
import React from "react";
import { useAuth } from "../context/auth-context";
import { AuthenticatedApp } from "../authenticated-app/authenticated-app";
import { UnauthenticatedApp } from "../unauthenticated-app";
import { ErrorBoundary } from "../components/error-boundary";
import { GlobalPageErrorFallback } from "../components/lib";

const App = () => {
  const { user } = useAuth();
  return (
    <AppWrapper>
      <ErrorBoundary fallbackRender={GlobalPageErrorFallback}>
        <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
      </ErrorBoundary>
    </AppWrapper>
  );
};

export default App;
