function sayMyName(age, position) {
  return `${(this.name, age, position)}`;
}

const obj1 = {
  name: "Harsh",
  sayMyName,
};

const obj2 = {
  name: "Raghav",
};

// Understanding of "this" Keyword.
console.log(obj1.sayMyName(20, "Software Engineer"));
// understanding of "call" function.
console.log(obj1.sayMyName.call(obj2, 20, "Software Engineer"));
// understanding of "apply" function.
console.log(obj1.sayMyName.apply(obj2, [20, "Software Engineer"]));
// understanding of "bind" function.
console.log(obj1.sayMyName.bind(obj2, 20, "Software Engineer"));
