import React, { FormEvent } from "react";
import { apiUrl } from "../project-list";

const LoginPage = () => {
  const login = (param: LoginProps) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">User Name</label>
        <input name="username" type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
