const obj1 = {
  firstName: "Harsh",
  lastName: "Kumar",
  age: 21,
  getFullName: function (age, proffesion) {
    return `${this.firstName} ${this.lastName} is ${age} year old and he is a ${proffesion}`;
  },
};
const obj2 = {
  firstName: "Harsh",
  lastName: "Kumar",
  age: 19,
};
console.log(obj1.getFullName.call(obj2, obj2.age, "Software Engineer"));

Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this}.myCall is not a function`);
  const id = `${Date.now()}`;
  context[id] = this;
  const result = context[id](...args);
  delete context[id];
  return result;
};
console.log(
  "My Call",
  obj1.getFullName.myCall(obj2, obj2.age, "Software Engineer")
);
