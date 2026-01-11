

function analyzeArray(arr) {
  let sum = 0;
  let max = arr[0];
  let min = arr[0];
  let unique = [];

  for (let num of arr) {
    sum += num;

    if (num > max) max = num;
    if (num < min) min = num;

    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  console.log("Sum:", sum);
  console.log("Max:", max);
  console.log("Min:", min);
  console.log("Unique:", unique);
}

analyzeArray([1,2,2,3,4,1]);
