//  Print 1 to 5 after every second
/**
 * The function uses a for loop and setTimeout to print the value of i in the console every 3 seconds,
 * up to a maximum of 5.
 */
function printInTermOfLet() {
  for (let i = 1; i < 6; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
printInTermOfLet();
/**
 * The function uses a for loop and setTimeout to print the value of i after a certain delay, using the
 * var keyword to declare the variable.
 */
function printInTermOfVar() {
  for (var i = 1; i < 6; i++) {
    function closure(val) {
      setTimeout(() => {
        console.log(val);
      }, val * 1000);
    }
    closure(i);
  }
}

printInTermOfVar();
