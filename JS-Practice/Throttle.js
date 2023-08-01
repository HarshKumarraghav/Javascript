const Throttle = (fn, d) => {
  if (typeof fn !== "function") throw new TypeError("Not a valid array");
  let Last = 0;
  const Throttle = (...arg) => {
    let Now = new Date().getTime();
    if (Now - Last < d) return;
    Last = Now;
    fn(...arg);
  };
  return Throttle;
};
