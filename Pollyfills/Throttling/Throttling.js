let count = 0;
const ButtonClickHandler = () => {
  console.log("count", count++);
};
const MyThrottle = (fn, d) => {
  if (typeof fn !== "function") throw new TypeError("Not a valid function");
  let last = 0;
  const Throttle = (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    fn(...args);
  };
  return Throttle;
};

const btn_Click = document.getElementsByClassName("btn_click");
btn_Click[0].addEventListener("click", MyThrottle(ButtonClickHandler, 2000));
