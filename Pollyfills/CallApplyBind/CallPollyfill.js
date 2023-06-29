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
Function.prototype.myCall = function (context, ...args) {
  if (typeof context !== "object" || context === null) {
    throw new TypeError("Invalid context. Context must be an object.");
  }
  if (typeof this !== "function") {
    throw new TypeError("This is not the function");
  }
  const uniqueid = `${Date.now()}`;
  context[uniqueid] = this;
  const result = context[uniqueid](...args);
  delete context[uniqueid];
  return result;
};

console.log(
  "My Call",
  User.getFullName.myCall(User2, User2.age, "Software Engineer")
);
