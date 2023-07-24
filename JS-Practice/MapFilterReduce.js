// Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
const Student = [
  { name: "A", marks: 20 },
  { name: "B", marks: 30 },
  { name: "C", marks: 40 },
  { name: "D", marks: 50 },
  { name: "E", marks: 60 },
  { name: "F", marks: 70 },
  { name: "G", marks: 80 },
  { name: "H", marks: 90 },
];

Array.prototype.myMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};
Array.prototype.MyFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
Array.prototype.MyReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }
  return accumulator;
};
const TotalMarks = Student.myMap((item) => {
  if (item.marks < 60) {
    item.marks += 20;
  }
  return item;
})
  .MyFilter((item) => item.marks > 60)
  .MyReduce((acc, cur) => (acc += cur.marks), 0);
console.log("TotalMarks", TotalMarks);
