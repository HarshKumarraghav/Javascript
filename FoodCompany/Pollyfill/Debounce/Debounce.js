let count = 0;
const fetchData = () => {
  console.log(`fetching data: ${count++}`);
};

const MyDebounce = (fn, d) => {
  if (typeof fn !== "function")
    throw new TypeError(`${fn} is not a valid function.`);
  let timer;
  const Debounce = (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => fn(...args), d);
  };
  return Debounce;
};

const getData = MyDebounce(fetchData, 500);
