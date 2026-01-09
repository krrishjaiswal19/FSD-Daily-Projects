# JavaScript Start (Basics)

## What is JavaScript?
JavaScript ek programming language hai jo website ko interactive banati hai. <br>
Simple words me:<br> HTML → structure <br> CSS → design <br> JavaScript → logic + action <br>
Examples: <br> Button click par message <br> Form validation <br> Dynamic content change

## How JavaScript Runs (Browser Engine)
Jab browser JS code dekhta hai: <br> Browser ka JS engine (Chrome → V8) code read karta hai <br>Code ko line by line execute karta hai <br> Output browser console ya page par show hota hai <br>👉 JS top to bottom chalti hai. <br>

## `console.log()`
`console.log()` ka use output check karne ke liye hota hai. <br>`console.log("Hello World");` <br>`console.log(10 + 20);` <br>✔ Debugging ke liye sabse important tool. <br>

## Variables (let, const)
Variable = data store karne ka box. <br>let <br> `let age = 20;` <br>`age = 21;` // allowed <br>const  <br>`const pi = 314;` <br> `pi = 3.15;` // ❌ error <br>Rule yaad rakho: <br>Change karna hai → let <br>Fix value hai → const <br>

## Data Types
JavaScript me common data types: <br> `let name = "Rahul"; `    // string <br>`let age = 20;  `        // number <br>`let isPass = true;`     // boolean <br>`let x;      `           // undefined <br>`let value = null; `    // null <br>

## Basic Input / Output
Input (user se data lena) <br>
`let name = prompt("Enter your name");` <br>
Output <br>
`console.log(name);` <br>
`alert("Hello " + name);` <br>
⚠ prompt se data string me aata hai. <br>
Number banane ke liye: <br>
`let num = Number(prompt("Enter number"));` <br>
