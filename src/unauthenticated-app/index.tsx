import React, { useState } from "react";
import { RegisterPage } from "./RegisterPage";
import { LoginPage } from "./LoginPage";
import { Card } from "antd";

export const UnauthenticatedApp = () => {
  const [registerPage, setRegisterPage] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      <Card>
        {registerPage ? <RegisterPage /> : <LoginPage />}
        <button onClick={() => setRegisterPage(!registerPage)}>
          {registerPage ? "Go To Login" : "Go To Register"}
        </button>
      </Card>
    </div>
  );
};
