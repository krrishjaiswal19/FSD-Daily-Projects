// Formula:
// BMI = weight / (height × height)

let weight = 70;   // kg
let height = 1.7; // meter

let bmi = weight / (height * height);

if (bmi < 18.5) console.log("Underweight");
else if (bmi < 25) console.log("Normal");
else console.log("Overweight");
