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

console.log(user1.getFullName.apply(user2, [user2.age, user2.proffession]));

Function.prototype.myApply = function (context, args) {
  if (!Array.isArray(args) || args === null) {
    throw new TypeError("Invalid argument. Context must be an array.");
  }
  if (typeof this !== "function") {
    throw new TypeError("it is not a function");
  }
  const id = Date.now();
  context[id] = this;
  const result = context[id](...args);
  delete context[id];
  return result;
};
console.log(
  "myApply",
  user1.getFullName.myApply(user2, [user2.age, user2.proffession])
);
console.log(user2);
