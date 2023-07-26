//  Print 1 to 5 after every second
/**
 * The function uses a for loop and setTimeout to print the value of i in the console every 3 seconds,
 * up to a maximum of 5.
 */
function printInTermOfLet() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 3000);
  }
}
printInTermOfLet();
/**
 * The function uses a for loop and setTimeout to print the value of i after a certain delay, using the
 * var keyword to declare the variable.
 */
function printInTermOfVar() {
  for (var i = 0; i < 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 3000);
    }
    close(i);
  }
}

printInTermOfVar();
