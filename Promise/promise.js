const cart = ["Car", "Bus", "Train"];

const CreateCart = (cart) => {
  const PR = new Promise((res, rej) => {
    if (!validCart(cart)) {
      const err = new Error("Cart is not valid");

      rej(err);
    }
    setTimeout(() => {
      const DataObj = { orderid: "123243" };
      setTimeout(() => res(DataObj), 5000);
    }, 500);
  });
  return PR;
};
const validCart = (cart) => {
  console.log("cart", cart);
  return true;
};
CreateCart(cart).then((data) => console.log(data));
