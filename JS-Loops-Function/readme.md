### JavaScript Loops (Concept + Practice)

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