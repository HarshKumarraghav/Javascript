const obj1 = {
  firstName: "Harsh",
  lastName: "Raghav",
  age: 21,
  getFullName: function (age, profesion) {
    return `${this.firstName} ${this.lastName} is ${age} year old and he is ${profesion}`;
  },
};

const obj2 = {
  firstName: "Anmol",
  lastName: "Raghav",
  age: 19,
  getFullName: function (age, profesion) {
    return `${this.firstName} ${this.lastName} is ${age} year old and he is ${profesion}`;
  },
};
console.log(obj1.getFullName.apply(obj2, [obj2.age, "Software Engineer"]));

Function.prototype.myApply = function (context, arg) {
  if (typeof this !== "function")
    throw new TypeError(`${this}.myApply is not a function`);
  if (!Array.isArray(arg)) throw new TypeError(`${arg} is not an array.`);

  const id = `${Date.now()}`;
  context[id] = this;
  const result = context[id](...arg);
  delete context[id];
  return result;
};

console.log(
  "myApply",
  obj1.getFullName.myApply(obj2, [obj2.age, "Software Engineer"])
);
