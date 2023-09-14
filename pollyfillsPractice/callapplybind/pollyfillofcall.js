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
  if (typeof context !== "object")
    throw new TypeError(`${context} is not a valid object`);
  const id = Date.now();
  context[id] = this;
  const result = context[id](...args);
  delete context[id];
  return result;
};
console.log("myCall", user1.getFullName.myCall(user2, 18, "software Engineer"));

console.log(user2);
