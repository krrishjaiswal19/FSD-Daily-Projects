// Destructuring (Array + Object)
// 1. Array Destructuring
//    Array ke values ko direct variables me nikalna = destructuring
      let marks = [80, 85, 90];

      let [maths, english, science] = marks;

      console.log(maths);   // 80
      console.log(english); // 85
//    Order matter karta hai


// 2. Object Destructuring
//    Object se properties nikalna by name

let student1 = {
  name: "Rahul",
  age: 21,
  course: "BCA"
};

let { name, age } = student1;

console.log(name); // Rahul
console.log(age);  // 21
// Property name same hona chahiye


// Spread Operator (...)
// 1. Arrays merge karna
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let merged = [...arr1, ...arr2];
console.log(merged);
// 2. Object copy / merge
let s1 = { name: "Aman" };
let s2 = { marks: 90 };
let student = { ...s1, ...s2 };
// Shallow copy banta hai

// Rest Operator (...)
// Multiple values ko single array me collect karta hai
function sum(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
sum(10, 20, 30); // 60


// Destructuring ke sath Rest
let nums = [1, 2, 3, 4];
let [first, second, ...rest] = nums;
console.log(rest); // [3,4]