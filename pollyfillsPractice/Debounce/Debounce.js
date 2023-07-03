let count = 0;
const getData = () => {
  console.log("Fetching data of search...", count++);
};

const myDebounce = (fn, t) => {
  let timer;
  const debounce = (...args) => {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
  return debounce;
};

const betterGetData = myDebounce(getData, 300);
