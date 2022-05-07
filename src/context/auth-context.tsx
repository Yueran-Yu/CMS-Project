import React, { createContext, useState } from "react";
import * as auth from "auth-provider";

const AuthContext = createContext(undefined);
AuthContext.displayName = "AuthContext";
const AuthProvider = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  // point free style
  const login = (form: LoginRegisterProps) => auth.login(form).then(setUser);
  const register = (form: LoginRegisterProps) =>
    auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));
};

export default AuthProvider;
