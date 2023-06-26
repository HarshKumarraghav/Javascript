function userInfo(age, work) {
  return `${this.firstName} ${this.lastName} is ${age} year old and he is a ${work}`;
}

const user1 = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  userInfo,
};
const user2 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
};

// this is how call() method works
console.log(user1.userInfo.call(user2, user1.age, "Software Engineer"));
// this is how apply() method works
console.log(user1.userInfo.apply(user2, [user1.age, "Software Engineer"]));
// this is how bind() method works
console.log(user1.userInfo.bind(user2, user1.age)("Software Engineer"));

// Create a pollyfill for call() method
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this} is not function`);
  if (typeof context !== "object" || context === null)
    throw new TypeError(`${context} not a valid object`);
  const uniqueId = `${Date.now()}`;
  context[uniqueId] = this;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
};
// this is how myCall() method works
console.log(user1.userInfo.myCall(user2, user1.age, "Software Engineer"));
// Create a pollyfill for apply() method
Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function")
    throw new TypeError(`${this} is not function`);
  if (typeof context !== "object" || context === null)
    throw new TypeError(`${context} not a valid object`);
  if (!Array.isArray(args)) throw new TypeError(`${args} not a valid Array`);
  const uniqueId = `${Date.now()}`;
  context[uniqueId] = this;
  const result = context[uniqueId](...args);
  delete context[uniqueId];
  return result;
};
// this is how myApply() method works
console.log(user1.userInfo.myApply(user2, [user1.age, "Software Engineer"]));

// // Create a pollyfill for bind() method
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function")
    throw new TypeError(`${this} is not function`);
  if (typeof context !== "object" || context === null)
    throw new TypeError(`${context} not a valid object`);
  const uniqueId = `${Date.now()}`;
  context[uniqueId] = this;
  const bind = function (...newargs) {
    return context[uniqueId](...args, ...newargs);
  };
  return bind;
};
// this is how myBind() method works
console.log(user1.userInfo.myBind(user2, user1.age)("Software Engineer"));
