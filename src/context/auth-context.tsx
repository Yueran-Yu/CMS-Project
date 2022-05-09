import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import * as auth from "auth-provider";

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  // point free style
  const login = (form: LoginRegisterProps) => auth.login(form).then(setUser);
  const register = (form: LoginRegisterProps) =>
    auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

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
