const myThrottleCode = (fn, d) => {
  let last = 0;
  const Throttle = (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    fn(...args);
  };
  return Throttle;
};
const clickBtn = document.getElementsByClassName("btn_click");
const clickHanlder = () => {
  console.log("click");
};
clickBtn[0].addEventListener("click", myThrottleCode(clickHanlder, 2000));
