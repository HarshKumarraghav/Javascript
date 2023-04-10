function SubmissionOfNumber(n) {
  let sum = 0;
  if (n <= 0) {
    return 0;
  }
  sum = n + SubmissionOfNumber(n - 1);
  return sum;
}
let n = 3;
let result = SubmissionOfNumber(n);
console.log(result);
