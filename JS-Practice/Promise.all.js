const Dummy1 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ time: t });
    }, t);
  });
  return pr;
};
const Dummy2 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ time: t });
    }, t);
  });
  return pr;
};
const Dummy3 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ time: t });
    }, t);
  });
  return pr;
};

Promise.all([Dummy1(6000), Dummy2(3000), Dummy3(5000)]).then((res) =>
  console.log("res", res)
);

const MyPromiseAll = (context) => {
  if (!Array.isArray(context)) throw new TypeError("not a valid array");
  const Output = [];
  let Count = 0;
  const Pr = new Promise((res, rej) => {
    context.forEach((elem, i) => {
      elem
        .then((result) => {
          Output[i] = result;
          Count++;
          if (Count === context.length) res(Output);
        })
        .catch((err) => rej(err));
    });
  });
  return Pr;
};

MyPromiseAll([Dummy2(2000), Dummy1(5000), Dummy3(4000)]).then((res) =>
  console.log("mypromise.all", res)
);
