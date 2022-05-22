import { useEffect } from "react";
import { CleanUpObject } from "./index";
import { useHttp } from "./use-http";
import { useAsync } from "./use-async";

// since 'name' and 'personId' is part of Project
export const useProjects = (param?: Partial<ProjectProps>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<ProjectProps[]>();
  useEffect(() => {
    const promise = client("projects", { data: CleanUpObject(param || {}) });
    run(promise);
    // eslint-disable-next-line
  }, [param]);

  return result;
};

export const useEditProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<ProjectProps>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: "PATCH",
      })
    );
  };

  return { mutate, ...asyncResult };
};

export const useAddProject = () => {
  const { run, ...asyncResult } = useAsync();
  const client = useHttp();
  const mutate = (params: Partial<ProjectProps>) => {
    return run(
      client(`projects/${params.id}`, {
        data: params,
        method: "POST",
      })
    );
  };

  return { mutate, ...asyncResult };
};
