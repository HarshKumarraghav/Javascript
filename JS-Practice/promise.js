// Create own promise using cart example
const Cart = ["Apple", "Banana", "Orange"];
const CreateCart = (cart) => {
  const pr = new Promise((res, rej) => {
    if (!validCart(cart)) {
      const err = new Error("not a valid cart");
      rej(err);
    }
    const DataObj = { orderid: "123243" };
    setTimeout(() => res(DataObj), 5000);
  });
  return pr;
};
const validCart = (cart) => {
  if (cart.length === 0) {
    return false;
  } else {
    return true;
  }
};

CreateCart(Cart).then((data) => console.log("orderid", data.orderid));
