function PrintName5Time(count, n) {
  if (count >= n) {
    return;
  }
  count++;
  console.log(count, `: Harsh!`);
  PrintName5Time(count);
  return;
}
let count = 0;
let n = 5;
PrintName5Time(count, n);
