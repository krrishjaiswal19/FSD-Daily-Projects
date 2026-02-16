// async keyword kya hota hai?
// async function hamesha Promise return karta hai
// Iske andar hum await use kar sakte hain
async function sayHello() {
  return "Hello World";
}
sayHello().then(res => console.log(res));

// 👉 Output: Hello World
// 👉 JS isse internally Promise.resolve("Hello World") bana deta hai

// await keyword kya karta hai?
// await Promise ke resolve hone ka wait karta hai
// Sirf async function ke andar kaam karta hai
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data mil gaya");
    }, 2000);
  });
}
async function showData() {
  let result = await getData();
  console.log(result);
}
showData();


//👉 Jab tak Promise resolve nahi hota, code wait karta hai
//👉 Callback / .then() ka jhanjhat khatam 😄

// try / catch kyun use hota hai?
// Error handling ke liye
// Promise reject ho jaye ya runtime error aaye to crash nahi hota
async function demo() {
  try {
    let res = await fetch("wrong-url");
    console.log(res);
  } catch (error) {
    console.log("Error aaya:", error);
  }
}
demo();

// 👉 Error safe tareeke se handle ho jata hai

// Fetch API (GET) kya hota hai?
// Server / API se data laane ke liye
// Ye bhi Promise return karta hai
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));

/* Flow samjho:
fetch() → response promise
res.json() → JSON data promise
Final data milta hai */

// Fetch + async/await (Best Practice)
async function getUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
getUsers();


// 👉 Clean
// 👉 Readable
// 👉 Professional 👍

// JSON Handling kya hoti hai?
// API se data JSON format me aata hai
// Use JS object banane ke liye:
// 👉 response.json()

