const Dummy1 = (delay) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({
        status: "fullfilled",
        time: delay,
      });
    }, delay);
  });
  return pr;
};
const Dummy2 = (delay) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({
        status: "fullfilled",
        time: delay,
      });
    }, delay);
  });
  return pr;
};
const Dummy3 = (delay) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      rej({
        status: "rej",
        time: delay,
      });
    }, delay);
  });
  return pr;
};

Promise.all([Dummy1(5000), Dummy2(2000), Dummy3(4000)]).then((result) =>
  console.log(result)
);
