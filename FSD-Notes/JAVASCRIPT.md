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
# FSD – JavaScript Arrays (Deep) <br>
## Array Traversing <br>
Meaning: Array ke har element par ek-ek karke jaana. <br> <br>
`let arr = [10, 20, 30, 40];` <br>
// using for loop <br>
`for (let i = 0; i < arr.length; i++) {` <br>
  `console.log(arr[i]);` <br>
`}` <br> <br>
// using for...of <br>
`for (let val of arr) {` <br>
  `console.log(val);`  <br>
`}`  <br> <br>
Yaad rakho: <br>
`arr.length` → total elements <br>
`i` → index <br> 
`arr[i]` → element <br>
## push, pop, shift, unshift <br>
`let arr = [1, 2, 3];` <br>
`arr.push(4);`    // end me add → [1,2,3,4] <br>
`arr.pop();`       // end se remove → [1,2,3] <br>
`arr.unshift(0);`  // start me add → [0,1,2,3] <br>
`arr.shift();`     // start se remove → [1,2,3] <br> <br>
Short rule: <br>
push / pop → end <br>
shift / unshift → start <br>
## slice vs splice (IMPORTANT) <br>
`let arr = [1,2,3,4,5];` <br>
`let a = arr.slice(1,4);` <br> 
`console.log(a);`   // [2,3,4] <br>
`console.log(arr);` // original SAME <br>
`let b = arr.splice(1,2);` <br>
`console.log(b);`   // [2,3] <br>
`console.log(arr);` // original CHANGE → [1,4,5] <br> <br>
Method	Original array <br>
slice	❌ change nahi <br>
splice	✅ change hota <br>
## concat (arrays jodna) <br>
`let a = [1,2];` <br>
`let b = [3,4];` <br>
`let c = a.concat(b);` <br>
console.log(c);` // [1,2,3,4] <br>
## Practice Problems <br>
### Sum of Array <br>
`let arr = [1,2,3,4]; `<br>
`let sum = 0;` <br>
`for (let num of arr) {` <br>
  `sum += num;` <br>
`}` <br>
`console.log(sum);` // 10 <br>
### Max / Min <br>
`let arr = [5,2,9,1];` <br>
`let max = arr[0];` <br>
`let min = arr[0];`<br>
`for (let i = 1; i < arr.length; i++) { `<br>
  `if (arr[i] > max) max = arr[i];` <br>
  `if (arr[i] < min) min = arr[i];` <br>
`}` <br>
`console.log(max, min);` // 9 1 <br>
### Remove Duplicates <br>
`let arr = [1,2,2,3,1];` <br>
`let unique = [];` <br>
`for (let num of arr) {` <br>
  `if (!unique.includes(num)) {` <br>
   `unique.push(num);` <br>
  `}` <br>
`}` <br>
`console.log(unique);` // [1,2,3] <br>
> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.<br>
><br>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. <br>
## Tables <br>
| Left columns  | Right columns | <br> <br>
| left foo      | right foo     | <br>
| left bar      | right bar     | <br>
| left baz      | right baz     | <br>
## Blocks of code <br>
# FSD – JavaScript Array Methods (IMPORTANT) <br>
## forEach() – Sirf loop chalane ke liye <br>
👉 return kuch nahi karta, bas har element par kaam karta hai. <br>
Syntax <br>
`arr.forEach((item, index) => {` <br>
  // kaam <br> 
`});` <br> <br>
Example <br>
`let arr = [10, 20, 30];` <br>
`arr.forEach((num) => {` <br>
  `console.log(num * 2);` <br>
`});` <br> <br>
🧠 Samjho: <br>
forEach = sirf print / update / side-effect <br>
naye array ke liye ❌ <br>
## map() – New array banana <br>
👉 Har element ko change karke naya array deta hai. <br>
Syntax <br>
`let newArr = arr.map((item) => {` <br>
  `return item;` <br>
`});`<br> <br>
Practice – Double Numbers <br>
`let nums = [1, 2, 3, 4];` <br>
`let doubled = nums.map((n) => {` <br>
  `return n * 2;` <br>
`});` <br>
`console.log(doubled);` // [2,4,6,8] <br>
🧠 Rule: <br> <br>
map = same length ka new array <br>
original array change ❌ <br>
## filter() – Condition ke basis par channa <br>
👉 Sirf wahi elements jo condition pass karein. <br>
Syntax <br>
`let newArr = arr.filter((item) => {` <br>
  `return condition;`<br>
`});` <br> <br>
Practice – Even Numbers<br>
`let nums = [1,2,3,4,5,6];` <br>
`let evens = nums.filter((n) => {` <br>
  `return n % 2 === 0;` <br>
`});` <br>
`console.log(evens);` // [2,4,6]<br> <br>
🧠 Rule: <br>
`filter = condition true → element add <br>
`false → ignore <br>
## reduce() – Sabko ek value me reduce karna <br>
👉 Sum, total, max, min, object banana etc. <br>
Syntax <br>
`arr.reduce((acc, curr) => {` <br>
  `return updatedAcc;` <br>
`}, initialValue);` <br> <br>
Practice – Sum <br> 
`let nums = [10, 20, 30];` <br>
`let sum = nums.reduce((acc, curr) => {` <br>
  `return acc + curr;` <br>
`}, 0);` <br>
`console.log(sum);` // 60 <br> <br>
Dry Run <br>
acc	curr	result <br>
0	10	10 <br> 
10	20	30 <br>
30	30	60 <br>
🧠 acc = total, curr = current value <br>
