// Firstly how Call work
function getFullName(age, dessignation) {
  return `${this.firstName} ${this.lastName} is ${age} and he is a ${dessignation}`;
}
const User = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  getFullName,
};
const User2 = {
  firstName: "Jill",
  lastName: "Doe",
  age: 20,
};

console.log(User.getFullName.call(User2, User2.age, "Software Engineer"));

// let's write own version of call method
Function.prototype.myCallFunction = function (context, ...args) {
  if (typeof context !== "object")
    throw new TypeError(`${context} not a valid object`);
  if (typeof this !== "function")
    throw new TypeError(`${this} not a valid object`);
  const Index = `${Date.now()}`;
  context[Index] = this;
  const result = context[Index](...args);
  delete context[Index];
  return result;
};

console.log(
  "My Call",
  User.getFullName.myCallFunction(User2, User2.age, "Software Engineer")
);
