export const isFalsy = (value) => (value === 0 ? false : !value);

// don't mess up original data
export const CleanUpObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    // "!value" means undefined/null/empty string
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
