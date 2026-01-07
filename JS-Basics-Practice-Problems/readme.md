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