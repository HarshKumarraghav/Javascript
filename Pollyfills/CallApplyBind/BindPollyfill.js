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
  if (typeof this !== "function")
    throw new TypeError(`${this} is not a valid function`);
  if (typeof context !== "object")
    throw new TypeError(`${context} is not a valid object`);
  const Index = `${Date.now()}`;
  context[Index] = this;
  const bind = (...newargs) => {
    return context[Index](...args, ...newargs);
  };
  return bind;
};
console.log(
  "bind method",
  User.getFullName.myBind(User2, 20)("Software Engineer")
);
