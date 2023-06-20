// const cart = ["apple", "orange", "pear"];
// const CreateOrder = (cart) => {
//   const pr = new Promise((resolve, reject) => {
//     if (!validCart(cart)) {
//       reject("Invalid Cart");
//     }
//     setTimeout(() => {
//       resolve({ orderId: 1234 });
//     }, 2000);
//   });
//   return pr;
// };

// CreateOrder(cart).then((order) => {
//   console.log(order);
// });

// const validCart = () => {
//   return true;
// };

console.log(this);
const obj = {
  name: "John",
  getName: function () {
    console.log("this", this);
  },
};

obj.getName();
