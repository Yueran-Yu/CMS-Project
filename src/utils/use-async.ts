import { useState } from "react";

const defaultInitialState: AsyncState<null> = {
  stat: "idle",
  data: null,
  error: null,
};
export const useAsync = <D>(initialState?: AsyncState<D>) => {
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
    return promise
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
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
