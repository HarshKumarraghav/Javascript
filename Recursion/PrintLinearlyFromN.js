function PrintFrom1ToN(N, n) {
  if (N <= 0) {
    return;
  }
  N--;
  console.log("Printing first:", n);

  PrintFrom1ToN(N, n - 1);
  console.log("Printing last:", n);
}
let N = 10;
let n = N;
const result = PrintFrom1ToN(N, n);
