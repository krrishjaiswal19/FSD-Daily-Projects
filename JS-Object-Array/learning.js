// WHAT IS ARRAY OF OBJECT?
// When we need to store multiple objects in one list then we use array of objects 
//Example: 
//Student list
let student = [
    {name:"krrish", age:19, result:67},
    {name:"Rishu", age:20, result:75},
    {name:"Shubham", age:21, result:"fail"},
    {name:"Vivek", age:20, result:"promoted"},
    {name:"Anand", age:21, result:85}
];
//List of product
let products = [
    { id: 1, name: "Mobile", price: 15000, inStock: true },
    { id: 2, name: "Laptop", price: 55000, inStock: false },
    { id: 3, name: "Headphones", price: 2000, inStock: true },
    { id: 4, name: "Keyboard", price: 1200, inStock: true },
    { id: 5, name: "Mouse", price: 600, inStock: false }
];
//Record of Employees 
let employees = [
    { id: 1, name: "Rahul", role: "Frontend Developer", salary: 45000 },
    { id: 2, name: "Aman", role: "Backend Developer", salary: 55000 },
    { id: 3, name: "Neha", role: "UI/UX Designer", salary: 40000 },
    { id: 4, name: "Karan", role: "QA Engineer", salary: 38000 },
    { id: 5, name: "Priya", role: "HR Executive", salary: 35000 }
];
// student, products and employees is array
// Every element of array is object
// object have data like name,age,result,id,price,instock, salary,role

// DATA MODELLING
// presenting real-world data in form of code is calling data modelling 
// EXAMPLE:student model
{
    name =  "Rahul",
    marks= [maths=70, english=80, science=90],
    total= 240,
    percentage= 80
}

//Object Destructuring (IMPORTANT)
//extracting direct value from object

let student1 = {
    name: "Rahul",
    marks: 85
};

    let { name, marks } = student;

    console.log(name);   // Rahul
    console.log(marks);  // 85

//Spread Operator (basic)
// updating data of object without delted/replace previous data
let student2 = { name: "Krrish", marks: 80 };

let updatedStudent = {
  ...student,
    marks: 90
};

console.log(updatedStudent);
