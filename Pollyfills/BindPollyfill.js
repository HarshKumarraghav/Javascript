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

// This is how bind work

console.log(
  "bind method",
  User.getFullName.bind(User2, 20, "Software Engineer")()
);

Function.prototype.myBind = function (context, ...args) {
  if (typeof context !== "object" || context === null) {
    throw new TypeError("Invalid context. Context must be an object.");
  }
  if (typeof this !== "function") {
    throw new TypeError(`${this} is not the function`);
  }
  const uniqueId = `${Date.now()}`;
  context[uniqueId] = this;
  const bind = function (...newargs) {
    return context[uniqueId](...args, newargs);
  };
  return bind;
};
console.log(
  "bind method",
  User.getFullName.myBind(User2, 20)("Software Engineer")
);
