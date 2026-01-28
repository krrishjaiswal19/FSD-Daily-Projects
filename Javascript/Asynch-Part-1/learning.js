// Synchronous vs Asynchronous
// Synchronous (Blocking)
// Ek kaam complete → tab next start
console.log("Start");
console.log("Middle");
console.log("End");
// Output order same rahega

// Asynchronous (Non-blocking)
// Time lene wala kaam side me chala jata hai
console.log("Start");
setTimeout(() => {
  console.log("Middle");
}, 2000);
console.log("End");
// Output:
Start
End
Middls
// JS wait nahi karta, baaki code chal jata hai.

// setTimeout()
// Ek baar delay ke baad function run karta hai
setTimeout(function () {
  console.log("Hello after 2 sec");
  }, 2000);
// Use cases:
// Loader show karna
// Notification delay
// Animation delay

// setInterval()
// Har fixed interval me repeat hota hai
  let count = 1;
  let intervalId = setInterval(() => {
    console.log(count);
      count++;
      }, 1000)
// Stop karne ke liye:
      clearInterval(intervalId);
// Use cases:
// Time
// Clock
// Live countdown

// Callback Functions
// Function jo dusre function ko argument me pass hota hai
    function greet(name, callback) {
    console.log("Hi " + name);
    callback();
    }
    function sayBye() {
    console.log("Bye!");
    }
    greet("Rahul", sayBye);

// Why callbacks?
// Async ka result handle karne ke liye
// setTimeout, event listeners, API calls
// callback Hell (Concept)

// Nested callbacks jo code ko confusing bana dete hain
    setTimeout(() => {
    console.log("Task 1");

    setTimeout(() => {
    console.log("Task 2");

    setTimeout(() => {
    console.log("Task 3");
    }, 1000);

    }, 1000);

    }, 1000);
// Problem:
// Readability kam
// Debug karna hard
// Maintain karna mushkil
// Isi problem ko solve karne ke liye baad me Promises & async/await aate hain