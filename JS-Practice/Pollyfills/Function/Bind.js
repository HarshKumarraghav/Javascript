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

console.log(User1.userInfo.bind(User1, "Software Engineer")(2));

Function.prototype.MyBind = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this}.MyCall is not a function.`);
  const bind = (...newArgs) => {
    const index = Date.now();
    context[index] = this;
    const result = context[index](...args, ...newArgs);
    return result;
  };
  return bind;
};
console.log(User1.userInfo.MyBind(User1, "Software Engineer")(2));
