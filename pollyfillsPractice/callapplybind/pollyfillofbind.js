function getFullName(age, proffession) {
  return `${
    this.firstName + " " + this.lastName
  } is ${age} year old and he is a ${proffession}`;
}
const user1 = {
  firstName: "Harsh",
  lastName: "raghav",
  age: 21,
  proffession: "Software Engineer",
  getFullName,
};
const user2 = {
  firstName: "Anmol",
  lastName: "raghav",
  age: 18,
  proffession: "Software Engineer Intern",
};

console.log(user1.getFullName.bind(user2, user2.age, user2.proffession)());

Function.prototype.myBind = function (context, ...args) {
  if (typeof context !== "object") {
    throw new TypeError(`${context} this is not a valid object`);
  }
  const id = Date.now();
  const bind = (...newArgs) => {
    context[id] = this;
    const result = context[id](...args, ...newArgs);
    delete context[id];
    return result;
  };
  return bind;
};
console.log(
  "my",
  user1.getFullName.myBind(user2, user2.age, user2.proffession)()
);

console.log(user2);
