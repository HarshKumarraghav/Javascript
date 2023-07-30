let count = 0;
const fetechData = () => {
  console.log("Fetching Data...", count++);
};
const myDebounceCode = (fn, d) => {
  let timer;
  const Debounce = (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, d);
  };
  return Debounce;
};
const getData = myDebounceCode(fetechData, 300);
