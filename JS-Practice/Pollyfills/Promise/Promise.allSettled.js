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
      rej({ status: "failed", time: d });
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

Promise.allSettled([Dummy1(6000), Dummy2(4000), Dummy3(5000)]).then((result) =>
  console.log("result", result)
);

function MyPromiseAllSettled(context) {
  const mappedPromise = context.map((promise) =>
    promise
      .then((value) => ({ status: "fulfilled", value }))
      .catch((reason) => ({ status: "rejected", reason }))
  );
  return Promise.all(mappedPromise);
}
MyPromiseAllSettled([Dummy1(6000), Dummy2(4000), Dummy3(5000)]).then((result) =>
  console.log("result", result)
);
