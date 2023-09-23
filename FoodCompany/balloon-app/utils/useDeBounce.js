import { useEffect } from "react";
import { useState } from "react";

export const useDebounce = (value, d) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, d);
    return () => clearTimeout(timer);
  }, [value, d]);
  return debouncedValue;
};
