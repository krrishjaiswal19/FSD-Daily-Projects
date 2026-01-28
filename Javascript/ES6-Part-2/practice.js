// Student Object Destructuring
let student = {
  name: "Krrish",
  marks: 88,
  city: "Delhi"
};
let { name, marks } = student; // krrish, 88

// Merge Arrays using Spread

let batch1 = ["A", "B"];
let batch2 = ["C", "D"];
let all = [...batch1, ...batch2];

// Data Formatter App (Console Based)

function formatStudent({ name, marks }, ...subjects) {
  return {
    name,
    marks,
    subjects
};
}

let result = formatStudent(
{ name: "Rahul", marks: 85 },
    "Math",
    "Science",
    "English"
);
console.log(result);

/*
Use hua:
Object destructuring
Rest operator
Clean ES6 syntax
*/