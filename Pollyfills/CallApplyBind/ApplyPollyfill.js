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
  if (typeof this !== "function")
    throw new TypeError(`${this} is not a valid function`);
  if (typeof context !== "object")
    throw new TypeError(`${context} is not a valid object`);
  if (!Array.isArray(args)) throw new TypeError(`${args} is not a valid Array`);
  const Index = `${Date.now()}`;
  context[Index] = this;
  const result = context[Index](...args);
  delete context[Index];
  return result;
};
console.log(User.getFullName.myApply(User2, [User2.age, "Software Engineer"]));
console.log(User2);
