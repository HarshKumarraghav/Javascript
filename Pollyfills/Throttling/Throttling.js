const myThrottle = (fn, d) => {
  let last = 0;
  const throttle = (...arg) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return fn(...arg);
  };
  return throttle;
};
const clickBtn = document.getElementsByClassName("btn_click");
const clickHanlder = () => {
  console.log("click");
};
clickBtn[0].addEventListener("click", myThrottle(clickHanlder, 2000));
