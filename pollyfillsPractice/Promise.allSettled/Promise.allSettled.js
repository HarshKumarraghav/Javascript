const Dummy1 = (d) => {
  const Pr = new Promise((res) => {
    setTimeout(() => {
      res({ greeting: "Hello World First Time.", time: d });
    }, d);
  });
  return Pr;
};
const Dummy2 = (d) => {
  const Pr = new Promise((res) => {
    setTimeout(() => {
      res({ greeting: "Hello World Second Time.", time: d });
    }, d);
  });
  return Pr;
};
const Dummy3 = (d) => {
  const Pr = new Promise((res, rej) => {
    setTimeout(() => {
      rej({ greeting: "Hello World Third Time.", time: d });
    }, d);
  });
  return Pr;
};

Promise.allSettled([Dummy1(3000), Dummy2(5000), Dummy3(4000)]).then((result) =>
  console.log("result", result)
);

const MyPromiseAllSettled = (args) => {
  if (!Array.isArray(args)) throw new TypeError("Not a valid parameter");
  const mappedArray = args.map((promise) =>
    promise
      .then((value) => ({ status: "fullfilled", value }))
      .catch((reason) => ({ status: "rejected", reason }))
  );
  return Promise.all(mappedArray);
};

MyPromiseAllSettled([Dummy1(3000), Dummy2(5000), Dummy3(4000)]).then((result) =>
  console.log("MyPromiseAllSettled", result)
);
