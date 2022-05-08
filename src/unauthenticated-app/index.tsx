import React, { useState } from "react";
import RegisterPage from "./register";
import LoginPage from "./login";

export const UnauthenticatedApp = () => {
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  return (
    <div>
      {isRegisterPage ? <RegisterPage /> : <LoginPage />}
      <button onClick={() => setIsRegisterPage(!isRegisterPage)}>
        {isRegisterPage ? "Toggle Login" : "Toggle Register"}
      </button>
    </div>
  );
};
