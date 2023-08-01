const MyDebounce = (fn, t) => {
  if (typeof fn !== "function") throw new TypeError("Not a valid function");
  let timer;
  const Debounce = (...arg) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => fn(...arg), t);
  };
  return Debounce;
};
