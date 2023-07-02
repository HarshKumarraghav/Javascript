function getFullName(age, prof) {
  return `${
    this.firstName + " " + this.lastName
  } is ${age} year old and he is a ${prof}`;
}
const user1 = {
  firstName: "Harsh",
  lastName: "Raghav",
  age: 21,
  getFullName,
};

const user2 = {
  firstName: "Anmol",
  lastName: "Raghav",
  age: 18,
  fn: "hello",
};

console.log(user1.getFullName.call(user2, 18, "software Engineer"));

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this} this function is not a valid function`);
  if (typeof context !== "object")
    throw new TypeError(`${context} is not a valid object`);
  const uniqueid = `${Date.now()}`;
  context[uniqueid] = this;
  const result = context[uniqueid](...args);
  delete context[uniqueid];
  return result;
};
console.log("myCall", user1.getFullName.myCall(user2, 18, "software Engineer"));
