let count = 0;
const FetchData = () => {
  console.log("count", count++);
};

const MyDebounce = (fn, d) => {
  if (typeof fn !== "function") throw new TypeError("Not a valid function!");
  let timer;
  const Debounce = (...arg) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => fn(...arg), d);
  };
  return Debounce;
};

const getData = MyDebounce(FetchData, 300);
