import { useHttp } from "./use-http";
import { useAsync } from "./use-async";
import { CleanUpObject } from "./index";
import { useEffect } from "react";

export const useGeneral = <T>(subPath: string, param?: Partial<T>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<T[]>();

  useEffect(() => {
    const promise = client(subPath, { data: CleanUpObject(param || {}) });
    run(promise);
    // eslint-disable-next-line
  }, [param]);

  return result;
};
