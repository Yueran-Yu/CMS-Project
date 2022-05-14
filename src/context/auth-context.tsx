import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import * as auth from "auth-provider";
import { http } from "../utils/http";
import { useMount } from "../utils";

const bootStrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    //  不懂  data 里为啥 有 user  属性的，不明白
    user = data.user;
  }
  return user;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  // point free style
  const login = (form: LoginRegisterProps) => auth.login(form).then(setUser);
  const register = (form: LoginRegisterProps) =>
    auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => bootStrapUser().then(setUser));

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("userAuth must be used in the AuthProvider");
  }
  return context;
};
