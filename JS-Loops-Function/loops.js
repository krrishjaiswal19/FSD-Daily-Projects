//  `for` loop

// Use kab karte hain?
// Jab hume pehle se pata ho loop kitni baar chalega.

for (start; condition; update) {
  // code
}

// Example: 1 se 5 print karo

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Flow samjho:
// start → condition check → code → update → repeat

// while loop

// Use kab?
// Jab iterations fixed na ho, sirf condition pata ho.

let a = 1;
while (a <= 5) {
  console.log(i);
  a++;
}

// i++ bhool gaye to infinite loop ban jayega.

//  do...while loop

// Special baat:
// Code kam se kam 1 baar zaroor chalega.

let b = 1;
do {
  console.log(b);
  b++;
} while (b <= 5);