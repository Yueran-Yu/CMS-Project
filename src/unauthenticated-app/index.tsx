import React, { useState } from "react";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";

export const UnauthenticatedApp = () => {
  const [registerPage, setRegisterPage] = useState(false);
  return (
    <div>
      {registerPage ? <RegisterPage /> : <LoginPage />}
      <button onClick={() => setRegisterPage(!registerPage)}>
        {registerPage ? "Go To Login" : "Go To Register"}
      </button>
    </div>
  );
};
