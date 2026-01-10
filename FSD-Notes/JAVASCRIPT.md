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

## Arithmetic Operators
Used for mathematical calculations. <br>
Operator	Meaning	Example <br>
`+`  Add	    10 + 5 → 15 <br>
`-`	 Subtract	10 - 5 → 5 <br>
`*`	 Multiply	10 * 5 → 50 <br>
`/`  Divide	    10 / 5 → 2 <br>
`%`  Remainder	10 % 3 → 1 <br>
`let a = 10, b = 3;`
`console.log(a + b);`
`console.log(a % b);`

## Comparison Operators
Used to compare two values (result → true / false) <br>
Operator	Meaning <br>
`>`	  greater than  <br>
`<`	  less than <br>
`>=`  greater or equal <br>
`<=`  less or equal <br>
`==`  equal (value) <br>
`===` equal (value + type) <br>
`console.log(5 == "5");`   // true <br>
`console.log(5 === "5");` // false <br>

## Logical Operators
Multiple conditions ko combine karne ke liye. <br>
Operator	Meaning <br>
`&&`	AND  <br>
  `           
`!`	    NOT  

`let age = 20;`  

`let hasID = true;` 

`console.log(age >= 18 && hasID); `// true <br>

## if / else / nested if
`let num = 10;` <br>
`if (num > 0) {`  <br>
`  console.log("Positive");` <br>
`} else if (num < 0) {` <br>
`  console.log("Negative");`  <br>
`} else {` <br>
  `console.log("Zero");` <br>
`}` <br>
Logic samjho: <br>
Condition true → if <br>
False → else if <br>
Sab false → else <br>

## Switch Case
When fixed values ho. <br>
`let day = 3;` <br>
`switch (day) {` <br>
  `case 1: console.log("Monday"); break;` <br>
  `case 2: console.log("Tuesday"); break;` <br>
  `case 3: console.log("Wednesday"); break;` <br>
  `default: console.log("Invalid");`<br>
  `}`
 
## JavaScript Loops
### for loop <br>
Use kab karte hain? <br>
Jab hume pehle se pata ho loop kitni baar chalega. <br>
Syntax (samajhne ke liye): <br>
`for (start; condition; update) {` <br>
  // code <br>
`}`<br>
Example: 1 se 5 print karo <br>
`for (let i = 1; i <= 5; i++) {` <br>
  `console.log(i);` <br>
`}` <br>
Flow samjho: <br>
start → condition check → code → update → repeat 

### while loop <br>
Use kab? <br>
Jab iterations fixed na ho, sirf condition pata ho. <br>
`let i = 1;` <br>
`while (i <= 5) {` <br>
  `console.log(i);` <br>
  `i++;` <br>
`}` <br>
⚠️ `i++` bhool gaye to infinite loop ban jayega. <br>
### do...while loop <br>
Special baat: <br>
Code kam se kam 1 baar zaroor chalega. <br>
`let i = 1;` <br>
`do {` <br>
  `console.log(i);` <br>
  `i++;` <br>
`} while (i <= 5);` <br>
## Functions (Most Important Concept) <br> 
Function kya hota hai? <br>
Function ek machine jaisa hota hai: <br>
input leta hai <br>
kaam karta hai <br>
output deta hai <br>
### Normal Function <br>
`function add(a, b) { `<br>
 ` return a + b; `<br>
`}` <br>
`console.log(add(5, 3));` // 8 <br>
Breakdown: <br>
a, b → parameters <br>
return → result bhejta hai <br>
### Arrow Function (Short & Modern) <br>
`const add = (a, b) => {` <br>
  `return a + b;` <br>
`};` <br>
One-line version: <br>
`const add = (a, b) => a + b;` <br>
# FSD – JavaScript Strings (Deep)
## String Traversal
Traversal ka matlab: string ke har character par ek-ek karke jana. <br> <br>
`let str = "hello"; `<br>
`for (let i = 0; i < str.length; i++) {` <br>
  `console.log(str[i]);` <br>
`}` <br> <br>
👉 str[i] se ith character milta hai <br>
👉 length batata hai total characters <br>
## length <br>
`let name = "Javascript";` <br>
`console.log(name.length);` // 10 <br> <br>
👉 spaces bhi count hote hain <br>
## toUpperCase() / toLowerCase() <br>
`let s = "HeLLo";`<br>
`console.log(s.toUpperCase());` // HELLO <br>
`console.log(s.toLowerCase());` // hello <br> <br>
👉 original string change nahi hoti (strings are immutable) <br>
## let str = "javascript"; <br>
`console.log(str.slice(0, 4)); `     // java <br>
`console.log(str.substring(0, 4)); ` // java <br> <br>
Difference: <br>
slice negative index accept karta hai <br>
substring negative index ignore karta hai <br> <br>
`str.slice(-4);`      // script <br>
`str.substring(-4);`  // javascript <br>
## split() & join() <br>
`let str = "hello world";` <br>
`let arr = str.split(" ");` <br>
`console.log(arr);` // ["hello", "world"] <br>
`let joined = arr.join("-");` <br>
`console.log(joined);` // hello-world <br> <br>
👉 string → array → string conversion ke liye use hota hai <br>
## includes() & indexOf() <br>
`let str = "javascript";` <br>
`console.log(str.includes("script"));` // true <br>
`console.log(str.indexOf("a"));` // 1 <br>
`console.log(str.indexOf("z"));` // -1 <br> <br>
👉 -1 ka matlab element nahi mila <br>
## Practice Problems <br>
### Reverse String <br>
`function reverseString(str) {` <br>
  `let rev = "";` <br>
  `for (let i = str.length - 1; i >= 0; i--) { `<br>
    `rev += str[i];` <br>
  `} `<br>
  `return rev;` <br>
`}` <br>
### Count Vowels <br>
`function countVowels(str) {` <br>
  `let count = 0;` <br>
  `let vowels = "aeiouAEIOU";` <br>
  `for (let ch of str) {` <br>
    `if (vowels.includes(ch)) {` <br>
     ` count++;` <br>
    `}` <br>
 ` }` <br>
  `return count;` <br>
`}` <br>
### Palindrome Check <br>
`function isPalindrome(str) {` <br>
  `let rev = str.split("").reverse().join("");` <br>
  `return str === rev;`<br>
`}`<br>
