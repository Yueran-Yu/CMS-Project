import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { CleanUpObject } from "./index";

/**
 * 返回页面url中，指定键的参数值
 * */
export const useURLQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // 返回数组类型，在调用的时候可以给这俩属性重新命名
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in K]: string }),
      [searchParams] // eslint-disable-line
    ),
    (params: Partial<{ [key in K]: unknown }>) => {
      // iterator
      const o = CleanUpObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParams(o);
    },
  ] as const;
};

// A 'const' assertion tells the compiler to infer the narrowest or most specific type it can for an expression
