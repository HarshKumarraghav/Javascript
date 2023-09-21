const obj1 = {
  firstName: "Harsh",
  lastName: "Kumar",
  age: 21,
  getFullName: function (age, proffesion, year) {
    return `${this.firstName} ${this.lastName} is ${age} year old and he is a ${proffesion} has ${year} year of experience.`;
  },
};
const obj2 = {
  firstName: "Harsh",
  lastName: "Kumar",
  age: 19,
};
console.log(obj1.getFullName.bind(obj2, obj2.age, "Software Engineer")(1.7));

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this}.myBind is not a function`);
  const id = `${Date.now()}`;

  const bind = (...newArg) => {
    context[id] = this;
    const result = context[id](...args, ...newArg);
    return result;
  };
  return bind;
};
console.log(
  "myBind",
  obj1.getFullName.myBind(obj2, obj2.age, "Software Engineer")(1.7)
);
