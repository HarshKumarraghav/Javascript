//  some sample promises

const Dummy1 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ hello: "Hello world first Time", time: t });
    }, t);
  });
  return pr;
};
const Dummy2 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ hello: "Hello world second time", time: t });
    }, t);
  });
  return pr;
};

const Dummy3 = (t) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ hello: "Hello world third time", time: t });
    }, t);
  });
  return pr;
};
Promise.all([Dummy1(5000), Dummy2(2000), Dummy3(4000)]).then((res) =>
  console.log(res)
);

const myPromiseAll = (args) => {
  if (!Array.isArray(args)) {
    throw new TypeError("Not a valid argument");
  }
  const pr = new Promise((res, rej) => {
    const output = [];
    let count = 0;
    args.forEach((elm, i) => {
      elm
        .then((result) => {
          output[i] = result;
          count++;
          if (count === args.length) {
            res(output);
          }
        })
        .catch((err) => rej(err));
    });
  });
  return pr;
};
myPromiseAll([Dummy1(5000), Dummy2(2000), Dummy3(4000)]).then((res) =>
  console.log(res)
);
