import { useState } from "react";

const defaultInitialState: AsyncState<null> = {
  stat: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};
export const useAsync = <D>(
  _initialState?: AsyncState<D>,
  initialConfig?: typeof defaultConfig
) => {
  const config = { ...defaultConfig, ...initialConfig };
  const [state, setState] = useState<AsyncState<D>>({ ...defaultInitialState });

  const setData = (data: D) =>
    setState({
      data,
      stat: "success",
      error: null,
    });

  const setError = (error: Error) =>
    setState({
      error,
      stat: "error",
      data: null,
    });

  // run用来触发异步请求
  const run = (promise: Promise<D>) => {
    if (!promise || !promise.then) throw new Error("请传入Promise类型数据");

    setState({ ...state, stat: "loading" });
    return (
      promise
        .then((data) => {
          setData(data);
          return data;
        })
        // catch 会消化异常，如果不主动抛出，外面是接受不到异常的
        .catch((error) => {
          setError(error);
          return config.throwOnError ? Promise.reject(error) : error;
        })
    );
  };

  return {
    isIdle: state.stat === "idle",
    isLoading: state.stat === "loading",
    isError: state.stat === "error",
    isSuccess: state.stat === "success",
    run,
    setData,
    setError,
    ...state,
  };
};
