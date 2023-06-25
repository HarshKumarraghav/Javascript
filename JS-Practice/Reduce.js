const arr = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    age: 24,
  },
  {
    id: "2",
    firstname: "Jane",
    lastname: "Doe",
    age: 22,
  },
  {
    id: "3",
    firstname: "Jack",
    lastname: "Doe",
    age: 20,
  },
  {
    id: "4",
    firstname: "Jill",
    lastname: "Doe",
    age: 24,
  },
];

const Output = arr.reduce((acc, current) => {
  if (current.age < 30) {
    acc.push(current.firstname);
  }
  return acc;
}, []);

console.log(Output);
