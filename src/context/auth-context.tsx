import React, { createContext, useState } from "react";
import * as auth from "auth-provider";

const AuthContext = createContext(undefined);
AuthContext.displayName = "AuthContext";
const AuthProvider = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = (form: LoginRegisterProps) =>
    auth.login(form).then((user) => setUser(user));
  const register = (form: LoginRegisterProps) =>
    auth.register(form).then((user) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));
  return <div></div>;
};

export default AuthProvider;
