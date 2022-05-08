import { FC, ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProviders: FC<ReactNode> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
