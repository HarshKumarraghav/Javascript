const myThrottle = (fn, t) => {
  let last = 0;
  const throttle = (...args) => {
    let now = new Date().getTime();
    if (now - last < t) return;
    last = now;
    fn(...args);
  };
  return throttle;
};
const clickBtn = document.getElementsByClassName("btn_click");
const clickHanlder = () => {
  console.log("click");
};
const betterClick = myThrottle(clickHanlder, 2000);
clickBtn[0].addEventListener("click", betterClick);
