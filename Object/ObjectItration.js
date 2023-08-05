const User = {
  name: "John",
  age: 30,
  isAdmin: true,
  email: "JohnDoe@gmail.com",
  "user-address": {
    city: "New York",
  },
  skills: ["html", "css", "js"],
};

for (key in User) {
  console.log(User[key]);
}
