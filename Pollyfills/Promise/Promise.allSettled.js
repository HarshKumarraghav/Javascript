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
      rej({ hello: "Hello world third time", time: t });
    }, t);
  });
  return pr;
};
const MyPromiseAllSettled = (args) => {
  const PromiseMap = args.map((pr) => {
    return pr
      .then((value) => {
        return { status: "fullfilled", value };
      })
      .catch((reason) => {
        return { status: "rejected", reason };
      });
  });
  return Promise.all(PromiseMap);
};

MyPromiseAllSettled([Dummy2(2000), Dummy1(5000), Dummy3(4000)]).then((Result) =>
  console.log("Result", Result)
);
