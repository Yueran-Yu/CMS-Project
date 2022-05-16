import React, { createContext, FC, ReactNode, useContext } from "react";
import * as auth from "auth-provider";
import { httpREST } from "../utils/use-http";
import { useMount } from "../utils";
import { useAsync } from "../utils/use-async";
import { GlobalPageErrorFallback, GlobalPageLoading } from "components/lib";

const bootStrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await httpREST("me", { token });
    //  不懂  data 里为啥 有 user  属性的，不明白
    user = data.user;
  }
  return user;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider: FC<ReactNode> = ({ children }) => {
  // const [user, setUser] = useState<UserProps | null>(null);
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<UserProps | null>();
  // point free style
  const login = (form: LoginRegisterProps) => auth.login(form).then(setUser);
  const register = (form: LoginRegisterProps) =>
    auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => run(bootStrapUser()));

  if (isIdle || isLoading) return <GlobalPageLoading />;

  if (isError) return <GlobalPageErrorFallback error={error} />;

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
