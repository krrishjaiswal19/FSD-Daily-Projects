/*
var (old way – problem)
Function scope hota hai
Redeclare & reassign dono allowed
Bugs create karta hai
*/
var a = 10;
var a = 20; // not allowed  (bad practice)

/*
let
Block scoped { }
Reassign allowed
Redeclare ❌
*/
let x = 10;
x = 20; // allowed
// let x = 30; 
// Use case: jab value change hone wali ho (counter, loop variable)

/*
const
Block scoped
Reassign ❌
Value fix hoti hai
*/
const PI = 3.14;
// PI = 4.5 ❌ error
/* Important:
Objects & arrays me reference const hota hai, value change ho sakti hai.
*/
const user = { name: "Rahul" };
user.name = "Aman"; // ✅ allowed

/*
Arrow Functions
 Normal Function
*/
function add(a, b) {
  return a + b;
  }
// Arrow Function
  
  const add = (a, b) => a + b;
/* Benefits:
  Short syntax
  Cleaner code
  this ka issue solve hota hai*/
//Single parameter 
  const square = x => x * x;

//Template Literals (``)
// Old way
let name1 = "Rahul";
console.log("Hello " + name1);
// ES6 way
let name2 = "Rahul";
console.log(`Hello ${name2}`);
// Multi-line support:
console.log(`
Name: Rahul
Role: Developer
`);

// Default Parameters
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
  }

  greet();       // Hello Guest
  greet("Aman"); // Hello Aman