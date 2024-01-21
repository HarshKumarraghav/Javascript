// write a function that allow you to do this
function createBase(base) {
  return function (num) {
    return num + base;
  };
}
const addSix = createBase(6);

console.log(addSix(4));
