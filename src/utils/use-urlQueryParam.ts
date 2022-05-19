import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

/**
 * 返回页面url中，指定键的参数值
 * */

export const useURLQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in K]: string }),
      [searchParams]
    ), // eslint-disable-line
    setSearchParams,
  ] as const;
};

// A 'const' assertion tells the compiler to infer the narrowest or most specific type it can for an expression
