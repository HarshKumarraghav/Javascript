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

//This is how apply work.
console.log(User.getFullName.apply(User2, [User2.age, "Software Engineer"]));

Function.prototype.myApply = function (context, args) {
  if (typeof context !== "object" || context === null) {
    throw new TypeError("Invalid context. Context must be an object.");
  }
  if (!Array.isArray(args) || args === null) {
    throw new TypeError("Invalid argument. Context must be an array.");
  }
  if (typeof this !== "function") {
    throw new TypeError("it is not a function");
  }
  uniqueId = `${Date.now()}`;
  context[uniqueId] = this;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
};
console.log(User.getFullName.myApply(User2, [User2.age, "Software Engineer"]));
