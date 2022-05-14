// In the real development environment, if we se services like Firebase library, this file is unnecessary
import { apiUrl } from "./pages/project-list";

const localStorageKey = "__auth_provider_token__";
export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: UserProps }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = async (data: LoginRegisterProps) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return handleUserResponse(await response.json());
  } else {
    // equals throw a new error
    return Promise.reject(data);
  }
};

export const register = async (data: LoginRegisterProps) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return handleUserResponse(await response.json());
  } else {
    return Promise.reject(data);
  }
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
