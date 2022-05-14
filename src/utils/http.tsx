import { apiUrl } from "../pages/project-list";
import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "../context/auth-context";

export const http = async (
  endPoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    // this customConfig, will overwrite the default property=> {method: "GET"} if it has been passed
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endPoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  // axios performs better than fetch, since it will throw exception error automatically when the status code is not 2xx
  return window
    .fetch(`${apiUrl}/${endPoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "Please Login Again" });
      }

      const data = await response.json();
      if (response.ok) {
        //  这里的data 获取的是啥？
        return data;
      } else {
        //equals manually throw an error message
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  // Parameters<typeof http>  is a Utility Type
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

// type alias, interface can't replace this type style
// interface can't replace Utility Type
type FavNum = string | number;
