import { useEffect, useRef, useState } from "react";
// prevent deleting the object when value is 0
// export const isFalsy = (value: unknown) => (value === 0 ? false : !value)

// check if the value is => undefined/null/empty string
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// prevent from messing up original data
// this involves generics
export const CleanUpObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) delete result[key];
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []); // eslint-disable-line
};

// set a new clock every time when the value changed
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => timeout && clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;

  //mount
  useEffect(() => {
    document.title = title;
  }, [title]);

  //unmount
  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  });
};

// const debounce = (func, delay) => {
//   let timeout
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//
//     timeout = setTimeout(function() {
//       func(...param)
//     }, delay)
//   }
// }
//
// const log = debounce(() => console.log("call"), 5000)
// log()
// log()
// log()

// debounce  原理讲解:
/**
 * 0s ---> 1s ---> 2s --->3s...
 * 一定要理解：这三个函数都是同步操作，所以他们都在 0-1s这个时间段内瞬间完成的：
 *  log()#1  // timeout#1
 *  log()#2  // 发现 timeout#1! 取消之，然后设置timeout#2
 *  log()#3  // 发现 timeout#2! 取消之，然后设置timeout#3
 *   // 所以, log()#结束后，就只剩下 timeout#3在独自等待了
 *
 */
