// Firstly how Call work
function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}
const User = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  getFullName,
};
const User2 = {
  firstName: "Jill",
  lastName: "Doe",
  age: 20,
};

User.getFullName.call(User2);
