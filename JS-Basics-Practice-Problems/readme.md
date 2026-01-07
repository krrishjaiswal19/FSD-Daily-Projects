# FSD — JavaScript Operators + Conditions

## 1. Arithmetic Operators

Used for mathematical calculations.
| Operator | Meaning   | Example       |
| -------- | --------- | ------------- |
| `+`      | Add       | `10 + 5 → 15` |
| `-`      | Subtract  | `10 - 5 → 5`  |
| `*`      | Multiply  | `10 * 5 → 50` |
| `/`      | Divide    | `10 / 5 → 2`  |
| `%`      | Remainder | `10 % 3 → 1`  |


## 2. Comparison Operators

Used to compare two values (result → true / false).
| Operator | Meaning              |
| -------- | -------------------- |
| `>`      | greater than         |
| `<`      | less than            |
| `>=`     | greater or equal     |
| `<=`     | less or equal        |
| `==`     | equal (value)        |
| `===`    | equal (value + type) |

## 3. Logical Operators

Multiple conditions ko combine karne ke liye.
| Operator | Meaning |   |    |
| -------- | ------- | - | -- |
| `&&`     | AND     |   |    |
| `        |         | ` | OR |
| `!`      | NOT     |   |    |

## if / else / nested if

let num = 10;

if (num > 0) {

  console.log("Positive");
  
} else if (num < 0) {

  console.log("Negative");
  
} else {

  console.log("Zero");
  
}

Logic samjho:

Condition true → if

False → else if

Sab false → else

## 5. Switch Case

When fixed values ho.

let day = 3;

switch (day) {

  case 1: console.log("Monday"); break;
  
  case 2: console.log("Tuesday"); break;
  
  case 3: console.log("Wednesday"); break;
  
  default: console.log("Invalid");
  
}


---

# JavaScript Loops (Concept + Practice)

1️⃣ `for` loop

Use kab karte hain?
Jab hume pehle se pata ho loop kitni baar chalega.

for (start; condition; update) {
  // code
}

Example: 1 se 5 print karo

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Flow samjho:
start → condition check → code → update → repeat

2️⃣ while loop

Use kab?
Jab iterations fixed na ho, sirf condition pata ho.

let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

⚠️ i++ bhool gaye to infinite loop ban jayega.

3️⃣ do...while loop

Special baat:
Code kam se kam 1 baar zaroor chalega.
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);


### Functions (Most Important Concept)

-Function kya hota hai?
-Function ek machine jaisa hota hai:
-input leta hai
-kaam karta hai
-output deta hai

## Normal Function

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8


# Breakdown:

a, b → parameters

return → result bhejta hai

## Arrow Function (Short & Modern)
const add = (a, b) => {
  return a + b;
};


# One-line version:

const add = (a, b) => a + b;