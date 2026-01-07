// Table Genertor

function printTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

printTable(5);

// Sum of Odd & Even numbers

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

// Prime number check


function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false