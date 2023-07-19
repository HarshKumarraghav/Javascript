let count = 0;
const fetechData = () => {
  console.log("Fetching Data...", count++);
};
const myDebounceCode = (fn, d) => {
  let timer;
  const debounce = (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, d);
  };
  return debounce;
};
const getData = myDebounceCode(fetechData, 300);
