import { useURLQueryParam } from "./use-urlQueryParam";
import { useMemo } from "react";

//项目列表搜索的参数
export const useProjectsSearchParams = () => {
  //                        useURLQueryParam 返回的是数组类型，在调用的时候可以给这俩属性重新命名
  const [param, setParam] = useURLQueryParam(["name", "personId"]);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};
