function sumEvenOdd(n) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }

  console.log("Even Sum:", evenSum);
  console.log("Odd Sum:", oddSum);
}

sumEvenOdd(10);
