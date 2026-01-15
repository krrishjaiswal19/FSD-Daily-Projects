forEach();

let arr = [10, 20, 30];

arr.forEach((num) => {
  console.log(num * 2);
});


map(); 
let nums1 = [1, 2, 3, 4];

let doubled = nums1.map((n) => {
  return n * 2;
});

console.log(doubled); // [2,4,6,8]

filter();
let newArr = arr.filter((item) => {
  return condition;
});
let nums2 = [1,2,3,4,5,6];
let evens = nums2.filter((n) => {
  return n % 2 === 0;
});
console.log(evens); // [2,4,6]

reduce();
arr.reduce((acc, curr) => {
  return updatedAcc;
}, initialValue);

let nums = [10, 20, 30];

let sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 60