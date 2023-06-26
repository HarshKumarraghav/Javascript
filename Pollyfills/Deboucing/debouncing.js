let count = 0;
const fetechData = () => {
  console.log("Fetching Data...", count++);
};
const myDebounce = (fn, d) => {
  let timer;
  const debounce = (...arg) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => fn(...arg), d);
  };
  return debounce;
};
const getData = myDebounce(fetechData, 300);
