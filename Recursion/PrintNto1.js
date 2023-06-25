function PrintNto1(n) {
  if (n <= 0) {
    return;
  }

  n--;
  PrintNto1(n);
  console.log("Printing:", n);
}
let n = 10;
PrintNto1(n);
