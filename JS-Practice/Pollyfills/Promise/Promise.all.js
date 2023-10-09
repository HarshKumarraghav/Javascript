const Dummy1 = (d) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ status: "sucess", time: d });
    }, d);
  });
  return pr;
};

const Dummy2 = (d) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ status: "sucess", time: d });
    }, d);
  });
  return pr;
};

const Dummy3 = (d) => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res({ status: "sucess", time: d });
    }, d);
  });
  return pr;
};

Promise.all([Dummy1(6000), Dummy2(4000), Dummy3(5000)]).then((result) =>
  console.log("result", result)
);

function MyPromiseAll(context) {
  if (!Array.isArray(context))
    throw new TypeError(`${context} is not a valid array`);
  const Output = [];
  let Count = 0;
  const pr = new Promise((res, rej) => {
    context.forEach((Promise, index) => {
      Promise.then((result) => {
        Output[index] = result;
        Count++;
        if (context.length >= Count) return res(Output);
      }).catch((err) => rej(err));
    });
  });
  return pr;
}
Promise.all([Dummy1(6000), Dummy2(4000), Dummy3(5000)]).then((result) =>
  console.log("Mypromis", result)
);
