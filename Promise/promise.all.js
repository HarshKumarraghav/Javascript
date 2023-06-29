const example1 = () => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res("Dummy example 1");
    }, 2000);
  });
  return pr;
};
const example2 = () => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res("Dummy example 2");
    }, 6000);
  });
  return pr;
};
const example3 = () => {
  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res("Dummy example 3");
    }, 5000);
  });
  return pr;
};

example1().then((res) => console.log("response1", res));
example2().then((res) => console.log("response2", res));
example3().then((res) => console.log("response3", res));
Promise.all([example1(), example2(), example3()]).then((res) =>
  console.log("response.all", res)
);
