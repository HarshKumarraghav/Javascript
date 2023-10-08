const User1 = {
  firstname: "Harsh",
  lastname: "Raghav",
  age: 20,
  userInfo: function (post, exp) {
    return `${this.firstname} ${this.lastname} is ${this.age} year old and he is ${post} with ${exp} year of experience.`;
  },
};
const User2 = {
  firstname: "Anmol",
  lastname: "Raghav",
  age: 18,
};

console.log(User1.userInfo.call(User1, "Software Engineer", 2));

Function.prototype.MyCall = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this}.MyCall is not a function.`);
  const index = Date.now();
  context[index] = this;
  const result = context[index](...args);
  delete context[index];
  return result;
};
console.log(User1.userInfo.MyCall(User1, "Software Engineer", 2));
